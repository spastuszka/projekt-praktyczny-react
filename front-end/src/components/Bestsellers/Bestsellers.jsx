import { CenteredContent } from '../CenteredContent/CenteredContent'
import { Product } from '../Product/Product'

export function Bestsellers({ products }) {
  return (
    <CenteredContent>
      <h2>Sprawdź nasze bestellery</h2>
      <div>
        {products.map((product) => {
          return <Product key={product.id} product={product} />
        })}
      </div>
    </CenteredContent>
  )
}
