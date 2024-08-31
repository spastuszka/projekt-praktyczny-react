import { BACK_END_URL } from '../constants/api'

export function deleteFavouriteAction() {
  return fetch(`${BACK_END_URL}`)
}
