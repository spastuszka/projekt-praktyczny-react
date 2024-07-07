import styles from './Hero.module.css'
import { CenteredContent } from '../CenteredContent/CenteredContent'

export function Hero({ heroImage }) {
  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <CenteredContent>
        <div className={styles.contentWrapper}>
          <h2>Letnie promocje do -70%!</h2>
          <p>Tylko najlepsze okazje!</p>
          <button>Sprawdź produkty</button>
        </div>
      </CenteredContent>
    </div>
  )
}
