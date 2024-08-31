import styles from './Product.module.css'
import { Link, useFetcher } from 'react-router-dom'
import { useContext } from 'react'
import { CurrencyContext } from '../../contexts/CurrencyContext'
import { CURRENCIES, CURRENCY_SIGN } from '../../constants/currencies'

const ENDPOINT_TO_PATH_MAPPING = {
  men: 'mezczyzna',
  women: 'kobieta',
  children: 'dziecko',
}

export function Product({ product }) {
  const { Form } = useFetcher()
  const [currency] = useContext(CurrencyContext)
  return (
    <Link
      to={`/${ENDPOINT_TO_PATH_MAPPING[product.gender]}/${product.category}/${
        product.subcategory
      }/${product.id}`}
      className={styles.product}
    >
      <img src={product.photos[0]} alt="" />
      <h3>{product.productName}</h3>
      <p>
        {currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD}{' '}
        {CURRENCY_SIGN[currency]}
      </p>
      <Form
        onClick={(e) => {
          e.stopPropagation()
        }}
        method="POST"
        action={`/add-to-favourites/${product.id}`}
      >
        <button>
          <div className={styles.heart}></div>
        </button>
      </Form>
    </Link>
  )
}
