import { Dashboard } from "./pages/Dashboard"
import GlobalStyle from './styles/Global'
import {  UseTotalContext } from "./TotalContext"

export function App() {
  
  
  return (
    <div className="App">
      <UseTotalContext>
        <GlobalStyle />
        <Dashboard />
      </UseTotalContext>
    </div>
  )
}

