import { apiConfig } from "@/utils/apiConfig";

// getData.js
async function getDataSlug(slug) {
  try {
    const response = await fetch(
      `${apiConfig.baseUrl}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${slug}`,
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

export default getDataSlug;
