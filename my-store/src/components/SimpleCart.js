import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import * as actions from '../store/actions';


const ItemInCart = props => {

    return (
        <>
            <section>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CART&nbsp;&nbsp;&nbsp;{props.myCart.productsInCart.length}</span>

                <div>
                    <ul>
                        {props.myCart.productsInCart.map((item, idx) => {
                            return <li key={idx}>{item.name}<Button style={{ color: 'white' }} size="small" onClick={() => props.put(item)}>X</Button></li>
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

const mapDispatchToProps = (dispatch) => ({
    put: (obj) => dispatch(actions.updateInstockIncrement(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemInCart)