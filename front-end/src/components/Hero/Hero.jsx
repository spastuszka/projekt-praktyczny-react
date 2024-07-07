import { CenteredContent } from '../CenteredContent/CenteredContent'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <div>
      <CenteredContent>
        <div>
          <h2>Letnie promocje do -70%!</h2>
          <p>Tylko najlepsze okazje!</p>
          <button>Sprawdź produkty</button>
        </div>
      </CenteredContent>
    </div>
  )
}
