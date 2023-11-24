import { render,screen, fireEvent, act } from '@testing-library/react';
import React from 'react';
import Home from '../src/app/page';
// import { userEvent} from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByTestId('main-heading');

    const headerText = "Github User Finder"

    expect(heading).toHaveTextContent(headerText);
  })

  // it('Renders a User profile', async () => {
  //     const {rerender} = render(<Home />)
    
  //     const input = screen.getByRole('textbox');
  //     act( async () => {
  //       await fireEvent.change(input, {target: {value: 'Anders'}});
  //     });
      

  //     rerender(<Home />);
      
  //     const profile = screen.getByTestId('profile-heading')

  //     expect(profile).toHaveTextContent('Anders information')
  //   })
  });