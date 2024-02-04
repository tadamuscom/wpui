# WP UI

A collection of React components that we use to build interfaces for the plugins from [Tadamus](https://tadamus.com).

## Changelog

### 1.0.2
- Fixed a bug in the HelperText component
- Added block comments to the components

### 1.0.1
- Added the DatePicker component
- Added the Select component
- Added the SelectOption component
- Fixed the order of the components

### 1.0.0
- Initial Release

## Elements
The set of elements included in the library.

### Button
A button based on an input element.
#### Props
The dynamic variables that can be passed to the component.
##### wrapExtraClass 
Class names that will be added to the wrap div.
##### extraClass 
Class names that will be added to the button.
##### label
The text that will be added on the button.

### Checkbox
A checkbox input element.
#### Props
The dynamic variables that can be passed to the component.
##### onChange
The function that will run on the onChange event listener along with the default function that ticks the box.
##### wrapExtraClass
Class names that will be added to the wrap div.
##### label
The text that will be added next to the checkbox.
##### name
The name attribute of the HTML input element
##### id
The id attribute of the HTML input element

### FormGroup
A wrapping element for all the groups in a form block.
#### Props
The dynamic variables that can be passed to the component.
##### extraClass
Class names that will be added to the div.

### HelperText
A small text that can be added below a form element to explain what it does.
#### Props
The dynamic variables that can be passed to the component.
##### wrapExtraClass
Class names that will be added to the wrap div.
##### extraClass
Class names that will be added to the paragraph element.
##### content
The contents of the helper text.

### Label
Label element that can be added to a form input
#### Props
The dynamic variables that can be passed to the component.
##### wrapExtraClass
Class names that will be added to the wrap div.
##### htmlFor
The for attribute.
##### extraClass
Class names that will be added to the label element.
##### label
The text that will be added to the label.

### SinglePasswordInput
A input field for passwords
#### Props
The dynamic variables that can be passed to the component.
##### wrapExtraClass
Class names that will be added to the wrap div.
##### extraClass
Class names that will be added to the input element.
##### name
The name attribute of the HTML input element
##### id
The id attribute of the HTML input element
##### onChange
The function that will run on the onChange event listener along with the default function.
##### value
The value of the element.

### SingleTextInput
A input field for passwords
#### Props
The dynamic variables that can be passed to the component.
##### wrapExtraClass
Class names that will be added to the wrap div.
##### extraClass
Class names that will be added to the input element.
##### name
The name attribute of the HTML input element
##### id
The id attribute of the HTML input element
##### onChange
The function that will run on the onChange event listener along with the default function.
##### value
The value of the element.

### DatePicker
A input field for dates
#### Props
The dynamic variables that can be passed to the component.
##### wrapExtraClass
Class names that will be added to the wrap div.
##### extraClass
Class names that will be added to the input element.
##### name
The name attribute of the HTML input element
##### id
The id attribute of the HTML input element
##### min
The min attribute of the HTML input element
##### max
The max attribute of the HTML input element

### Select
A input field for dropdowns
#### Props
The dynamic variables that can be passed to the component.
##### wrapExtraClass
Class names that will be added to the wrap div.
##### extraClass
Class names that will be added to the select element.
##### name
The name attribute of the HTML input element
##### id
The id attribute of the HTML input element
##### options
The array of SelectOption components that represent the options of the dropdown

## SelectOption
A option field that acts as a child for the Select component
#### Props
The dynamic variables that can be passed to the component.
##### id
The id attribute of the HTML option element
##### label
The text that will be added to the option.

### Header
The header element that we add at the top of any administrator page.
#### Props
The dynamic variables that can be passed to the component.
##### logoLink
The image that will be added to the logo image element. Default: https://account.tadamus.com/wp-content/uploads/2023/11/Tadamus-logo-300-60-px.png
##### logoURL
The link that will be added to the logo. Default: https://tadamus.com
### pageTitle
The title that will be added to the main heading

### Link Button
A regular link but stylized as a button
#### Props
The dynamic variables that can be passed to the component.
##### wrapExtraClass
Class names that will be added to the wrap div.
##### extraClass
Class names that will be added to the link element.
##### label
The text that will be added to the button.
##### click
The function that will run on the click event.

### HeadingTwo
A heading element representing a H2 element.
#### Props
The dynamic variables that can be passed to the component.
##### wrapExtraClass
Class names that will be added to the wrap div.
##### extraClass
Class names that will be added to the heading element.
##### label
The text that will be added to the element.

### Table
A table element
#### Props
The dynamic variables that can be passed to the component.
##### extraClass
Class names that will be added to the table element.
##### editable
Must be a boolean and represents weather the columns should have contentEditable turned on or not.
##### onBlur
The function that will run on the onBlur event of the editable columns.
##### headers
The names of the header cells.
##### rows
The array of objects that will be added as rows.
