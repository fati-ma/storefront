import React from 'react';
import { connect } from 'react-redux';
import { active } from '../store/categories-reducer.js';
import { Link, Typography } from '@material-ui/core'

const activeCategories = props => {
 
    return (
        <>
            <div style={{ fontSize: '24px' }}>
                Browse Our Categories
        </div>
            <br />
            <section>
                <Typography>

                    {props.activeOne.categories.map((category, idx) => {

                        return <Link key={idx} onClick={() => props.active(category.name)} href="#">{category.display_name.toUpperCase()} | </Link>

                    })}
                  


                </Typography>
            </section>


        </>
    )
}

const mapStateToProps = state => ({
    activeOne: state.categories
});

const mapDispatchToProps = { active }

export default connect(mapStateToProps, mapDispatchToProps)(activeCategories)