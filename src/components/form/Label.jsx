import React from 'react';

function Label( props ) {
    return (
        <div className={ props.wrapExtraClass }>
            <label htmlFor={ props.htmlFor } className={ props.extraClass }>{ props.label }</label>
        </div>
    );
}

export default Label;