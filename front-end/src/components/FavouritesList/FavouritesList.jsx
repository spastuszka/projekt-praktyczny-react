import { CenteredContent } from '../CenteredContent/CenteredContent'
import { FavouritesProduct } from '../FavouritesProduct/FavouritesProduct'

export function FavouritesList({ products }) {
  return (
    <CenteredContent>
      <h2>Ulubione</h2>
      <div>
        {products.map((product) => {
          return <FavouritesProduct key={product.id} product={product} />
        })}
      </div>
    </CenteredContent>
  )
}
