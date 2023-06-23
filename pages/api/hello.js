// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json({ name: 'John Doe' })
  } else {
    // Handle any other HTTP method
  }
  
}
