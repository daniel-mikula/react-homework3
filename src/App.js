import React, { Component } from 'react';
import AddPerson from './AddPerson'
import './App.css';

class App extends Component {

  state = {
    people: []
  };

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "/data/people.json")
      .then(response => response.json())
      .then(people => this.setState({ people }));
  }

  handleToggleFav = personId => {
    this.setState({
      people: this.state.people.map(person => {
        return person.id === personId
          ? {
            ...person,
            isFavorite: !person.isFavorite
          }
          : person;
      })
    });
  };

  addNewPeople = (name, surname, phone) => {

    this.setState({
      people: this.state.people.concat({
        id: Date.now(),
        name,
        surname,
        phone,
        isFavorite: false
      })
    });

  };

  removePeople = personId => {
    this.setState({
      people: this.state.people.filter(person => person.id !== personId)
    });
  };
  
  render() {
    return (
      <div className="App">
        <AddPerson handleAddNew={this.addNewPeople} ></AddPerson>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.people.map(person => {
              return (
                <tr key={person.id}
                  className={person.isFavorite ? "favorite" : ""}>
                  <td>{person.name}</td>
                  <td>{person.surname}</td>
                  <td>{person.phone}</td>
                  <td><button onClick={() => this.handleToggleFav(person.id)}>Toggle favorite</button></td>
                  <td><button onClick={() => this.removePeople(person.id)}>Remove</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
