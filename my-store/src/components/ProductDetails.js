import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getDetailedObj } from "../rtk-store/productsSlicer"



import {
    Typography,
    Container,
    Card,
    CardContent,
    CardMedia,
    Button,
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        marginTop: 100,
        marginBottom: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        textAlign: "center",
        fontFamily: 'Courier New',
        fontWeight: "bolder",
        color: '#2E3B55'
    },
    card: {
        marginTop: 50,
        width: 600,
        padding: 20,
    },
    media: {
        height: 450,
    },
    content: {
        display: "flex",
        justifyContent: "space-between",
    },
    buttonStyle: {
        marginTop: 20,
        width: 600,
        backgroundColor: "#2E3B55",
        "&:hover": {
            background: "#c25744",
        },
        color: "#fff",
    },
});

const Details = props => {
    const classes = useStyles();
    const { id } = props.match.params;

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getDetailedObj(id));
        };
        fetchData();
    }, [dispatch]);

    return (

        <>

            <Container className={classes.root}>
                <Typography variant="h4" component="h2" className={classes.title}>
                    {props.product.name}
                </Typography>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="https://st2.depositphotos.com/3665639/7442/v/600/depositphotos_74424541-stock-illustration-pictograph-of-shopping-cart.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h5" component="h4">
                            inStock: {props.product.inStock}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h4">
                            Price: ${props.product.price}
                        </Typography>
                    </CardContent>
                </Card>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.buttonStyle}>
                    Buy
                     </Button>
            </Container>
        </>

    );
}
const mapStateToProps = (state) => ({
    product: state.products.productDetail,
});

export default connect(mapStateToProps)(Details);