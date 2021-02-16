import React from 'react';
import { Tab, AppBar, Tabs, Typography } from '@material-ui/core'
import '../styles/header.scss'
import ItemInCart from './SimpleCart'

class Header extends React.Component {
    render() {
        return (
            <header>

                <AppBar position="static" style={{ background: '#2E3B55' }}>
                    <Tabs aria-label="simple tabs example" indicatorColor="transparent" color='black'
                        textColor="transparent">
                        <h1>OUR STORE</h1>
                        <ItemInCart />
                    </Tabs>
                </AppBar>



            </header>
        )
    }
}


export default Header;