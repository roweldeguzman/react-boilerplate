import React from 'react';
import PropTypes from 'prop-types';
import CounterWrapper from './styles/counter.style';

function Counter(props) {

  const {
    counter,
    onClickAdd,
    onClickMinus
  } = props;

  return(
    <CounterWrapper>
      <p>
        { counter }
      </p>
      
      <button type="button" onClick={onClickMinus}>Minus</button>
      <button type="button" onClick={onClickAdd}>Add</button>
    </CounterWrapper>
  )
}


Counter.propTypes = {
  counter: PropTypes.number.isRequired,

  onClickAdd: PropTypes.func.isRequired,
  onClickMinus: PropTypes.func.isRequired
}

export default Counter;