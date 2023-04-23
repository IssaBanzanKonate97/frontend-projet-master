import { createContext, useState } from "react";

const DEFAULT_USER_STATE = {
    id: "0001",
    isAdmin: true,
    username: "Issa",
}

const AuthContext = createContext(DEFAULT_USER_STATE);

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(DEFAULT_USER_STATE);

    /// logic de check de l'utilisateur 

    return <AuthContext.Provider value={{ user }}>
        { children }
    </AuthContext.Provider>
};

export { AuthContext };
export default AuthContextProvider;