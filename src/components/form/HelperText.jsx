import React from 'react';

function HelperText( props ) {
    return (
        <div className={ props.wrapExtraClass }>
            <p className={ 'tada-helper-text ' + props.extraClass }>{ props.content }</p>
        </div>
    );
}

export default HelperText;