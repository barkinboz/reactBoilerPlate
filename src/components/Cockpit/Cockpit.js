import React from 'react';
import PropTypes from 'prop-types';

const cockpit = props => {
  const classes = [];
  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  };

  if (props.showPersons) {
    classes.push('danger');
  }

  if (props.persons.length <= 2) {
    classes.push('danger');
  }
  if (props.persons.length <= 1) {
    classes.push('onlyLast');
  }

  return (
    <div>
      <p className={classes.join(' ')}>İnsanların Üstüne Bas ve Sil</p>
      <button onClick={props.togglePersonsHandler} style={style}>
        İsimDegistirici
      </button>
    </div>
  );
};

cockpit.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.object).isRequired,
  showPersons: PropTypes.bool.isRequired,
  togglePersonsHandler: PropTypes.func.isRequired,
};

export default cockpit;
