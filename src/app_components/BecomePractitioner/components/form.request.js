import axios from "axios";

const formRequest = async (adaptedData) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const url = `${import.meta.env.VITE_BACKEND_URL}/api/become-practitioner`;

    const { data } = await axios.post(url, adaptedData);

    const { success } = data;

    if (!success) {
      throw data.message;
    }
  } catch (error) {
    throw error;
  }
};

export default formRequest;
