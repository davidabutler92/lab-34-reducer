import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  
  it('renders some stuff', async () => {
    render(<App />);

    const current = screen.getByTestId('input');

    fireEvent.change(current, {
      target: {
        value: '#0000FF',
      }
    });

    const display = await screen.findByTestId('display');
    
    expect(display).toHaveStyle({
      backgroundColor: '#0000FF',
    });
  });

  it('should undo to previous color', async () => {
    render(<App />);

    const current = screen.getByTestId('input');
    const undo = screen.getByTestId('undo');

    fireEvent.change(current, {
      target: {
        value: '#00FF00',
      }
    });

    fireEvent.click(undo)

    const display = await screen.findByTestId('display');
    
    expect(display).toHaveStyle({
      backgroundColor: '#FF0000',
    });
  });

  it('should redo to previous color', async () => {
    render(<App />);

    const current = screen.getByTestId('input');
    const redo = screen.getByTestId('redo');
    const undo = screen.getByTestId('undo');

    fireEvent.change(current, {
      target: {
        value: '#00FF00',
      }
    });

    fireEvent.click(undo)
    fireEvent.click(redo);

    const display = await screen.findByTestId('display');
    
    expect(display).toHaveStyle({
      backgroundColor: '#00FF00',
    });
  });
});
