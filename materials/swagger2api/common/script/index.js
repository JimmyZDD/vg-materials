/*
 * @Author: zdd
 * @Date: 2023-10-10 18:45:38
 * @LastEditors: zdd
 * @LastEditTime: 2023-11-06 18:41:19
 * @FilePath: /materials/materials/swagger2api/common/script/index.js
 * @Description: 
 */


module.exports = {
	response: {
		// response响应值
		dataName: `res.body['data']`,
		// 分页类名
		// 例：PageData.data (PageData 表示公共分页类，data 表示数据字段)
		pagingName: 'PageResp.data',
		// 分页props
		// 参数最后一项会映射为类名数据字段[data]。
		pagingProps: ['page', 'size', 'total', 'data'],
	},
	/**
	 * Retrieves the standard response from the given JSONSchema.
	 *
	 * @param {JSONSchema} response - The JSONSchema to retrieve the standard response from.
	 * @param {JSONSchema | undefined} realRes - The JSONSchema as $ref real response
	 * @return {[JSONSchema | undefined, boolean]}  [standard response, isPaging] .
	 */
	getStandardResponse: (response, realRes) => {
		if (typeof response !== 'object') return [undefined, false];
		const dataKey = 'data';
		const pageProps = ['page', 'size', 'total', 'data'];

		if (response.allOf) {
			if (realRes && realRes.properties && realRes.properties[dataKey]) {
				let isPaging = true;
				for (let index = 0; index < pageProps.length; index++) {
					const key = pageProps[index];
					if (!Object.keys(realRes.properties).includes(key)) {
						isPaging = false;
						break;
					}
				}

				return [realRes.properties[dataKey], isPaging];
			}
		} else if (typeof response === 'object' && response.type === 'object' && response.properties && response.properties[dataKey]) {
			let isPaging = true;
			for (const key in pageProps)
				if (!Object.keys(response.properties).includes(key)) {
					isPaging = false;
					break;
				}
			return [response.properties[dataKey], isPaging];
		}
		return [undefined, false];
	}
}
