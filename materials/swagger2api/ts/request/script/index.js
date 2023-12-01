/*
 * @Author: jimmyZhao
 * @Date: 2023-09-29 16:28:11
 * @LastEditors: zdd dongdong@grizzlychina.com
 * @LastEditTime: 2023-12-01 10:48:08
 * @FilePath: index.js
 * @Description:
 */
module.exports = {
  getPagingReturnContent: (subType, isSample) => {
    const INDENT = "  ",
      keyName = "data";

    return `\n${INDENT}const ${keyName} = res.data ? ${
      isSample
        ? `res.data`
        : `(res.data as any[]).map<${subType}>((v: any) => ${subType}.fromJson(v))`
    } : [];
  return { ...res, ${keyName} };`;
  },
};
