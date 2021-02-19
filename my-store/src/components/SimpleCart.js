import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { connect } from "react-redux";
import { updateInstockIncrement } from '../rtk-store/cartSlicer'

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        maxWidth: 200,
        backgroundColor: "#eee",
        zIndex: 1000,
        margin: theme.spacing(1),
        position: "fixed",
        top: theme.spacing(9),
        right: theme.spacing(6),
    },
    btn: {
        color: 'white',
        fontWeight: "bolder",
        marginLeft: '80%'
    }
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const ItemInCart = props => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const classes = useStyles();
    return (
        <>

            <Button className={classes.btn} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                CART&nbsp;&nbsp;&nbsp;{props.myCart.productsInCart.length}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {props.myCart.productsInCart.map((item) => (
                    <ListItemLink href="#simple-list">
                        <MenuItem ><Link to='/checkout'>{item.name}</Link></MenuItem>
                        <DeleteIcon onClick={() => props.put(item)} />

                    </ListItemLink>
                ))}
            </Menu>

        </>
    )
}
const mapStateToProps = state => ({
    myCart: state.cart
});

const mapDispatchToProps = (dispatch) => ({
    put: (obj) => dispatch(updateInstockIncrement(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemInCart)