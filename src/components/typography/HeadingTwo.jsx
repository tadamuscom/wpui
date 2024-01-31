import React from 'react';

function HeadingTwo( props ) {
    return (
        <div className={ 'tada-flex ' + props.wrapExtraClass }>
            <h2 className={ 'tada-heading-2 ' + props.extraClass }>{ props.label }</h2>
        </div>
    );
}

export default HeadingTwo;