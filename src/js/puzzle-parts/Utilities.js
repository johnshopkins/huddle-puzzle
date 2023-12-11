import React from 'react';
import PropTypes from 'prop-types';

import InfoIcon from '../icons/Info';

import '../../css/Utilities.scss';

const Utilities = ({ hidden, openInfoModal }) => {

  const attributes = {
    'aria-hidden': hidden,
    className: 'utils',
  };

  return (
    <div {...attributes}>
      <button aria-label={'Information'} onClick={openInfoModal}>
        <InfoIcon /> How to play
      </button>
    </div>
  );
}


Utilities.Utilities = {
  openInfoModal: PropTypes.func.isRequired,
};

export default Utilities;
