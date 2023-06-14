export default (req, res) => {
  const email = req.body.email
  res.status(200).json({ text: `服务器接收到您的邮箱：${email}` })
}