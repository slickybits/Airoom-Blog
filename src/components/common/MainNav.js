import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

/**
* Main Navigation component
*
* The Main Navigation component contains the main site navigation items
*
*/
const MainNavigation = ({ data }) => (
    <>
        {data.map((navItem, i) => {
            if (navItem.url.match(/^\s?http(s?)/gi)) {
                return <a className="site-nav-item" href={navItem.url} key={i} target="_blank" rel="noopener noreferrer">{navItem.label}</a>
            } else {
                return <Link className="site-nav-item" to={navItem.url} key={i}>{navItem.label}</Link>
            }
        })}
    </>
)

MainNavigation.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
}

export default MainNavigation
