import { PATH_TO_ENDPOINT_MAPPING, BACK_END_URL } from '../constants/api'
import { CATEGORIES } from '../constants/categories'
import { redirect } from 'react-router-dom'

export function productListLoader({ params: { gender, category } }) {
  //Sprawdzenie, czy ścieżka zdefiniowanej kategorii jest równa wartości parametru category przekazanej przez loader przez router
  const foundCategory = CATEGORIES.find((c) => {
    c.path === category
  })
  const foundGender = PATH_TO_ENDPOINT_MAPPING[gender]
  if (foundGender && foundCategory) {
    return fetch(
      `${BACK_END_URL}/products/?gender=${foundGender}&category=${category}`
    )
  } else {
    return redirect('/kobieta')
  }
}
