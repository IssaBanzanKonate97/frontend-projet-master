import { useContext } from "react";
import { AuthContext } from "../app_contexts/Auth";

const useUserSession = () => useContext(AuthContext).user;

export default useUserSession;