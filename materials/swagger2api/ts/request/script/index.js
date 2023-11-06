/*
 * @Author: jimmyZhao
 * @Date: 2023-09-29 16:28:11
 * @LastEditors: zdd
 * @LastEditTime: 2023-11-06 18:35:20
 * @FilePath: /materials/materials/swagger2api/ts/request/script/index.js
 * @Description: 
 */
module.exports = {
	getPagingReturnContent: (subType, isSample) => {
		const INDENT = '  ', keyName = 'data';

		return `\n${INDENT}const ${keyName} = res.data ? ${isSample ? `res.data` : `(res.data as any[]).map<${subType}>((v: any) => ${subType}.fromJson(v))`
			} : [];
  return { ...res.data, ${keyName} };`;
	}
}