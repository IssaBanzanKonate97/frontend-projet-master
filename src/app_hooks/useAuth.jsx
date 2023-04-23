import { useContext } from "react";
import { AuthContext } from "../app_contexts/Auth";

const useAuth = () => useContext(AuthContext);

export default useAuth;