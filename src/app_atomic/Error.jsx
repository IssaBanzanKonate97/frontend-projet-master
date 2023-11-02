/* eslint-disable react/prop-types */
import { AlertTriangle } from "react-feather";

const errorDiplayerClassName = "bg-red-50 border-red-300 text-red-700 px-5 py-3.5 m-0.5 rounded-lg gap-2 relative flex flex-row";
const errorDiplayerWideClassName = errorDiplayerClassName + " w-full";

const ErrorDisplayer = ({
    message,
    isWide = false,
}) => {
    return <div className={isWide ? errorDiplayerWideClassName : errorDiplayerClassName} role="alert">
        <AlertTriangle className="w-6 h-6 mr-2 shrink-0" strokeWidth={1.5} />
        <span className="block sm:inline">
            {message ? message : "Une erreur est survenue, veuillez réessayer."}
        </span>
    </div>
};

export default ErrorDisplayer;