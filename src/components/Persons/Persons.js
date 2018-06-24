import React from 'react';
import PropTypes from 'prop-types';
import Person from './Person/Person';

const persons = props =>
  props.persons.map((person, index) => (
    <Person
      key={person.id}
      id={person.id}
      name={person.name}
      age={person.age}
      changed={event => props.nameChangeHandler(event, person.id)}
      click={() => props.deletePersonHandler(index)}
    />
  ));

persons.propTypes = {
  persons: PropTypes.arrayOf(Person),
  nameChangeHandler: PropTypes.func.isRequired,
  deletePersonHandler: PropTypes.func.isRequired,
};

export default persons;
