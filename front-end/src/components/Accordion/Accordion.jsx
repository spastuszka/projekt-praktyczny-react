import styles from './Accordion.module.css'
import ARROW_ICON from '../../assets/arrow.svg'

export function Accordion({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.title}>
            <div className={styles.item}>
              <p>{item.title}</p>
              <img src={ARROW_ICON} />
            </div>
            <p>{item.content}</p>
          </li>
        )
      })}
    </ul>
  )
}
