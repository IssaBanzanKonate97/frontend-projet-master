import React, { useState } from 'react';
import './Register.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Nom: "",
      Prenom: "",
      Filiere: "",
      MotDePasse: "",
      Identifiant: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Ajouter ici le code pour envoyer les données du formulaire
  };

  render() {
    const { Nom, Prenom, Filiere, MotDePasse, Identifiant } = this.state;

    return (
      <div className="wrapper">
        <div className="card card-4">
          <div className="card-body">
            <form className='flex flex-col justify-center' onSubmit={this.handleSubmit}>
              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">Nom</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="Nom"
                      value={Nom}
                      onChange={this.handleChange}
                      placeholder="Nom"
                      required
                    />
                  </div>
                </div>
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">Prénom</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="Prenom"
                      value={Prenom}
                      onChange={this.handleChange}
                      placeholder="Prénom"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">Filière</label>
                    <select className="input--style-4" name="Filiere" value={Filiere} onChange={this.handleChange} required>
                      <option value="">Choisissez un secteur</option>
                      <option value="agroalimentaire">agroalimentaire</option>
                      <option value="élevage">élevage</option>
                      <option value="viticulture">viticulture</option>
                      <option value="céréales">céréales</option>
                    </select>
                  </div>
                </div>
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">Mot de passe</label>
                    <input
                      className="input--style-4"
                      type="password"
                      name="MotDePasse"
                      value={MotDePasse}
                      onChange={this.handleChange}
                      placeholder="Mot de passe"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">Identifiant</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="Identifiant"
                      value={Identifiant}
                      onChange={this.handleChange}
                      placeholder="Identifiant"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="p-t-15">
                <button
                  className="btn btn--radius-2 btn--green"
                  type="submit"
                >
                  Inscrivez-vous
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;