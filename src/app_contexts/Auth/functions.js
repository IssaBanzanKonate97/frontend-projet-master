import axios from "axios";

const loginUser = async (username) => {
  const backendBaseUrl = "http://localhost:8080";

  const payload = { username, payload };

  const response = await axios.post(`${backendBaseUrl}/login`, payload);

  console.log("response", response);

  return response;
};

export { loginUser };
