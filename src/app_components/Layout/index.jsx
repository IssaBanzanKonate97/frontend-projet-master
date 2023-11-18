import Header from "../../shared/components/Header";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return <main className="h-screen w-screen bg-slate-100">
        <Header />
        <div className="pt-6 max-w-7xl h-screen mx-auto">
            {
                children
            }
        </div>
    </main>
};

export default Layout;