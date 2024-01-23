// ExternalData.test.js

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ExternalData from './ExternalData';

test('fetches and displays external data', async () => {
  render(<ExternalData />);
  const loadingElement = screen.getByText('Laddar...');

  // Kontrollera att laddningstexten visas innan data hämtas
  expect(loadingElement).toBeInTheDocument();

  // Vänta på att data ska hämtas och renderas
  await waitFor(() => {
    const postElement = screen.getByText('sunt autem fugiat sit officiis autem');
    expect(postElement).toBeInTheDocument();
  });
});
