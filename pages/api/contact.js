export default function handler(req, res) {
    if (req.method === 'POST') {
      const { name, message } = req.body
      if (message.length < 10) {
        return res.status(422).json({ message: 'Message must be at least 10 characters' })
      }else if (message.length > 20) {
        return res.status(422).json({ message: 'Message must be less than 20 characters' })
      }
      res.status(201).json({ name, message })
    }
  }
