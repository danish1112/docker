const User = require("../models/userModel");
const bcrypt = require("bcryptjs")

exports.signUp = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const hashPassword = await bcrypt.hash(password, 12);

        const user = await User.create({ username, password: hashPassword })

        res.status(201).json({
            status: "success",
            data: {
                user
            }
        })

    } catch (error) {
        res.status(400).json({
            status: "fail"
        })
    }
}

exports.login = async (req, res, next) => {
    try {

        const { username, password } = req.body;

        const user = await User.findOne({ username: username });

        if (!user) {
            res.status(400).json({
                status: "user not found"
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (isPasswordCorrect) {
            res.status(200).json({
                status: "success",
                data: {
                    user
                }
            })
        } else {
            res.status(400).json({
                status: "incorrect user or password"
            })
        }

    } catch (error) {
        res.status(400).json({
            status: "fail"
        })
    }
}