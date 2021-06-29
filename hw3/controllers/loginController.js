module.exports = {
  login: (req, res) => {
    res.write(
      '<input name="email" type="text"  placeholder="Enter email">'
            + '<input name="password" type="password"  placeholder="Password">'
            + '<button type="submit" >Login</button>'
    );
  }
};
