import React from 'react';

function Header ( props ) {
    let logoURL = 'https://tadamus.com';

    if( props.logoURL ){
        logoURL = props.logoURL;
    }

    return (
        <div>
            <div className="tada-flex-row tada-admin-header">
                <div>
                    <a href={ logoURL } target='_blank'><img src={ '' + props.logoLink }  alt='logo' width="200px" /></a>
                </div>
                <div>
                    <h1 className="tada-admin-page-heading">{ props.pageTitle }</h1>
                </div>
            </div>
        </div>
    );
}

export default Header;
