import { getSession } from 'next-auth/client'

const handler = async (req, res) => {
  const session = await getSession({ req: req })
  if (!session) {
    res.status(401).json({ error: 'Unauthorized user' })
  } else {
    res.status(200).json({ message: 'Success', session })
  }
}
export default handler
