import {
  BrowserRouter
} from "react-router-dom"
import ScrollToTop from "./elements/ScrollToTop"
import { AppRouter } from './routes'
import { TranslationProvider } from "./hooks/useTranslation"

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <AppRouter />
      </BrowserRouter>
    </>
  )
}

export default App
