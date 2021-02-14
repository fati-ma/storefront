import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const Status = props => {
    return (
        <section>
            {props.filetredProduct.map((product, idx) => {
                console.log('<-----------in Component------------>', props.myProducts.products)
                return (
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" key={idx}>{product.name}</Typography>
                    </CardContent>
                )
            })}

        </section>
    )
}

// I do not have any action here so no need to do mapDispatchToProps
// I will only use mapStateToProps
const mapStateToProps = state => ({
    myProducts: state.products.products,
    filetredProduct: state.products.filetredProduct
});

export default connect(mapStateToProps)(Status);