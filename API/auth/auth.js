const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const userDB = require('../models/user');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(
    'signup',
    new localStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },
        async (req, username, password, done) => {
            try {
                const fullName = req.body.fullName;
                const email = req.body.email;
                const user = await userDB.create({username, password, fullName, email });

                return done(null, user);
            } catch (e) {
                return done(e);
            }
        }
    )
);

passport.use(
    'login',
    new localStrategy(
        {
            usernameField: 'username',
            passwordField: 'password'
        },
        async (username, password, done) => {
            try {
                const user = await userDB.findOne({ username });

                if (!user) {
                    return done(null, false, { message: 'User not found' });
                }

                const validate = await user.isValidPassword(password);

                if (!validate) {
                    return done(null, false, { message: 'Wrong password' });
                }

                return done(null, user, { message: 'Signed in successfully' });
            } catch (e) {
                return done(e);
            }
        }
    )
);

passport.use(
    new JWTStrategy(
        {
            secretOrKey: 'TOP_SECRET',
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
        },
        async function (jwt_payload, next) {
            const user = await userDB.find({_id: jwt_payload.user._id});
            if (user) {
                next(null, user);
            } else {
                next(null, false);
            }
        }
    )
);

module.exports = passport;