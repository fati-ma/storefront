import '../styles/header.scss'
import { Tab, AppBar, Tabs, Typography } from '@material-ui/core'

const Footer = () => {
  return (
    <footer id='footer' >
      <AppBar position="static" style={{ background: '#2E3B55', marginTop: '20% ' }}>
        <p>© 2021 Fatima-ASAC</p>
      </AppBar>
    </footer>
  )
}

export default Footer 