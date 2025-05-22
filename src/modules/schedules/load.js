import { scheduleFetchByDay } from "../../services/schedule_fetch_by_day.js"
import { hoursLoad } from "../form/hours_load.js";
import { schedulesShow } from "../schedules/show.js"

const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  const date = selectedDate.value;
  const dailySchedules = await scheduleFetchByDay({ date });

  schedulesShow({dailySchedules})
  hoursLoad({ date, dailySchedules });
}