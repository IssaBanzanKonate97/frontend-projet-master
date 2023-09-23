import { useContext } from "react";
import { PractitionerContext } from "../app_contexts/Practitioner";

const usePractitionerService = () => useContext(PractitionerContext);

export default usePractitionerService;