import React from 'react'
import Popular from './components/Popular'
import Battle from './components/Battle'
import { ThemeProvider } from './contexts/theme'
import Navbar from './components/Navbar'

export default class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: 'light',
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === 'light' ? 'dark' : 'light'
        }))
      }
    }
  }

  render () {
    return (
      <ThemeProvider value={this.state}>
        <div className={this.state.theme}>
          <div className='container'>
            <Navbar />
            <Popular />
          </div>
        </div>
      </ThemeProvider>
    )
  }
}
