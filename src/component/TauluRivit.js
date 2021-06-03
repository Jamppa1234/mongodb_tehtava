// TauluRivit.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ListanRivi extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/business/delete/'+this.props.obj._id)
            .then(console.log('Poistettu'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.person_name}
          </td>
          <td>
            {this.props.obj.business_name}
          </td>
          <td>
            {this.props.obj.business_gst_number}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Muokkaa</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Poista</button>
          </td>
        </tr>
    );
  }
}

export default ListanRivi;