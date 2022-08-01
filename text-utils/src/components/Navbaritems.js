import React from "react";
import PropTypes from 'prop-types';

function Navbaritems(props) {
    return (
        <>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">{props.navTextHome}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">{props.navTextAbout}</a>
                </li>
            </ul>
            <div className="form-check form-switch text-light">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
            </div>
        </>
    );
};


Navbaritems.propTypes = {
    navTextHome: PropTypes.string.isRequired,
    navTextAbout: PropTypes.string.isRequired
}


Navbaritems.defaultProps = {
    navTextHome: "home",
    navTextAbout: "about"
}
export default Navbaritems;