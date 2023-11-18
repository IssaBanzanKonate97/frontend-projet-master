import { Suspense, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
// import useUserSession from "../../app_hooks/contexts_hooks/useUserSession";
import Loading from "../Loading/Loading";

const isProductionEnv = import.meta.env.PROD;

const ProtectedRoute = ({
    children,
    loadMessage = "Chargement en cours ...",
    isAvailableInProduction = true,
}) => {
    let navigate = useNavigate();

    // const user = useUserSession();

    const isAvailableRoute = useMemo(() => {
        if (!isAvailableInProduction && isProductionEnv) return false;
        return true;
    }, [isAvailableInProduction]);

    // useEffect(() => {
    //     if (user === null) {
    //         const claimDisruption = window.location.pathname !== "/" && window.location.pathname !== AppRoutes.AuthSignIn;
    //         const encoredRedirectUrl = encodeURIComponent(window.location.pathname);
    //         return navigate(`${.}?redirectUrl=${encoredRedirectUrl}&code=${claimDisruption ? "claims-disrupt" : "defaultFallback"}`);
    //     }
    // }, [user]);

    return isAvailableRoute ? user === undefined ?
        <Loading /> :
        user !== null ?
            <Suspense fallback={
                <Loading message={loadMessage} />
            }>
                {children}
            </Suspense>
            : <Loading />
        : <Loading message="This route is not available now. Please try again later."
            showLoader={false} />
};

export default ProtectedRoute;