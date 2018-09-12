import React from 'react';
import PropTypes from 'prop-types';

const CatchButton = (props) => (
  <button onClick={props.onClick} disabled={props.isCaught} id={props.id}>
    {props.isCaught ? 'Disable' : 'Catch'}
  </button>
);

CatchButton.prorTypes = {
  onClick: PropTypes.func.isRequired,
  isCaught: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default CatchButton;