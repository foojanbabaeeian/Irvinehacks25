const router = require('express').Router();
const { User } = require('../../models');

// Create a new user 
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json({ success: true, user: userData });
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({ success: false, error: 'Failed to create user' });
  }
});

// Login an existing user
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      return res
        .status(400)
        .json({ success: false, message: 'Incorrect email or password' });
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      return res
        .status(400)
        .json({ success: false, message: 'Incorrect email or password' });
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({
        success: true,
        user: userData,
        message: 'You are now logged in!',
      });
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({ success: false, error: 'Failed to log in' });
  }
});

// Logout the user
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).json({ success: false, error: 'No active session found' });
  }
});

module.exports = router;
