import React from 'react';
import PropTypes from 'prop-types';

import InfoIcon from '../icons/Info';

import '../../css/Utilities.scss';

const Utilities = ({ hidden, openInfoModal }) => {

  const attributes = {
    'aria-hidden': hidden,
    'aria-label': 'Utilities',
    className: 'utils',
    role: 'region',
  };

  return (
    <div {...attributes}>
      <button aria-label={'Information'} onClick={openInfoModal}>
        <InfoIcon />
      </button>
    </div>
  );
}


Utilities.Utilities = {
  openInfoModal: PropTypes.func.isRequired,
};

export default Utilities;
