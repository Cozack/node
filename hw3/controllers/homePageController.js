module.exports = {
  homePage: (req, res) => {
    res.write(
      '<div><a href="/login">LOGIN</a></div>'
            + '<div><a href="/register">REGISTER</a></div>'
    );
  }
};
