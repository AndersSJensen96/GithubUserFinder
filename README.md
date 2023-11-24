# GithubUserFinder
React project for Studies&amp;Me

## Commands to run
Use commands to run development, production or to run jest tests.
```bash
npm run dev
# or
npm build
npm start
#or
npm test
```

Open [http://localhost:3000] to see the running project.
(remember to run npm install to get required packages)


# Choices

## Why NextJS?
First off, I made the choice to use nextjs, since i'm more familiar with this. Normally I would've used create-react-app, but it has been outdated since this year.

## The Design
### Input and api call
My design is simple. I threw together an input field and made it so you can type a username into it and get results from an api call shown in a box under. I decided against a button, to avoid to much clicking around and added a timer with a 1 second delay, so the user can finish writing before making the call.

### Profile box
The box holding the profile information is under the inputfield and is made to hold as much information I found relevant, with the addition of a link leading directly to the profile on github for more information.
If no user is found, the result in that box would be a message and an image indicating that nothing was found with the query.

## Tests
Haven't worked with jest before, but got something up and running that checks whether different rendering.
After that I wanted to test my searchForUser function, but because of problems regarding mocking the global fetch, I haven't been able to get it to work.
Thinking, maybe changing to axios might work or using msw (mock service worker).
