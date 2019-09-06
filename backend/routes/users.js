const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  console.log('/')
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  // create new user
  const newUser = new User({ username });

  // save user to db
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;