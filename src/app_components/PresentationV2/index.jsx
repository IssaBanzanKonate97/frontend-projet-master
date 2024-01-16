import Layout from "../Layout";
import HeroSection from "./components/HeroSection";
import Barre from "./components/Barre";
import Fonctionnalite from "./components/Fonctionnalite";
import Rejoins from "./components/Rejoins";
import Fonctionnalite2 from "./components/Fonctionnalite2";
import Fonctionnalite3 from "./components/Fonctionnalite3";
import Fonctionnalite4 from "./components/Fonctionnalite4";

const PresentationV2 = () => {
    return ( 
        <Layout>
            <HeroSection />
            <Barre />
            <Fonctionnalite />
            <Rejoins />
            <Fonctionnalite2  />
            <Fonctionnalite3 />
            <Fonctionnalite4 />
            
        </Layout>
    )
};


export default PresentationV2;