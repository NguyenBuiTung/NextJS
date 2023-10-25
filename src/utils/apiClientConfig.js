import axios from "axios";

const customHeaders = {
  TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwMSIsIkhldEhhblN0cmluZyI6IjMwLzA5LzIwMzEiLCJIZXRIYW5UaW1lIjoiMTk0ODQ5MjgwMDAwMCIsIm5iZiI6MTYwMTIyNjAwMCwiZXhwIjoxOTQ4NjQwNDAwfQ.4l-eTzlgVnFczfvc2Or7BNPOcaesY3Kwc8RoNm-o-6M",
  "Content-Type": "application/json",
  // Thêm các headers khác tùy theo yêu cầu của bạn
};

const apiClient = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api",
  headers: customHeaders,
});

export default apiClient;
