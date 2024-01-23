// Navbar.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../../Navbar';

test('renders navigation links and navigates to correct pages', () => {
  render(<Navbar />);
  const homeLink = screen.getByText('Hem');
  const aboutLink = screen.getByText('Om oss');
  const contactLink = screen.getByText('Kontakt');

  // Kontrollera att länkarna renderas korrekt
  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();

  // Simulera klick på länkarna och kontrollera att de navigerar till rätt sidor (eller URL:er)
  fireEvent.click(homeLink);
  expect(window.location.pathname).toBe('/'); // Kontrollera att det är startsidan

  fireEvent.click(aboutLink);
  expect(window.location.pathname).toBe('/om'); // Kontrollera att det är sidan "Om oss"

  fireEvent.click(contactLink);
  expect(window.location.pathname).toBe('/kontakt'); // Kontrollera att det är sidan "Kontakt"
});
