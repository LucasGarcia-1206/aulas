import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule_cancel.js";

const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")){
      const item = event.target.closest("li")
      const { id } = item.dataset;

      if (id) {
        const isConfirm = confirm(
            "Você tem certeza que deseja cancelar este agendamento?"
          );

        if (isConfirm) {
          await scheduleCancel({ id });
          schedulesDay();
        }
      }
    }
  })
})