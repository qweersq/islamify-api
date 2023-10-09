const User = require('../Model/Users');
const { SuccessResponse, ErrorResponse } = require('../Utils/response');

const RegisterUser = async (req, res) => {
    const { body } = req;
    try {
        const user = await User.create(body);
        res.json(SuccessResponse(user));
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            res.status(400).json(ErrorResponse('Email already exists'));
        } else {
            res.status(500).json(ErrorResponse('Internal Server Error'));
        }
    }
}

const LoginUser = async (req, res) => {
    const { body } = req;
    const user = await User.findOne({
        where: {
            email: body.email,
            password: body.password
        },
        attributes: { exclude: ['password'] }
    });
    if (user) {
        res.json(SuccessResponse(user));
    } else {
        res.json(ErrorResponse('User not found'));
    }
}

const GetUserById = async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id, {
        attributes: { exclude: ['password'] } // Excluding the 'password' column
    });
    if (user) {
        res.json(SuccessResponse(user));
    } else {
        res.json(ErrorResponse('User not found'));
    }
}

const UpdateUserById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const user = await User.findByPk(id);
    if (user) {
        const updatedUser = await user.update(body);
        res.json(SuccessResponse(updatedUser));
    } else {
        res.json(ErrorResponse('User not found'));
    }
}

module.exports = {
    GetUserById,
    RegisterUser,
    LoginUser,
    UpdateUserById
}
