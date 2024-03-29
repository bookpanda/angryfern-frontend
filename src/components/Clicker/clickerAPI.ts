import { API_KEY, API_URL } from "@/constants/constants";

export const sendClickCount = async (count: number, countryCode: string) => {
  const body = {
    code: countryCode,
    amount: count,
  };

  try {
    await fetch(`${API_URL}/scores/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.error("Error sending click count:", error);
  }
};

type IpInfoResponse = {
  country: string;
};

export const getCountryCode = async () => {
  try {
    const response = await fetch("https://ipinfo.io/json");
    const data: IpInfoResponse = await response.json();
    return data.country;
  } catch (error) {
    console.error("Error getting ip info:", error);
  }
};
