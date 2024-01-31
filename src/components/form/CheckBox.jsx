import React, {useState} from 'react';

function CheckBox( props ) {
    const [value, setValue] = useState( props.value );

    const onChange = ( e ) => {
        setValue( ! value )

        if( props.onChange ){
            props.onChange();
        }
    }

    return (
        <div className={ props.wrapExtraClass }>
            <label className="checkbox-container tada-flex-row">
                <span className='checkbox-label'>{ props.label }</span>
                <input type="checkbox" checked={ value } name={ props.name } id={ props.id } onChange={ onChange } />
                    <span className="checkmark"></span>
            </label>
        </div>
    );
}

export default CheckBox;