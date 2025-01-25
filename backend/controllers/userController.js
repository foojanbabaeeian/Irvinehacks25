const { createUser, loginUser } = require('../services/userService');

const registerUser = async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json({ success: true, data: user });
    } catch (error) {
        console.error('Could not create user');
        res.status(500).json({ success: false, error: 'An error occurred' });
    }
};

const loginUser = async (req, res) => {
    try {
        const token = await loginUser(req.body);
        req.session.save(() => {
            req.session.user_id = user.id;
            req.session.logged_in = true;
            res.status(200).json({ success: true, token});
        });
    } catch (error) {
        console.error('Could not log in user');
        res.status(500).json({ success: false, error: 'An error occurred' });
    }
};

module.exports = {
    registerUser,
    loginUser,
};