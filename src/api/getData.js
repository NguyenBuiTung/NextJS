import { apiConfig } from "@/utils/apiConfig";

// getData.js
async function getData() {
  try {
    const response = await fetch(
      `${apiConfig.baseUrl}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
      {
        method: "GET",
        headers: apiConfig.headers,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export default getData;
