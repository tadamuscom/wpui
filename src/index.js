import React, {useState} from "react";
import TableHeader from "./components/table/TableHeader";
import TableRow from "./components/table/TableRow";
import sanitizeHtml from "sanitize-html";

/**
 * Add a submit input styled like a button
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const Button = ( props ) => {
    return (
        <div className={ props.wrapExtraClass }>
            <input type="submit" className={ 'tada-button ' + props.extraClass } value={ props.label } />
        </div>
    );
}

/**
 * Add a checkbox input
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const CheckBox = ( props ) => {
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

/**
 * Add a div that will be the wrapper for input elements, their labels and helper texts.
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const FormGroup = ( props ) => {
    return (
        <div className={ ( props.extraClass ) ? 'tada-form-group ' + props.extraClass : 'tada-form-group ' + '' }>
            { props.children }
        </div>
    );
}

/**
 * Add a helper text under inputs
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const HelperText = ( props ) => {
    return (
        <div className={ props.wrapExtraClass }>
            <p className={ 'tada-helper-text ' + props.extraClass }>{ props.content }</p>
        </div>
    );
}

/**
 * Add a label
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const Label = ( props ) => {
    return (
        <div className={ props.wrapExtraClass }>
            <label htmlFor={ props.htmlFor } className={ props.extraClass }>{ props.label }</label>
        </div>
    );
}

/**
 * Add a password input
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const SinglePasswordInput = (props) => {
    const [value, setValue] = useState( props.value );

    const onChange = ( e ) => {
        setValue( e.target.value );

        if( props.onChange ){
            props.onChange();
        }
    }

    return (
        <div className={ props.wrapExtraClass }>
            <input type="password" autoComplete="off" className={ props.extraClass } id={ props.id } name={ props.name } value={ value } onChange={ onChange } />
        </div>
    );
}

/**
 * Add a text input
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const SingleTextInput = ( props ) => {
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

/**
 * Add a datepicker input
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const DatePicker = ( props ) => {
    return (
        <div className={ props.wrapExtraClass }>
            <input type="date" className={ props.extraClass } id={ props.id } name={ props.name } min={ props.min } max={ props.max } />
        </div>
    );
}

/**
 * Add a select element
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const Select = ( props ) => {
    return (
        <div className={ props.wrapExtraClass }>
            <select className={ 'tada-select ' + props.extraClass } id={ props.id } name={ props.name }>
                { props.options }
            </select>
        </div>
    );
}

/**
 * Add an option element for dropdowns
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const SelectOption = ( props ) => {
    return (
        <option value={ props.id }>
            { props.label }
        </option>
    );
}

/**
 * Add the main Header for the pages
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const Header = ( props ) => {
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

/**
 * Add a Table
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const Table = ( props ) => {
    const preHeaders = [];
    const preRows = [];

    let editable = false;
    let onBlur = false;

    if( props.editable ){
        editable = props.editable;
    }

    if( props.onBlur ){
        onBlur = props.onBlur;
    }

    preHeaders.push( <TableHeader content='ID' key={ 'id' } /> );

    props.headers.forEach( ( element, index ) => {
        preHeaders.push( <TableHeader content={ element } key={ index } /> );
    } );

    props.rows.forEach( ( element, index ) => {
        preRows.push( <TableRow columns={ element } key={ index } editable={ editable } onBlur={ onBlur } /> );
    } );

    const [ rows, setRows ] = useState( preRows );
    const [ headers, setHeaders ] = useState( preHeaders );

    return (
        <table className={ 'tada-table ' + props.extraClass }>
            <thead>
            <tr>
                { headers }
            </tr>
            </thead>
            <tbody>
            { rows }
            </tbody>
        </table>
    );
}

/**
 * Add a H2 element
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const HeadingTwo = ( props ) => {
    return (
        <div className={ 'tada-flex ' + props.wrapExtraClass }>
            <h2 className={ 'tada-heading-2 ' + props.extraClass }>{ props.label }</h2>
        </div>
    );
}

/**
 * Add an A element stylized like a button
 *
 * @since 1.0.2
 *
 * @param props
 * @returns {Element}
 * @constructor
 */
export const LinkButton = ( props ) => {
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

/**
 * Trigger an error for a form
 *
 * @since 1.0.2
 *
 * @param elementId
 * @param message
 */
export const triggerError = ( elementId, message ) => {
    const element = document.getElementById( elementId );
    const parent = element.parentNode;

    if( ! element.classList.contains( 'tada-field-error' ) ){
        element.classList.add( 'tada-field-error' );
    }

    let go = true;

    parent.childNodes.forEach( ( element ) => {
        if( element.classList.contains( 'tada-error-message' ) ){
            go = false;
        }
    } );

    if( go ){
        const errorMessage = document.createElement( 'p' );
        errorMessage.innerText = message;
        errorMessage.classList.add( 'tada-error-message' );
        parent.appendChild( errorMessage );
    }
}

/**
 * Reset the errors from a form
 *
 * @since 1.0.2
 *
 * @param formElement
 */
export const resetForm = ( formElement ) => {
    const status = document.getElementById( 'tada-status' );
    status.innerText = '';

    if( status.classList.contains( 'tada-hidden' ) ){
        status.classList.remove( 'tada-hidden' );
    }

    resetErrorGroup( document.querySelectorAll( '#' + formElement.id + ' input[type="text"]' ) );
    resetErrorGroup( document.querySelectorAll( '#' + formElement.id + ' input[type="password"]' ) );

    const errorMessages = document.querySelectorAll( '#' + formElement.id + ' .tada-error-message' )

    errorMessages.forEach( ( error ) => {
        error.remove();
    } );
}

/**
 * Reset a table
 *
 * @since 1.0.0
 *
 * @param columnElement
 */
export const resetTable = ( columnElement ) => {
    const errorElement = document.getElementById( 'table-error' );

    if( columnElement.style.borderColor === 'red' ) {
        columnElement.style.borderColor = '#000';
    }

    if( errorElement ){
        errorElement.remove();
    }
}

/**
 * Trigger an error in a column table
 *
 * @since 1.0.2
 *
 * @param columnElement
 * @param table
 * @param message
 */
export const triggerColumnError = ( columnElement, table , message ) => {
    columnElement.style.borderColor = 'red';

    const tableParent = table.parentNode;
    const errorParagraph = document.createElement( 'p' );
    errorParagraph.id = 'table-error';
    errorParagraph.innerText = message;
    errorParagraph.style.color = 'red';

    tableParent.appendChild( errorParagraph );
}

/**
 * Get the ID of the table object
 *
 * @since 1.0.2
 *
 * @param row
 * @returns {string|string}
 */
export const getElementID = ( row ) => {
    let returnable;

    row.childNodes.forEach( ( element, index ) => {
        switch( element.getAttribute( 'column' ) ){
            case 'id':
            case 'ID':
                returnable = element.innerText;
        }
    } );

    return sanitizeHtml( returnable );
}

/**
 * Add a loader to a table column
 *
 * @since 1.0.2
 *
 * @param row
 * @returns {HTMLDivElement|boolean}
 */
export const columnAddLoader = ( row ) => {
    const children = row.childNodes;
    let existingLoader = false;

    children.forEach( element => {
        if( element.classList.contains( 'tada-loader' ) ){
            existingLoader = element;
        }
    } );

    if( existingLoader === false ){
        const loader = document.createElement( 'div' );
        loader.classList.add( 'tada-loader' );

        row.appendChild(loader);

        return loader;
    }

    return existingLoader;
}

/**
 * Reset a form group from errors
 *
 * @since 1.0.2
 *
 * @param group
 */
const resetErrorGroup = ( group ) => {
    group.forEach( ( input ) => {
        if( input.classList.contains( 'tada-field-error' ) ){
            input.classList.remove( 'tada-field-error' );
        }
    } );
}