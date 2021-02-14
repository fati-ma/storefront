import React from 'react';
import {connect} from 'react-redux';
import {active} from '../store/categories-reducer';
import { Typography } from '@material-ui/core';

const activeCategories = props => {
    return (
        <section>
            <ul>
                {props.activeOne.categories.map((category, idx)=> {
                    return (<Typography variant='h6' key={idx} onClick={()=> props.active(category.name)}>{category.display_name}</Typography>)
                })}
            </ul>
        
        </section>
    )
}

const mapStateToProps = state => ({
    activeOne : state.categories
});

const mapDispatchToProps = {active}

export default connect(mapStateToProps, mapDispatchToProps)(activeCategories)