import styles from './Details.module.css'
import CART_ICON from '../../assets/car.svg'
import RETURN_ICON from '../../assets/return.svg'

export function Details({ product }) {
  return (
    <div>
      <h2>{product.brand}</h2>
    </div>
  )
}
