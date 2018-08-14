const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey)
const requireLogin = require('../middlewares/requireLogin')

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req,res) => {
    const charge = stripe.charges.create({
      amount:1000000*100,
      currency: 'usd',
      description: 'FX trade credits',
      source: req.body.id
    })
    req.user.credits += 1000000*100
    const user = await req.user.save()
    res.send(user)
  })
}
