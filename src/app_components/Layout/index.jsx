import Header from "../../shared/components/Header";
import Footer from "../../shared/components/Footer";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="pb-10 mx-auto w-screen bg-slate-100">
                <div className="pt-1 max-w-7xl mx-auto">
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