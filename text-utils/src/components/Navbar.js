import React from "react";
import PropTypes from 'prop-types';
import Navbaritems from "./Navbaritems";
import Navbarform from "./Navbarform";

function Navbar(props) {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
		<div className="container-fluid">
			<a className="navbar-brand" href="/">{props.logoTitle}</a>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <Navbaritems navTextHome="Home" navTextAbout="About"/>
			    <Navbarform />
			</div>
  		</div>
	</nav>
    );
};


Navbar.propTypes = {
    logoTitle: PropTypes.string.isRequired
}


Navbar.defaultProps = {
    logoTitle: "Logo"
}
export default Navbar;