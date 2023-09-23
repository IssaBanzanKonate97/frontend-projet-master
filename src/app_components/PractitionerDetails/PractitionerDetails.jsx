import React from 'react';
import logo from '../../assets/logo.png';
import { Link, animateScroll as scroll } from 'react-scroll';
import profilePicture from '../../assets/thumbnail.jpeg';
import './PraticionerDetails.css';

const navList = [
  { id: 0, title: "L'essentiel", domOffset: 64 },
  { id: 1, title: "Carte", domOffset: 242 },
  { id: 2, title: "Présentation", domOffset: 648 },
  { id: 3, title: "Horaires", domOffset: 1486 },
];

const PraticionerDetails = () => {
  return (
    <div>
      <nav className="navbar-expand-sm bg-dark navbar-dark custom-navbar">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" className="logo-image" />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Accueil</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Recherche</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Inscription</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Connexion</a>
          </li>
        </ul>
      </nav>
      <div className='PraticionerDetails-container'>
        <div className="profile-picture">
          <img src={profilePicture} alt="Profile" className="profile-image" />
          <div className="profile-info">
            <p className="profile-name">ISSA<br />Praticien</p>
          </div>
        </div>
        <div className="nav-list-container ">
          <ul className="nav-list">
            {navList.map(item => (
              <li key={item.id}>
                <a href={`#${item.title}`} className="nav-link">{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
      <div className="presentation-person-container ">
           <h2>Essentiel</h2>
           <p>Obtenez un rendez-vous plus rapidement</p>
           <p>Consultez votre praticien de chez vous</p>
           <p>Échangez des documents en toute sécurité</p>
        </div>
        <div className="presentation-person2-container ">
          <h2>Présentation</h2>
          <p>Riche de 10 ans d'expériences, j'exerce en tant que Psychologue, Psychanalyste, Thérapeute EMDR, Préparatrice mentale, Coach sur Paris et sur le Val de Marne.</p>
          <p>J'accompagne, soutiens et coach tout adulte, qui est - ou a été - en souffrance psychique quelle qu'elle soit, uniquement en ligne, en séance individuelle, en groupe.</p>
          <p>Elle peut concerner la vie personnelle, la sphère professionnelle et/ou sportive :</p>
          <p>burn out,</p>
          <p>traumatisme,</p>
          <p>dépression,</p>
          <p>analyse professionnelle,</p>
          <p>angoisse,</p>
          <p>souffrance pendant l'enfance liée à différentes problématiques,</p>
          <p>attentat,</p>
          <p>problème sexuel,</p>
          <p>deuil,</p>
          <p>stress,</p>
          <p>problème sexuel,</p>
          <p>deuil,</p>
          <p>stress,</p>
          <p>problème sexuel,</p>
          <p>deuil,</p>
          <p>stress,</p>

          
          <p>recherche de performance, etc.</p>
        </div>
    </div>
  );
};

export default PraticionerDetails;
