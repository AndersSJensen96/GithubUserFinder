// __tests__/index.test.js
import { render,screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import React from 'react';
import Home from '../src/app/page';
import { searchForUser } from '../src/app/utils/fetchuser';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Github User Finder/i,
    })

    expect(heading).toBeInTheDocument()
  })
});



// const stubUser = {    
//   id: 1,
//   login: "Test Login",
//   html_url: "Url",
//   name: "John Doe",
//   company: "X Corporation",
//   email: "JohnDoe@mail.com",
//   bio: "John doe Lorem ipsum something something",
//   hirable: "Sure" };


// jest.mock('../src/app/utils/fetchuser', () => ({
// __esmodule: true,
// searchForUser: jest.fn(() => stubUser)
// }))

// describe('Home', () => {

//   jest.mocked(searchForUser).mockReturnValueOnce(stubUser);


// it('renders a User profile', async () => {
//   render(<Home />)

//   const input = screen.getByRole('textbox');

//   await userEvent.type(input, 't');

//   const heading = screen.getByRole('heading', {
//     name: /Test Login/i,
//   })

//   expect(heading).toBeInTheDocument()
// })
// });
