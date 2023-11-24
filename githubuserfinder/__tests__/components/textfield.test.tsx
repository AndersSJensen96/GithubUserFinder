import { render,screen} from '@testing-library/react';
import React from 'react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';
import TextField from '../../src/app/components/textfield';

const mockSetUser = jest.fn();

describe('TextField', () => {
    it('Check if input Rendered', () => {
        render(<TextField query='Test Query Value' event={mockSetUser}>Placeholder</TextField>)

        const input = screen.getByPlaceholderText('Placeholder');

        expect(input).toBeInTheDocument()
    })  
    it('Check if placeholder is correct', () => {
        render(<TextField query='Test Query Value' event={mockSetUser}>Placeholder</TextField>)

        const input = screen.getByPlaceholderText('Placeholder');

        expect(input).toHaveProperty('placeholder', 'Placeholder')
    })  
    it('Check if value is set', () => {
        render(<TextField query='Test Query Value' event={mockSetUser}>Placeholder</TextField>)

        const input = screen.getByPlaceholderText('Placeholder');

        expect(input).toHaveProperty('value', 'Test Query Value')
    })  
    it('Check if event callback works', async () => {
        render(<TextField query='Test Query Value' event={mockSetUser}>Placeholder</TextField>)

        const input = screen.getByPlaceholderText('Placeholder');
    
        await userEvent.type(input, 'After Test');

        expect(mockSetUser).toHaveBeenCalled();
    })
})
