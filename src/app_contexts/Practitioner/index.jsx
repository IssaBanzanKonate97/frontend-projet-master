/* eslint-disable react/prop-types */
import { createContext } from "react";
import PractitionerService from "../../app_services/Practitioner";

const PractitionerContext = createContext(null);

const PractitionerProvider = ({ children }) => {
    return <PractitionerContext.Provider
        value={new PractitionerService()}>
        {children}
    </PractitionerContext.Provider>;
};

export { PractitionerContext, PractitionerProvider };