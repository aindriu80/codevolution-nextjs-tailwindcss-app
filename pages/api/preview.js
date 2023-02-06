export default function handler(req, res) {
  res.setPreviewData({ user: 'Aindriú' })
  //   res.end('Preview mode enabled')
  res.redirect(req.query.redirect)
}
