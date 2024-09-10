import { RAPID_API_KEY, RAPID_API_HOST } from "@/config/config";

const URL = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cas?model=corolla";
const OPTIONS = {
  method: "GET",
  headers: {
    "x-rapidapi-key": RAPID_API_KEY,
    "x-rapidapi-host": RAPID_API_HOST,
  },
};

console.log(RAPID_API_HOST, RAPID_API_KEY);

export const getCars = async () => {
  try {
    const response = await fetch(URL, OPTIONS);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
