
import { NextAuthOptions, User } from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from "next-auth/providers/google"
import { signIn } from '../services/auth';


interface CustomUser {
  jwt: string;
  id: number;
  username: string;
  email: string;
  phone?: string | null;
  address?: string | null;
  address_2?: string | null;
  name?: string | null;
  lastname?: string | null;
}

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/login'
    },
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
          name: 'Sign in with Email',
          credentials: {
            email: { label: 'Email', type: 'text' },
            password: { label: 'Password', type: 'password' },
          },
          async authorize(credentials, req) {
            if (credentials == null) return null;
              try {
                const { user, jwt } = await signIn({
                  email: credentials.email,
                  password: credentials.password,
                });
                return { ...user, jwt };
              } catch (error) {
                // Sign In Fail
                return null;
              }
          },
        }),
      ],
      callbacks: {
        session: async ({ session, token }) => {
      /*     session.id = token.id;
          session.jwt = token.jwt; */
          session.user = token.user  as CustomUser;
          return Promise.resolve(session);
        },
        jwt: async ({ token, user }) => {
          const isSignIn = user ? true : false;
          if (isSignIn) {
            // First, convert to unknown type
            const unknownUser = user as unknown;
            // Next, convert to CustomUser
            const customUser = unknownUser as CustomUser;
      
            token.user = {
              id: customUser.id,
              username: customUser.username,
              email: customUser.email,
              phone: customUser.phone,
              address: customUser.address,
              address_2: customUser.address_2,
              name: customUser.name,
              lastname: customUser.lastname,
            };
            token.jwt = customUser.jwt;
          }
          return Promise.resolve(token);
        },
      }
}