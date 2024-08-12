import styles from './Details.module.css'
import CAR_ICON from '../../assets/car.svg'
import RETURN_ICON from '../../assets/return.svg'
import { FullWidthButton } from '../FullWidthButton/FullWidthButton'

export function Details({ product }) {
  return (
    <div>
      <h2>{product.brand}</h2>
      <p>{product.productName}</p>
      <p>{product.pricePLN}</p>
      <FullWidthButton isBlack={true}>Dodaj do koszyka</FullWidthButton>
      <ul>
        <li>
          <img src={CAR_ICON} />
          Dostawa do 24h
        </li>
        <li>
          <img src={RETURN_ICON} />
          Zwrot do 100 dni!
        </li>
      </ul>
    </div>
  )
}
