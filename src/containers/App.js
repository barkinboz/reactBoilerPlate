import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'a1', name: 'Barkın', age: '28' },
      { id: 'b2', name: 'Taylan', age: '21' },
      { id: 'c3', name: 'Bugra', age: '10' },
    ],
    personStatus: false,
  };

  nameChangeHandler = (event, id) => {
    // find() personu bulmamızı sağlardı
    const personIndex = this.state.persons.findIndex(tempPerson => tempPerson.id === id);
    // ... aynı arraydeki gibi çalışır new gibi state uzerinde direk değişim yapmamaya çalışırız
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    // bir array tanımladık içinide eskisinin verileri ile doldurduk

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    // persons : persons ama shorthand oldugu ıcın ısımlerı aynı sooo persons yeterli

    this.setState({
      persons,
    });
  };

  deletePersonHandler = personIndex => {
    // const presons = this.state.persons.slice
    const personsArrayClone = [...this.state.persons];
    personsArrayClone.splice(personIndex, 1);
    this.setState({ persons: personsArrayClone });
  };

  togglePersonsHandler = () => {
    this.setState(prevState => ({ personStatus: !prevState.personStatus }));
  };

  /* Notlar:
  propsa parametre gönderirken componentin içinde .bind kullanabilirsin this.switchNameHandler.bind(this, 'Sefa')
  ama es6dan sonra bu performans olarak çok negatif etkilediği için constructorda tanımla
  */

  render() {
    // inline style için kullanırız componenet style={style}

    let persons = null;

    if (this.state.personStatus) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            nameChangeHandler={this.nameChangeHandler}
            deletePersonHandler={this.deletePersonHandler}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.personStatus}
          togglePersonsHandler={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}
// React.createElement('div', null, React.createElement('h1', { className: 'App' }, 'agaaa'));   bu compile edilmiş hali

export default App;
