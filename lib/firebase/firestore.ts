import { getFirestore } from 'firebase/firestore/lite'
import { app } from './app'

const db = getFirestore(app)
export { db }
