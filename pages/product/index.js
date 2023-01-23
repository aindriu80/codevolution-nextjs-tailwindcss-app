import Link from 'next/link'

function ProductList({ productId = 100 }) {
  return (
    <>
      <header className="container">
        <hgroup>
          <h1>Product Page</h1>
          <p>The individual products page</p>
          <Link href="/">Home</Link>
        </hgroup>
      </header>

      <div className="container">
        <h2>
          <Link href="/product/1"> Product 1</Link>
        </h2>
        <h2>
          <Link href="/product/2"> Product 2</Link>
        </h2>
        <h2>
          <Link href="/product/3" replace>
            {' '}
            Product 3
          </Link>
        </h2>
        <h2>
          <Link href={`/product/{${productId}`}> Product{productId} </Link>
        </h2>
      </div>
    </>
  )
}

export default ProductList
