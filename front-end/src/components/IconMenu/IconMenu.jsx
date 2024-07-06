import BAG_ICON from '../../assets/bag.svg'
import HEART from '../../assets/bag.svg'

import { Link } from 'react-router-dom'

export function IconMenu() {
  return (
    <ul>
      <li>
        <Link to="/ulubione">
          <img src={HEART} />
        </Link>
      </li>
      <li>
        <Link to="/koszyk">
          <img src={BAG_ICON} />
        </Link>
      </li>
    </ul>
  )
}
