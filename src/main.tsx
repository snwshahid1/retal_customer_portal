import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { StyleSheetManager } from 'styled-components'
import App from './App'
import './styles/style.css'
import isPropValid from '@emotion/is-prop-valid';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <App />
    </StyleSheetManager>
  </React.StrictMode>,
)
