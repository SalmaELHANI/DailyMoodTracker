// MoodSelector.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MoodSelector from '../src/components/MoodSelector';
import '@testing-library/jest-dom';


describe('MoodSelector', () => {
  it('renders correctly', () => {
    const { getByText } = render(<MoodSelector />);
    expect(getByText('Sélectionnez votre humeur :')).toBeInTheDocument();
  });

  it('calls onSelect with correct mood when a mood button is clicked', () => {
    const onSelectMock = jest.fn();
    const { getByText } = render(<MoodSelector onSelect={onSelectMock} />);
    fireEvent.click(getByText('Heureux'));
    expect(onSelectMock).toHaveBeenCalledWith('Heureux');
  });
});
