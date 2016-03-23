module.exports = {
  auth: function (req, res) {
    var user = req.body;

    User.findOne({email: 'test@callcenter.com'})
      .exec(function (err, response) {
        if (response.email == user.email && response.password == user.password) {
          sails.log.info("AUTH CORRECTE");
          res.json(200, {msg: "Authentication OK"});
        } else {
          res.json(401, {msg: "Invalid email:password"});
        }
        return res;
      });
  }
}
