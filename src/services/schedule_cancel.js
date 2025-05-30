import { apiConfig } from "./api_config.js";

export async function scheduleCancel({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`,{
      method: "DELETE",
    })
    alert("Agendamento cancelado com sucesso");
  } catch (error) {
    console.error(error);
    alert("Erro ao cancelar o agendamento");
  }
}