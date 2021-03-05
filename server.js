// create server
const express = require("express")
const app = express()

// body parser middleware
app.use(express.json())

// configure env variables
const dotenv = require("dotenv")
dotenv.config({ path: ".env" })

// cross origin
const cors = require("cors")
app.use(cors())

// mongo conection
const mongoose = require("mongoose");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("connected to db");
} catch (err) {
    console.log(err);
}

// configure session
const session = require("express-session")
const MongoStore = require('connect-mongo').default

app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    resave: false,
    saveUninitialized: false,
}))

// Configure passport middleware
const passport = require("passport");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

app.use(passport.initialize());
app.use(passport.session());

// Google Oauth strategy
const User = require("./User");

const GoogleStrategy = require("passport-google-oauth20").Strategy;
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: "/api/google/callback",
        },
        async (accessToken, refreshToken, profile, cb) => {
            const newUser = {
                name: profile.displayName,
                email: profile.emails[0].value,
            };
            try {
                const user = await User.findOne({ email: profile.emails[0].value });
                console.log("existing user");
                console.log(user);
                if (user) cb(null, user);
                else {
                    const user = await User.create(newUser);
                    console.log("creating user");
                    console.log(user);
                    cb(null, user);
                }
            } catch (error) {
                console.log(error);
            }
        }
    )
);

// Passport Local strategy
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require("bcrypt")

passport.use(new LocalStrategy({ usernameField: "email" },
    (username, password, done) => {
        User.findOne({ email: username }, async (err, user) => {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { status: 400, success: false, message: 'Incorrect username.' });
            }
            const valid = await bcrypt.compare(password, user.password)
            if (!valid) {
                return done(null, false, { status: 400, success: false, message: 'Incorrect password.' });
            }
            return done(null, user, { status: 200, success: true, message: 'Sign in successfull' });
        });
    }
));



const logger = require("morgan")
app.use(logger("dev"))

const router = require("./router")
const { env } = require("process")
app.use("/api", router)

// listen on port
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})