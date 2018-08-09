const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

module.exports = (app) => {


  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    }, console.log("hello"))
  )

  app.get('/auth/google/callback',
   passport.authenticate('google'),
   (req, res) => {
     console.log("callback is working")
     // res.redirect('/')
     res.redirect('/home')
   }
 )

  app.get('/api/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })

  app.get('/api/current_user', (req, res) => {
    console.log("current user",req.user)
    res.send(req.user)
    res.redirect('/home')
  })
}
