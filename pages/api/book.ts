import { collection, getDocs } from 'firebase/firestore/lite'
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../lib/firebase/firestore'
import { Book } from '../../types/book'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Book[]>
) {
  const col = collection(db, 'user-books')
  const snapshot = await getDocs(col)
  const list = snapshot.docs.map((doc) => doc.data() as Book)

  res.status(200).json(list)
}
