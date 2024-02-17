import logo from '../../../assets/Blue_Blob_Health_Care_Logo_4_-removebg-preview.png';
import { LogIn, Home, Phone, Users } from 'react-feather';

const navigationLinks = [
    {
        label: 'Home',
        url: '/',
        icon: <Home />,
    }, {
        label: 'Contact us',
        url: '/Contact',
        icon: <Phone />,
    },
    {
        label: 'Log in',
        url: '/Login',
        icon: <LogIn />,
    }
];

function Header() {
    return (
        <header>
           <nav className="px-3 py-1 h-20 flex flex-col sm:flex-row justify-between items-center max-w-8xl mx-auto">

                <a className="navbar-brand flex items-center mt-6">
                   
                <img src={logo} alt="logo" className="h-auto w-38 sm:w-47 md:w-36 lg:w-43 object-contain mt-1" />



                </a>
                <ul className="navbar-nav text-white sm:flex sm:flex-row gap-3 items-center mt-5">
                    {
                        navigationLinks.map((link, index) => (
                            <li className="nav-item px-3 py-1 bg-slate-700 flex items-center rounded-lg" key={index}>
                                <a className="nav-link flex gap-2 items-center" href={link.url}>
                                    {link.icon}
                                    
                                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl">{link.label}</span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Header;
