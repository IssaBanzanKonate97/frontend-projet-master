import Core from "../Core";

class Booking extends Core {
  constructor() {
    super();
  }

  getAvailableSlots = async (date) => {
    const response = await this.requestBackend(
      `/availability?datetime=${date}`,
      "GET"
    );

    return response;
  };
}

export default Booking;
