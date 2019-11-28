const { OAuth2Client } = require('google-auth-library')
const client = OAuth2Client(process.env.CLIENT_ID)

module.exports = (req, res, next) => {
  let token = req.body.idToken
  client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID
  })
    .then(ticket => {
      const payload = ticket.getPayload()
      req.decoded = payload
      next()
    })
    .catch(next)
}
