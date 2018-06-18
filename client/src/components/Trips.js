import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';


class Trips extends React.Component {
  state = { trips: [] }

  componentDidMount() {
    axios.get('/api/trips')
      .then( res => this.setState({ trips: res.data }) )
  }

  render() {
    const { trips } = this.state;
      return (
        <ul>
          { trips.map( p =>
              <li key={p.id}>
                <Link to={`/trips/${p.id}`}>{p.title}</Link>
              </li>
            )
          }
        </ul>
      )
    }
  }


export default Trips;