import styles from './MainMenu.module.css'
import { NavLink } from 'react-router-dom'

export function MainMenu() {
  const genders = [
    {
      categoryName: 'Kobieta',
      path: 'kobieta',
    },
    {
      categoryName: 'Mężczyzna',
      path: 'mezczyzna',
    },
    {
      categoryName: 'Dziecko',
      path: 'dziecko',
    },
  ]
  return (
    <ul className={styles.mainMenu}>
      {genders.map((category) => {
        return (
          <li key={category.path}>
            <NavLink to={category.path}>{category.categoryName}</NavLink>
          </li>
        )
      })}
    </ul>
  )
}
