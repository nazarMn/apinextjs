export default function handler(req, res) {
    if (req.method === 'POST') {
      const { name, message } = req.body
      res.status(200).json({ name, message })
    }
  }
