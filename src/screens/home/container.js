import React from 'react';
import PropTypes from 'prop-types';

function Container (props) {

  const {
    counter,
    onClickAdd,
    onClickMinus
  } = props;


  return(
    <div style={{ textAlign: "center" }}>
      Boilerplate application, that uses react testing library, redux, react suspense, react lazy
      
      <p>
        { counter }
      </p>
      
      <button type="button" onClick={onClickMinus}>Minus</button>
      <button type="button" onClick={onClickAdd}>Add</button>

    </div>
  )
}

Container.propTypes = {
  counter: PropTypes.number.isRequired,

  onClickAdd: PropTypes.func.isRequired,
  onClickMinus: PropTypes.func.isRequired
}

export default Container;