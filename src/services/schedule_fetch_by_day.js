import dayjs from "dayjs";
import { apiConfig } from "./api_config.js";

export async function scheduleFetchByDay({ date }) {
  try{
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    const data = await response.json();

    const dailySchedule = data.filter((schedule) => 
      dayjs(date).isSame(schedule.when, "day")
    );

    return dailySchedule;
  }catch (error) {
    alert("Não foi possível buscar a agenda do dia", error);
  }

}