import Header from "../../shared/components/Header";
import Footer from "../../shared/components/Footer";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            
            <main className="pb-10 mx-auto w-screen bg-white">
                
                <div className="max-w-8xl mx-auto">
                    {
                        children
                    }
                </div>
            </main>
            <Footer />
        </>
    
    )
};

export default Layout;