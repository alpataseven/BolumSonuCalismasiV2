import { useState } from 'react'
import { products as productsObject } from './data/products'
import ImgNotSelected from './components/ImgNotSelected'
import ImgContainer from './components/imgContainer'

function App() {
  const [isActiveProduct, setIsActiveProduct] = useState(false)
  const [products, setProducts] = useState(productsObject)

  return (
    <>
      <main className="container">
        {
          isActiveProduct ? <></> : <ImgNotSelected />
        }
        <ImgContainer products={products} />
      </main>
    </>
  )
}

export default App
