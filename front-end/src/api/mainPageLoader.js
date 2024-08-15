import { redirect } from 'react-router-dom'

export function mainPageLoader({ params }) {
  const PATH_TO_ENDPOINT_MAPPING = {
    kobieta: 'women',
    mezczyzna: 'men',
    dziecko: 'children',
  }

  const backEndPath = PATH_TO_ENDPOINT_MAPPING[params.gender]
  if (backEndPath) {
    return fetch(`http://localhost:3000/${backEndPath}`)
  } else {
    return redirect('/kobieta')
  }
}
