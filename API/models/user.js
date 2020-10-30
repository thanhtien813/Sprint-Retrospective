const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect(process.env.URI, {useUnifiedTopology: true, useNewUrlParser: true});

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    fullName: String,
    email: String,
}, {collection: 'user'});

userSchema.pre(
    'save',
    async function(next) {
        const user = this;
        const hash = await bcrypt.hash(this.password, 10);

        this.password = hash;
        next();
    }
);

userSchema.methods.isValidPassword = async function(password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    
    return compare;
}

module.exports = mongoose.model('user', userSchema);