
import logo from '../../../assets/logo.png';
import { Heart, Home, Phone, Users } from 'react-feather';

const navigationLinks = [
    {
        label: 'Accueil',
        url: '#',
        icon: <Home />,
    }, {
        label: 'Qui sommes nous?',
        url: '#',
        icon: <Users />,
    }, {
        label: 'Contact',
        url: '#',
        icon: <Phone />,
    },
    {
        label: 'Devenir praticien',
        url: '/become-practitioner',
        icon: <Heart />,
    }
];

function Header() {
    return (
        <header>
            <nav className="p-3 bg-white rounded-lg m-1 flex flex-row justify-between max-w-7xl mx-auto">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo" className="h-10" />
                </a>
                {/* <h2 className="slogan">Découvrez des séances gratuites avec nos praticiens qualifiés !</h2> */}
                <ul className="navbar-nav text-gray-600 flex flex-row gap-3">
                    {
                        navigationLinks.map((link, index) => (
                            <li className="nav-item px-3 py-1 bg-gray-100 flex items-center rounded-lg" key={index}>
                                <a className="nav-link flex gap-2" href={link.url}>
                                    {link.icon}
                                    {link.label}
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