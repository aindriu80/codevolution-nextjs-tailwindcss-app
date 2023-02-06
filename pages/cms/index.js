function CMS({ data }) {
  return <div className="content">{data}</div>
}
export default CMS

export async function getStaticProps(context) {
  console.log('Running getStaticProps', context.previewData)
  return {
    props: {
      data: context.preview
        ? 'List of draft articles'
        : 'List of published articles',
    },
  }
}
