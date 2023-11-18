import practitioners_details from "../../shared/data/practitioners.details.data"; // fixtures
import Booking from "../Booking";

class PractitionerService extends Booking {
  constructor() {
    super();
  }

  async getPractionerDetails(id) {
    await this.sleep(500);

    const matchingPractitioner = practitioners_details.find(
      (practitioner) => practitioner.id === Number(id)
    );

    return matchingPractitioner;
  }
}

export default PractitionerService;
