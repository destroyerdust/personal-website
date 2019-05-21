const express = require("express");
const next = require("next");

var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

require("dotenv").config();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_KEY,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(passport.initialize());
    server.use(passport.session());

    server.get(
      "/auth/google",
      passport.authenticate("google", {
        scope: ["https://www.googleapis.com/auth/plus.login"]
      })
    );

    server.get(
      "/auth/google/callback",
      passport.authenticate("google", { failureRedirect: "/login" }),
      function(req, res) {
        res.redirect("/");
      }
    );

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(process.env.PORT, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:" + process.env.PORT);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
