import styles from './CurrencySelector.module.css'
import { CURRENCIES } from '../../constants/currencies'
import { useState } from 'react'

export function CurrencySelector() {
  const [currency, setCurrency] = useState(CURRENCIES.PLN)
  return (
    <select
      onChange={(e) => {
        setCurrency(e.currentTarget.value)
      }}
      className={styles.currencySelector}
    >
      <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
      <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
    </select>
  )
}
