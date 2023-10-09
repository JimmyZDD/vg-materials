/*
 * @Author: jimmyZhao
 * @Date: 2023-09-29 16:28:11
 * @LastEditors: jimmyZhao
 * @LastEditTime: 2023-09-29 21:34:32
 * @FilePath: /materials/materials/swagger2api/dart/request/script/index.js
 * @Description: 
 */
module.exports = {
	beforeCompile: (context) => {
		// context.outputChannel.appendLine(Object.keys(context))
		// context.vscode.window.showErrorMessage('12134')
		return { ...context, success: true }
	},
	afterCompile: (constext) => {
		context.outputChannel.appendLine(Object.keys(context))
	},
}
