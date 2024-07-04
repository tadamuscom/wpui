import '../style/main.css';

// Constants
export * from './constants';

// Form
export * from './components/form/Button';
export * from './components/form/CheckBox';
export * from './components/form/FormGroup';
export * from './components/form/HelperText';
export * from './components/form/Label';
export * from './components/form/Select';
export * from './components/form/SelectOption';
export * from './components/form/Input';
export * from './components/form/ErrorMessage';
export * from './components/form/SuccessMessage';
export * from './components/form/FormStatus';
export * from './components/form/Textarea';

// Layout
export * from './components/layout/Header';

// Table
export * from './components/table/Table';
export * from './components/table/TableRow';
export * from './components/table/TableColumn';
export * from './components/table/TableHeader';

// Typography
export * from './components/typography/HeadingTwo';
export * from './components/typography/HeadingThree';

// LinkButton
export * from './components/LinkButton';

// Hooks
export * from './hooks/useForms';
export * from './hooks/useTables';

export const addQueryParameter = (key, value) => {
	let url = new URL(window.location.href);
	let searchParams = new URLSearchParams(url.search);

	searchParams.set(key, value);
	url.search = searchParams.toString();

	window.history.pushState({}, '', url.toString());
};

export const removeQueryParameter = (key) => {
	let url = new URL(window.location.href);
	let searchParams = new URLSearchParams(url.search);

	searchParams.delete(key);
	url.search = searchParams.toString();

	window.history.pushState({}, '', url.toString());
};

export const getQueryParameter = (key) => {
	let searchParams = new URLSearchParams(window.location.search);
	return searchParams.get(key);
};
