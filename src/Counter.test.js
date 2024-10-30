import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renderiza o contador com valor inicial', () => {
  render(<Counter />);
  const countElement = screen.getByText(/Contador: 0/i);
  expect(countElement).toBeInTheDocument();
});

test('incrementa o contador ao clicar no botão Incrementar', () => {
  render(<Counter />);
  const buttonIncrement = screen.getByText(/Incrementar/i);
  fireEvent.click(buttonIncrement);
  const countElement = screen.getByText(/Contador: 1/i);
  expect(countElement).toBeInTheDocument();
});

test('decrementa o contador ao clicar no botão Decrementar', () => {
  render(<Counter />);
  const buttonIncrement = screen.getByText(/Incrementar/i);
  fireEvent.click(buttonIncrement);
  fireEvent.click(buttonIncrement); // Para que o contador chegue a 2
  
  const buttonDecrement = screen.getByText(/Decrementar/i);
  fireEvent.click(buttonDecrement);
  const countElement = screen.getByText(/Contador: 1/i);
  expect(countElement).toBeInTheDocument();
});