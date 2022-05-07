import React from 'react';
import  {PropTypes} from "prop-types";

const Footer = ({siteName}) => {

    const year = new Date().getFullYear();

    return (
        <footer className={"text-center p-3 bg-neutral font-bold"}>
            CopyRight {year} - {siteName}
        </footer>
    );
};


Footer.defaultProps = {
    siteName: "Github Finder"
}


Footer.propTypes = {
    siteName: PropTypes.string,
}

export default Footer;