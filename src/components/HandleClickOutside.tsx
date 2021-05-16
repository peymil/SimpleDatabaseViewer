import React from 'react';
import Clickable from './Clickable';

interface HandleClickOutsideProps {
  onClick: (e: React.FocusEvent<HTMLButtonElement>) => void;
}
const HandleClickOutside = ({ onClick }: HandleClickOutsideProps) => (
  // eslint-disable-next-line jsx-a11y/control-has-associated-label
  <button type="button" onFocus={onClick} id="OutsideClick" />
);
export default HandleClickOutside;
