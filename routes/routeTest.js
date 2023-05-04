const express = require('express');
const router = express.Router();
const UserTest = require('../models/userTest');
//const authenticateService = require('../middleware/test')

router.get(
    '/meetfood',
    /* authenticateService,  */ async (req, res) => {
        const user = new UserTest({
            userName: 'L',
            firstName: 'Y',
        });
        await user.save();
        // const foundUser = await User.findOne({ firstName: 'Y' });
        res.send('<h2> Hello from Express.js server! </h2>');
    },
);

module.exports = router;
