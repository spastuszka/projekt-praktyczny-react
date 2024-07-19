import styles from './Breadcrumbs.module.css'

import { NavLink } from 'react-router-dom'
import ARROW_ICON from '../../assets/arrow.svg'

export function Breadcrumbs() {
  const breadcumbs = [
    {
      categoryName: 'Kobieta',
      path: 'kobieta',
    },
    {
      categoryName: 'Odzież',
      path: 'odziez',
    },
    {
      categoryName: 'Swetry',
      path: 'swetry',
    },
  ]

  return (
    <ul className={styles.breadcrumbs}>
      {breadcumbs.map((breadcumb) => {
        return (
          <li key={breadcumb.path}>
            <NavLink to={breadcumb.path}>
              {breadcumb.categoryName}
              <img src={ARROW_ICON} />
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}
