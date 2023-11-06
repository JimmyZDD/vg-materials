/*
 * @Author: jimmyZhao
 * @Date: 2023-09-29 16:28:11
 * @LastEditors: zdd
 * @LastEditTime: 2023-11-06 15:55:45
 * @FilePath: /materials/materials/swagger2api/dart/request/script/index.js
 * @Description: 
 */
module.exports = {
	getPagingReturnContent: (subType, suffix) => {
		const INDENT = '  ', resName = `res.body['data']`, keyName = 'data',
			pageName = 'PageResp', pageResProps = ['page', 'size', 'total'];

		return `\n${INDENT}${INDENT}var pageData = ${resName};
    List<${subType}> ${keyName} = pageData == null
        ? []
        : List<${subType}>.from(
            pageData.map((e) => ${subType}.${suffix}));
    return ${pageName}(
      ${keyName},${pageResProps.map((key) => `\n${INDENT}${INDENT}${INDENT}${key}: res.body['${key}']`).join(',')},
    );`;
	}
}
