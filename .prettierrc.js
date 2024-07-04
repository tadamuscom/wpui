module.exports = {
	trailingComma: 'all',
	tabWidth: 2,
	useTabs: true,
	semi: true,
	singleQuote: true,
	bracketSameLine: true,
	plugins: ['@trivago/prettier-plugin-sort-imports'],
	overrides: [
		{
			files: ['**/*.css', '**/*.html'],
			options: {
				singleQuote: false,
			},
		},
	],
};
