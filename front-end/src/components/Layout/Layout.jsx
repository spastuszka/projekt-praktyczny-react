import { CurrencySelector } from '../CurrencySelector/CurrencuSelector'
import { Footer } from '../Footer/Footer'
import { Logo } from '../Logo/Logo'
import { MainMenu } from '../MainMenu/MainMenu'

export function Layout() {
  return (
    <>
      <MainMenu />
      <Logo />
      <CurrencySelector />
      <Footer />
    </>
  )
}
