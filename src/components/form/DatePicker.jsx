import React from 'react';

function DatePicker(props) {
    return (
        <div className={ props.wrapExtraClass }>
            <input type="date" className={ props.extraClass } id={ props.id } name={ props.name } min={ props.min } max={ props.max } />
        </div>
    );
}

export default DatePicker;