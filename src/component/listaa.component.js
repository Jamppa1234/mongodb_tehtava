// listaa.component.js - Saadaan tieto kannasta axiosin avulla selaimeen

// Selaimen ja palvelimen väliseen kommunikaatioon axios-kirjasto
// Reaction vakiofunktiot:
// componentDidUpdate() - suoritetaan renderoinnin jälkeen
// componentDidMount() - suoritaan kerran heti ensimmäisen renderoinnin jälkeen

import React, { Component } from 'react';
import axios from 'axios';
import ListanRivi from './Taulurivit';

export default class Listaa extends Component {

  // this.statessa määritellään komponentin tila
  // Konstruktori asettaa nyt propseina saatavan business-listaan tiedot:
  constructor(props) {
      super(props);
      this.state = {business: []};
    }

    componentDidUpdate() {
      axios.get('http://localhost:4000/business')
      .then(response => {
      this.setState({ business: response.data });
      })
      .catch(function (error) {
      console.log(error);
      })
      }
// Tietojen haku palvelimelta on elinkaari metodi componentDidMount (luokkapainotteinen komponentti), 
// joka suoritetaan kertaalleen heti komponentin ensimmäisen
// renderöitymisen jälkeen.
// HTTP-pyynnön takaisinkutsufunktio päivittää komponentin tilaa 
// metodilla setState. Metodi toimii siten, että 
// se koskee tilassa ainoastaan niihin avaimiin, mitä parametrina 
// olevassa oliossa on määritelty.
// Metodin setState kutsuminen aiheuttaa aina luokkakomponentin 
// uudelleenrenderöinnin, eli metodin render kutsun.

    componentDidMount(){
      axios.get('http://localhost:4000/business')
        .then(response => {
          this.setState({ business: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.business.map(function(object, i){
          return <ListanRivi obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Henkilölista</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Henkilö</th>
                <th>Yritys</th>
                <th>Numero</th>
                <th colSpan="2">Toiminnot</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }