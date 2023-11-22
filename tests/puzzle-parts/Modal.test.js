/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import Modal from '../../src/js/puzzle-parts/Modal';

const getProps = (override) => {

  return {
    classes: [],
    label: '',
    onClose: () => { },
    testing: true,
    ...override,
  };
};

describe('Modal', () => {

  describe('Close', () => {

    test('Calls onClose callback when close button is pressed', async () => {

      const onClose = jest.fn();

      const props = getProps({
        label: 'Modal label',
        onClose: onClose
      });
      const { getByLabelText, getByRole } = render(<Modal {...props} />);

      expect(getByLabelText('Modal label')).toHaveAttribute('class', 'hh-modal-container');
      expect(document.body).toHaveAttribute('class', 'modal-open');

      await userEvent.click(getByRole('button'));
      expect(onClose).toHaveBeenCalledTimes(1);

    });

    test('Calls onClose callback when escape key is pressed', async () => {

      const onClose = jest.fn();

      const props = getProps({
        onClose: onClose,
      });

      const { container } = render(<Modal {...props} />);

      await userEvent.type(container, '{escape}');

      expect(onClose).toHaveBeenCalledTimes(1);

    });

  });

});
