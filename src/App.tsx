import {
  BrowserRouter
} from "react-router-dom"
import ScrollToTop from "./elements/ScrollToTop"
import { AppRouter } from './routes'
import { TranslationProvider } from "./Hooks/useTranslation";

function App() {

  return (
    <>
      <BrowserRouter>
        <TranslationProvider>
          <ScrollToTop />
          <AppRouter />
        </TranslationProvider>
      </BrowserRouter>
    </>
  )
}

export default App
