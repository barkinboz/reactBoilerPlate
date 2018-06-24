import React from 'react';
import PropTypes from 'prop-types';

import './Person.css';

const person = props => (
  // eslint keyboard listener kuralı kapatmamıza gerek yok
  <div className="Person">
    {' '}
    <p onClick={props.click}>
      Ben {props.name} ve ben {props.age} yaşındayım
    </p>
    <input type="text" onChange={props.changed} />
  </div>
);

person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired,
  click: PropTypes.func.isRequired,
};

export default person;
