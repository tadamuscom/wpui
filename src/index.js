import React, {useState} from "react";
import TableHeader from "./components/table/TableHeader";
import TableRow from "./components/table/TableRow";
import sanitizeHtml from "sanitize-html";

export const Button = ( props ) => {
    return (
        <div className={ props.wrapExtraClass }>
            <input type="submit" className={ 'tada-button ' + props.extraClass } value={ props.label } />
        </div>
    );
}

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

export const FormGroup = ( props ) => {
    return (
        <div className={ ( props.extraClass ) ? 'tada-form-group ' + props.extraClass : 'tada-form-group ' + '' }>
            { props.children }
        </div>
    );
}

export const HelperText = ( props ) => {
    return (
        <div className={ props.wrapExtraClass }>
            <p className={ 'tada-helper-text' + props.extraClass }>{ props.content }</p>
        </div>
    );
}

export const Label = ( props ) => {
    return (
        <div className={ props.wrapExtraClass }>
            <label htmlFor={ props.htmlFor } className={ props.extraClass }>{ props.label }</label>
        </div>
    );
}

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

export const HeadingTwo = ( props ) => {
    return (
        <div className={ 'tada-flex ' + props.wrapExtraClass }>
            <h2 className={ 'tada-heading-2 ' + props.extraClass }>{ props.label }</h2>
        </div>
    );
}

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

export const resetTable = ( columnElement ) => {
    const errorElement = document.getElementById( 'table-error' );

    if( columnElement.style.borderColor === 'red' ) {
        columnElement.style.borderColor = '#000';
    }

    if( errorElement ){
        errorElement.remove();
    }
}

export const triggerColumnError = ( columnElement, table , message ) => {
    columnElement.style.borderColor = 'red';

    const tableParent = table.parentNode;
    const errorParagraph = document.createElement( 'p' );
    errorParagraph.id = 'table-error';
    errorParagraph.innerText = message;
    errorParagraph.style.color = 'red';

    tableParent.appendChild( errorParagraph );
}

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

const resetErrorGroup = ( group ) => {
    group.forEach( ( input ) => {
        if( input.classList.contains( 'tada-field-error' ) ){
            input.classList.remove( 'tada-field-error' );
        }
    } );
}