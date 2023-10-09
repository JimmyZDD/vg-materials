

module.exports = {
	pageResponse: {
		name: 'PageResp.data',
		props: ['page', 'size', 'total', 'items'],
	},
	/**
	 * Retrieves the standard response from the given JSONSchema.
	 *
	 * @param {JSONSchema} response - The JSONSchema to retrieve the standard response from.
	 * @param {JSONSchema | undefined} realRes - The JSONSchema as $ref real response
	 * @return {JSONSchema | undefined} The standard response if it exists, otherwise undefined.
	 */
	getStandardResponse: (response, realRes) => {
		const ignoreResponse = '$1.data';
		if (typeof response !== 'object') return undefined;
		if (!ignoreResponse || !ignoreResponse.includes('.')) return response;
		const [_, key] = ignoreResponse.split('.');

		if (response.allOf) {
			if (realRes && realRes.properties) return realRes.properties[key];
		} else if (typeof response === 'object' && response.type === 'object' && response.properties) {
			return response.properties[key];
		}
		return undefined;
	},
	/**
	 * Returns the page response from the provided standard response.
	 *
	 * @param {JSONSchema | undefined} response - The response to extract the page response from.
	 * @return {JSONSchema | undefined} The page response object, or undefined if not found.
	 */
	getPageResponse: (response) => {
		const props = ['page', 'size', 'total', 'items'];
		const pageResDataKey = 'items';
		if (!response) return undefined;
		for (const key in response.properties) if (!props.includes(key)) return undefined;
		return response.properties ? response.properties[pageResDataKey] : undefined;
	}
}
