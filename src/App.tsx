import {
  BrowserRouter
} from "react-router-dom"
import ScrollToTop from "./elements/ScrollToTop"
import { AppRouter } from './routes'
import { TranslationProvider } from "./Hooks/useTranslation";
import { ThemeProviderDirection } from "./Hooks/useDirection";

function App() {
  return (
    <>
      <BrowserRouter>
        <TranslationProvider>
          <ThemeProviderDirection>
            <ScrollToTop />
            <AppRouter />
          </ThemeProviderDirection>
        </TranslationProvider>
      </BrowserRouter>
    </>
  )
}

export default App
