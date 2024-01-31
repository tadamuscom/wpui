import React, {useState} from 'react';

function SingleTextInput( props ) {
    const [value, setValue] = useState( props.value );

    const onChange = ( e ) => {
        setValue( e.target.value );

        if( props.onChange ){
            props.onChange();
        }
    }

    return (
        <div className={ props.wrapExtraClass }>
            <input type="text" autoComplete="off" className={ props.extraClass } id={ props.id } name={ props.name } value={ value } onChange={onChange} />
        </div>
    );
}

export default SingleTextInput;