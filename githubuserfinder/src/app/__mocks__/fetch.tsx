const mockResponse = {
    data: {
        login: "anders",
        html_url: "https://github.com/anders",
        name: "Anders Bergh",
        company: null,
        email: null,
        hirable: true,
        bio: null
    }
}

// global.fetch = jest.fn(() => Promise.resolve({
//     json: () => Promise.resolve(mockResponse)
// }));

// export default {
//     // fetch: jest.fn().mockResolvedValue(mockResponse)
// }