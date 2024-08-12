import styles from './Details.module.css'
import CART_ICON from '../../assets/car.svg'
import RETURN_ICON from '../../assets/return.svg'
import { FullWidthButton } from '../FullWidthButton/FullWidthButton'

export function Details({ product }) {
  return (
    <div>
      <h2>{product.brand}</h2>
      <p>{product.productName}</p>
      <p>{product.pricePLN}</p>
      <FullWidthButton>Dodaj do koszyka</FullWidthButton>
    </div>
  )
}
