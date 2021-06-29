// const { registerService } = require('../services');
//
// module.exports = {
//   newUser: (req, res) => {
//     const { body } = req;
//     registerService.newUser(body);
//
//     res.json('New user has been registered');
//   },
// };

module.exports = {
  registerPage: (req, res) => {
    res.write(
      '<input name="email" type="text"  placeholder="Enter email">'
            + '<input name="password" type="password"  placeholder="Password">'
            + '<button type="submit" >Login</button>'
    );
  }
};
