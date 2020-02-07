/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { PropTypes } from 'prop-types';

function Button(props) {
  const { changeLoginState } = props;
  return (
    <button type="button" onClick={changeLoginState}>Login</button>
  );
}
Button.propTypes = {
  changeLoginState: PropTypes.func.isRequired,
};
export default Button;
