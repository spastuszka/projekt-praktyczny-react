import styles from './FavouritesList.module.css'
import { CenteredContent } from '../CenteredContent/CenteredContent'
import { FavouritesProduct } from '../FavouritesProduct/FavouritesProduct'

export function FavouritesList({ favourites }) {
  return (
    <CenteredContent>
      <div className={styles.favouritesList}>
        <h2>Ulubione</h2>
        <div>
          {favourites.map(({ product }) => {
            return <FavouritesProduct key={product.id} product={product} />
          })}
        </div>
      </div>
    </CenteredContent>
  )
}
