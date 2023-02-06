export default function handler(req, res) {
  res.sePreviewData({ user: 'Aindriú' })
  res.end('Preview mode disabled')
}
