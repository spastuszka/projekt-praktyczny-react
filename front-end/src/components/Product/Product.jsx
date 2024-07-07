import { Link } from 'react-router-dom'

export function Product({ product }) {
  return (
    <Link>
      <img src={product.photos[0]} alt="" />
      <h3>{product.productName}</h3>
      <p>{product.pricePLN}zł</p>
    </Link>
  )
}
