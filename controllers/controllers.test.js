const { index, main } = require('./controllers');
const mockReq = () => {
  return {
    session: {},
  };
};
const mockRes = () => {
  const res = {};
  res.render = jest.fn();
  return res;
};
describe('Controller', () => {
describe('index function', () => {
  test('should render the index view with correct parameters', () => {
    const req = mockReq();
    const res = mockRes();

    // Set session login value to true for testing purposes
    req.session.login = true;

    // Call the index function with the mocked request and response objects
    index(req, res);

    // Assert that the index view was rendered with the correct title, message, and login values
    expect(res.render).toHaveBeenCalledWith('index', {
      title: 'Welcome',
      message: 'Demo Node Site.',
      login: true,
    });
  });
});
describe('main function', () => {
    test('should render the index view with correct parameters', () => {
      const req = mockReq();
      const res = mockRes();
  
      // Set session login value to true for testing purposes
      req.session.login = true;
  
      // Call the index function with the mocked request and response objects
      main(req, res);
  
      // Assert that the index view was rendered with the correct title, message, and login values
      expect(res.render).toHaveBeenCalledWith('main', {
        title: "EJS Example from Parts",
        message: "Hello Template built in parts",
        showMsg: true,
        headingOne: "Page made from parts",
      });
    });
  });

});
