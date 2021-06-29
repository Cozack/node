// const fs = require('fs');
// const { errors,configuration } = require('../constants');
// const util = require('util');
//
// const readFile = util.promisify(fs.readFile);
//
// module.exports = {
//     ifUserExist: async (email,password) {
//     const users = await readFile(configuration.DB);
//     const { email, password } = req.body;
//     const foundUser = JSON.parse(users).find((user) => user.email === email && user.password === password);
//
//     if (!foundUser) {
//     res.json(errors.ERROR_REGISTER);
//     res.redirect('/error');
//     return;
// }
// res.redirect(`/users/${foundUser.id}`);
// }
// }
