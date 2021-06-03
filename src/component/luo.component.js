// luo.component.js - Tällä sivulla luodaan tallennuslomake ja tallennetaan se tietokantaan. 
// Tähän tarvitaan axiosia

import React, { Component } from 'react';
import axios from 'axios';

export default class Luo extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this); //bind-metodi
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: '',
      business_name: '',
      business_gst_number:''
    }
  }
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      business_name: e.target.value
    })  
  }
  onChangeGstNumber(e) {
    this.setState({
      business_gst_number: e.target.value
    })
  }

// lomakkeen lähettäminen onSubmit:lla palvelimelle

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,
      business_name: this.state.business_name,
      business_gst_number: this.state.business_gst_number
    };
    axios.post('http://localhost:4000/business/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      person_name: '',
      business_name: '',
      business_gst_number: ''
    })
  }
 // Tietoen lisäämislomake
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Lisää tietoa tietokantaan</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Henkilön nimi:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.person_name}
                      onChange={this.onChangePersonName}
                      />
                </div>
                <div className="form-group">
                    <label>Yrityksen nimi: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.business_name}
                      onChange={this.onChangeBusinessName}
                      />
                </div>
                <div className="form-group">
                    <label>Numero: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.business_gst_number}
                      onChange={this.onChangeGstNumber}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Tallenna tieto" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}