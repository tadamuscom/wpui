import React from 'react';

function LinkButton( props ) {
    return (
        <div
            style={ {
            marginTop: '20px',
            marginBottom: '20px'
            } }
            className={ props.wrapExtraClass }
        >
            <a onClick={ props.click } className={ 'tada-button ' + props.extraClass }> { props.label } </a>
        </div>
    );
}

export default LinkButton;