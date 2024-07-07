import styles from './CartProduct.module.css'
import REMOVE_ICON from '../../assets/remove.svg'

export function CartProduct({ product }) {
  return (
    <div className={styles.cartProduct}>
      <img src={product.photos[0]} />
      <div className={styles.cartProductInfo}>
        <div className={styles.topRow}>
          <h3>
            {product.brand}
            {''}
            {product.productName}
          </h3>
          <p>{product.pricePLN}</p>
        </div>
        <p className={styles.priceRow}>
          <span>Cena:</span>
          {product.pricePLN}
        </p>
        <div className={styles.buttonRow}>
          <button>
            <img src={REMOVE_ICON} />
            Usuń
          </button>
        </div>
      </div>
    </div>
  )
}
