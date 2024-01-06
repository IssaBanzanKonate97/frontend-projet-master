import Layout from "../Layout";
import HeroSection from "./components/HeroSection";
import Barre from "./components/Barre";
import Fonctionnalite from "./components/Fonctionnalite";
import Rejoins from "./components/Rejoins";

const PresentationV2 = () => {
    return ( 
        <Layout>
            <HeroSection />
            <Barre />
            <Fonctionnalite />
            <Rejoins />
        </Layout>
    )
};

export default PresentationV2;