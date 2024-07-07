import styles from './CartProductsList.module.css'

import { CartProduct } from '../CartProduct/CartProduct'
import { CenteredContent } from '../CenteredContent/CenteredContent'

export function CartProductsList({ products }) {
  return (
    <CenteredContent>
      <div className={styles.cartList}>
        <h2>Koszyk</h2>
        <div>
          {products.map((product) => {
            return <CartProduct key={product.id} product={product} />
          })}
        </div>
      </div>
    </CenteredContent>
  )
}
