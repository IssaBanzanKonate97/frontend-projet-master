import { useState } from 'react';
import logo from '../../assets/logo.png';
import './Presentation.css';
import backgroundImage from '../../assets/DSCF8840-scaled.webp';
import contact from '../../assets/fdf.png';
import { Link } from 'react-router-dom';

const Presentation = () => {
  const [searchValue, setSearchValue] = useState('');
  const [practitioners, setPractitioners] = useState([
    { name: 'RDV visio gratuit de 15 min', Praticien: 'ISSA', establishment: 'Adios' },
    { name: 'RDV avec viso', Praticien: 'James', establishment: 'ADIOS' },
    { name: 'RDV via Visio', Praticien: 'BEN', establishment: 'ADIOS' },
    { name: 'RDV via Visio', Praticien: 'jet', establishment: 'ADIOS' },
    { name: 'RDV via Visio', Praticien: 'micka', establishment: 'ADIOS' },
    { name: 'RDV via Visio', Praticien: 'anna', establishment: 'ADIOS' },

  ]);
  const [filteredPractitioners, setFilteredPractitioners] = useState([]);

  const handleSearch = () => {

    const filteredPractitioners = practitioners.filter(practitioner =>
      practitioner.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      practitioner.Praticien.toLowerCase().includes(searchValue.toLowerCase()) ||
      practitioner.establishment.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredPractitioners(filteredPractitioners);
  };

  return (
    <div className="presentation-container">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" className="logo-image" />
        </a>
        <h2 className="slogan">Découvrez des séances gratuites avec nos praticiens qualifiés !</h2>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Accueil</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Qui sommes nous?</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Gérer mes RDV</a>
          </li>
        </ul>
      </nav>
      <img src={backgroundImage} alt="Description de l'image" className="image-style" />


      <div className="hero-section">
        <h1 className='rt'>Réservez des séances gratuites avec des praticiens</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Nom, praticien, Établissement"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            className="search-input"
            style={{ color: 'black' }}
          />
          <button className="cta-button" onClick={handleSearch}>
            Rechercher
          </button>
          {filteredPractitioners.length > 0 && (
            <div>
              <ul className="suggestions-list" size="1" size="5" style={{ background: 'white', color: 'black' }}>
                {filteredPractitioners.map((practitioner, index) => (
                  <Link to="/practitionerDetails" key={index}>
                    <li>
                      {practitioner.name} - Praticien: {practitioner.Praticien}
                    </li>
                  </Link>

                ))}
              </ul>

            </div>
          )}
        </div>
      </div>


      <div>
        {/* Première section */}
        <div
          className="new-section"
          onClick={() => {

            alert("La première div a été cliquée !");
          }}
        >
          <p><strong style={{ marginLeft: "60px", fontFamily: "sans-serif", marginTop: "Opx" }}>FAQ</strong><br />La section FAQ pour répondre aux questions courantes que les utilisateurs pourraient avoir.</p>
        </div>

        {/* Deuxième section */}
        <div
          className="deuxieme-section"
          onClick={() => {

            alert("La deuxième div a été cliquée !");
          }}
        >
          <p><strong style={{ marginLeft: "10px", fontFamily: "sans-serif" }}>Blog/Actualité</strong><br />Conténu lié a notre domaine comme des articles sur les avantages des séances de formation</p>
        </div>

        {/* Troisième section */}
        <div
          className="troisieme-section"
          onClick={() => {

            alert("La troisième div a été cliquée !");
          }}
        >
          <p><strong style={{ marginLeft: "30px", fontFamily: "sans-serif" }}>Partenariat</strong><br />Nos partenaires avec des écoles de formation d'autres organisations et entreprises</p>
        </div>
      </div>
      <div className="doctolib-section">
        <h1>INSTITUTADIOS:<br />au service de votre santé</h1>
      </div>
      <div className="image-section">
        <div className="image-wrapper">
          <img src={contact} alt="Description de l'image 1" />
          <p>Accédez rapidement aux disponibilités <br /> de tous vos praticiens</p>
        </div>

        <div className="image-wrapper">
          <img src={contact} alt="Description de l'image 2" />
          <p>Une communauté de praticiens pour vous accompagner</p>
        </div>

        <div className="image-wrapper">
          <img src={contact} alt="Description de l'image 3" />
          <p>Gérez vos rendez-vous et documents </p>
        </div>
      </div>



    </div>
  );
};

export default Presentation;
