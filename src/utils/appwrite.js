// src/appwrite.js
import { Client, Account, OAuthProvider } from 'appwrite'

const client = new Client()
client
  .setEndpoint('https://cloud.appwrite.io/v1')// The Appwrite API endpoint
  .setProject(import.meta.env.VITE_APPW_PROJECT_ID)// Your Appwrite project IDexport const account = new Account(client)

const account = new Account(client)

export { OAuthProvider, account }

