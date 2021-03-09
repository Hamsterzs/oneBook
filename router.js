const express = require("express")
const router = express.Router()
const User = require("./User")
const bcrypt = require("bcrypt")
const passport = require("passport")

router.post("/sign-up", async (req, res) => {
    try {
        const { email, password, name } = req.body

        if (!email || !password || !name) return res.status(400).json({ success: false, message: "fill in all fields" })

        const existingUser = await User.findOne({ email })

        if (existingUser) return res.status(400).json({ success: false, message: "email is already registered" })

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = { email, password: hashedPassword, name }

        const createdUser = await User.create(user)

        res.status(400).json({ success: true, message: "user created", user: createdUser })
    } catch (err) {
        res.status(400).json({ message: "Couldn't create user" })
        return
    }
})

router.post("/sign-in", (req, res) => {

    passport.authenticate("local", (err, user, info) => {
        if (err) console.log(err);
        if (user) {
            req.logIn(user, err => {
                if (err) console.log(err);
            })
        }
        res.status(info.status).json({ success: info.success, message: info.message, user })
    })(req, res)
}
)

router.get("/sign-out", (req, res) => {
    req.logOut()
    res.status(200).json({ message: "signed out" })
})

router.get("/user", (req, res) => {
    console.log(req.user);
    res.status(200).json({ user: req.user })
})

// google oauth2.0
router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
        res.redirect("/")
    }
);

module.exports = router