import React from 'react';
function Button( props ) {
    return (
        <div className={ props.wrapExtraClass }>
            <input type="submit" className={ 'tada-button ' + props.extraClass } value={ props.label } />
        </div>
    );
}

export default Button;