import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as actions from '../store/actions';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


const Status = props => {
    const fetchData = (e) => {
        props.get();
    }
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    useEffect(fetchData, [])

    return (
        <>
            <section>
                {props.filetredProduct.map((product, idx) => {
                    return <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <Typography className={classes.title} key={idx} color="textSecondary" gutterBottom>
                                {product.name}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => props.update(product)}>Add To Cart</Button>
                            <Button size="small">View details</Button>
                        </CardActions>
                    </Card>
                })}
            </section>
        </>
    )
}


const mapStateToProps = state => ({
    myProducts: state.products.products,
    filetredProduct: state.products.filetredProduct,
    myProductsInCart: state.products.productsInCart

});
const mapDispatchToProps = (dispatch, getState) => ({
    get: () => dispatch(actions.getRemoteData()),
    update: (obj) => dispatch(actions.updateInstockdecrement(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(Status);