import {
  BrowserRouter
} from "react-router-dom"
import { DashboardRouter } from './routes'

function App() {

  return (
    <>
      <BrowserRouter>
        <DashboardRouter />
      </BrowserRouter>
    </>
  )
}

export default App
