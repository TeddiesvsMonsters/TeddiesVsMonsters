import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
const options = {
  // https://next-auth.js.org/configuration/providers
  providers: [
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.NEXTAUTH_SECRET,
      domain: process.env.NEXTAUTH_URL,
      authorizationUrl: `https://${process.env.NEXTAUTH_URL}/authorize?response_type=code&prompt=consent`
    })
  ],
  // Enable debug messages in the console if you are having problems
  debug: true,
}

export default (req, res) => NextAuth(req, res, options)