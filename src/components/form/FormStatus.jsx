import { ErrorMessage, SuccessMessage } from '../../index';

export const FormStatus = ({ status }) => {
	if (status.field) return null;

	if (status.type === 'error') {
		return <ErrorMessage inline={true}>{status.message}</ErrorMessage>;
	}

	if (status.type === 'success') {
		return <SuccessMessage inline={true}>{status.message}</SuccessMessage>;
	}

	return null;
};
