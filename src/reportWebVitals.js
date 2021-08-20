const reportWebVitals = (onPerfEntry) => {
	if (onPerfEntry && onPerfEntry instanceof Function) {
		import('web-vitals').then(
			// eslint-disable-next-line object-curly-newline
			({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
				getCLS(onPerfEntry);

				getFID(onPerfEntry);

				getFCP(onPerfEntry);

				getLCP(onPerfEntry);

				getTTFB(onPerfEntry);
				// eslint-disable-next-line comma-dangle
			}
		);
	}
};

export default reportWebVitals;
