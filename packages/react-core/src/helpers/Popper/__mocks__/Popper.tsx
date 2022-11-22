import React from 'react';
import { PopperProps } from '../Popper';

export const Popper = ({ isVisible, popper }: PopperProps) => (
  <>
    <p>{`isVisible: ${isVisible}`}</p>
    <div data-testid="mock-popper">{popper}</div>
  </>
);
