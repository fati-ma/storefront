import React from 'react';
import { connect } from 'react-redux';
import { Tab, AppBar, Tabs, Typography } from '@material-ui/core'



const ItemInCart = props => {
    return (
        <>
            <section>
                    <div>   <Tab label="CART" CART />: {props.myCart.productsInCart.length}</div>
                  
                    <div>
                    <ul>
                        {props.myCart.productsInCart.map((item, idx) => {
                            console.log('----item in simple cart-----', item)
                            return <li key={idx} >{item.name} </li>
                        })}
                    </ul>

                    </div>
            </section>
        </>


    )
}
const mapStateToProps = state => ({
    myCart: state.cart
});



export default connect(mapStateToProps)(ItemInCart)