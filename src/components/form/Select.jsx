import React from 'react';

function Select(props) {
    return (
        <div className={ props.wrapExtraClass }>
            <select className={ 'tada-select ' + props.extraClass } id={ props.id } name={ props.name }>
                { props.options }
            </select>
        </div>
    );
}

export default Select;