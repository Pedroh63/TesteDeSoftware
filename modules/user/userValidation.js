const User = require('./userModel');

exports.validateRegister = async ({username, email, password, confirmPassword}) => {
    if(password !== confirmPassword) {
        return 'As senhas não coincidem.';
    }
    const emailExist = await User.findOne({where: { email } })
    if(emailExist) {
        return 'Este email já foi cadastrado.';
    }
    const usernameExist = await User.findOne({ where: { username } })
    if(usernameExist) {
        return 'Este nome de usuário já foi cadastrado.';
    }
    return null;
}