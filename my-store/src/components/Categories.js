import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { active } from '../store/categories-reducer.js';
import { Link, Typography } from '@material-ui/core'
import * as actions from '../store/actions';

const ActiveCategories = props => {
    const fetchData = (e) => {
        props.getcat();
    }

    useEffect(fetchData, [])
    return (
        <>
            <div style={{ fontSize: '24px' }}>
                Browse Our Categories
        </div>
            <br />
            <section>
                <Typography>
                    {props.activeOne.categories.map((category, idx) => {
                        return <Link style={{ borderLeft: "solid #2E3B55 4px", color: "#2E3B55", padding: "2px", magginRight: "25px" }} key={idx} onClick={() => props.active(category.name)} href="#">{category.name.toUpperCase()} </Link>
                    })}
                </Typography>
            </section>


        </>
    )
}

const mapStateToProps = state => ({
    activeOne: state.categories
});
const mapDispatchToProps = (dispatch, getState, string) => ({
    getcat: () => dispatch(actions.getRemoteCategories()),
    active: (string) => dispatch(active(string))
})
export default connect(mapStateToProps, mapDispatchToProps)(ActiveCategories)