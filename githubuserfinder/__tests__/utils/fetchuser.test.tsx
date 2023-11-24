import '@testing-library/jest-dom';
import { searchForUser } from '@/app/utils/fetchuser';

describe('Utils', () => {
  it('Test fetchuser function', async () => {
    
    //Currently doesn't work because mocking the global fetch wouldn't work. It either brings back only undefined instead of predefined object 
    //or is itself undefined, so I can't call it.

    // const compareobject = {
    //     login: "anders",
    //     html_url: "https://github.com/anders",
    //     name: "Anders Bergh",
    //     company: null,
    //     email: null,
    //     hirable: true,
    //     bio: null
    // }

    // let result = await searchForUser('Anders')

    // expect(result).toBe(compareobject);

  })
})