const jwt = require('jsonwebtoken');
const { createUser, loginUser: loginUserService } = require('../services/userService');

const registerUser = async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json({ success: true, data: user });
    } catch (error) {
        console.error('Could not create user', error);
        res.status(500).json({ success: false, error: 'An error occurred' });
    }
};

const loginUser = async (req, res) => {
    try {
        const token = await loginUserService(req.body);
        req.session.save(() => {
            req.session.user_id = user.id;
            req.session.logged_in = true;
            res.status(200).json({ success: true, token });
        });
    } catch (error) {
        console.error('Could not log in user', error);
        res.status(500).json({ success: false, error: 'An error occurred' });
    }
};

const logoutUser = (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).json({ success: false, error: 'No active session found' });
    }
};

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
};