import React from 'react';

function Header ( props ) {
    let logoLink = 'https://account.tadamus.com/wp-content/uploads/2023/11/Tadamus-logo-300-60-px.png';
    let logoURL = 'https://tadamus.com';

    if( props.logoLink ){
        logoLink = props.logoLink;
    }

    if( props.logoURL ){
        logoURL = props.logoURL;
    }

    return (
        <div>
            <div className="tada-flex-row tada-admin-header">
                <div>
                    <a href={ logoURL } target='_blank'><img src={ '' + logoLink }  alt='logo' width="200px" /></a>
                </div>
                <div>
                    <h1 className="tada-admin-page-heading">{ props.pageTitle }</h1>
                </div>
            </div>
        </div>
    );
}

export default Header;