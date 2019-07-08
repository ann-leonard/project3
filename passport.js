const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const { JWT_SECRET } = require('./config');
const User = require('./models/user');

const tk = ExtractJwt.fromAuthHeaderWithScheme('jwt')
// JSON WEB TOKENS STRATEGY
const opts = {}
opts.jwtFromRequest = tk
opts.secretOrKey = JWT_SECRET;

console.log(opts)

//JSON web tokens strategy 
passport.use(new JwtStrategy(opts,
    async (req, payload, done) => {
        //console.log('here')
        try {
            // Find the user specified in token
            const user = await User.findById(payload.sub);

            // If user doesn't exists, handle it
            if (!user) {
                return done(null, false);
            }

            // Otherwise, return the user
            req.user = user;
            done(null, user);
        } catch (error) {
            done(error, false);
        }
    }));

//Local Strategy 
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    //find the user with given email
    try {
        const user = await User.findOne({ email })
        //if none exists, handle it
        if (!user) { return done(null, false) }
        //check if password is correct
        console.log(user)
        const validPassword = user.isValidPassword(password)
        //if not, handle it
        if (!validPassword) {
            return done(null, false)
        }
        return done(null, user)
    }catch(err){
        done(err, false)
    }
}))