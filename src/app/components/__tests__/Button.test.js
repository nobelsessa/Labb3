// Button.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from 'src/app/components/Button';

test('renders button with correct text and handles click', () => {
  const buttonText = 'Klicka här';
  const onClickMock = jest.fn(); // Skapa en mockfunktion för onClick

  render(<Button text={buttonText} onClick={onClickMock} />);
  const buttonElement = screen.getByText(buttonText);

  // Kontrollera att knappen har rätt text
  expect(buttonElement).toBeInTheDocument();

  // Simulera en klickhändelse på knappen
  fireEvent.click(buttonElement);

  // Kontrollera att onClick-funktionen anropades när knappen klickades
  expect(onClickMock).toHaveBeenCalled();
});
