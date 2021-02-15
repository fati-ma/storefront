import '../styles/header.scss'
import { Tab, AppBar, Tabs, Typography } from '@material-ui/core'

const Footer = () => {
    return (
      <footer id='footer'>
      <AppBar position="static" style={{ background: '#2E3B55' }}>
          <p>© 2021 FATIMA-ASAC</p>
      </AppBar>
      </footer>
    )
  }

  export default Footer 