import type vscode from 'vscode'

interface Context {
	/**
	 * @description 模版数据
	 * @type {object}
	 */
	model: object
	/**
	 * @description vscode 对象，能调用 vscode 提供的 api
	 * @type {typeof vscode}
	 */
	vscode: typeof vscode
	/**
	 * @description 调用脚本的工作目录，不一定是脚本所在的项目目录
	 * @type {string}
	 */
	workspaceRootPath: string
	/**
	 * @description OutputChannel
	 * @type {vscode.OutputChannel}
	 */
	outputChannel: vscode.OutputChannel
	/**
	 * @description 一些环境变量
	 */
	env: {
		/**
		 * @description 等于 workspaceRootPath
		 * @type {string}
		 */
		rootPath: string
		/**
		 * @description 临时工作目录
		 * @type {string}
		 */
		tempWorkPath: string
		/**
		 * @description 物料路径
		 * @type {string}
		 */
		materialsPath: string
		/**
		 * @description 区块路径
		 * @type {string}
		 */
		blockMaterialsPath: string
		/**
		 * @description 代码片段路径
		 * @type {string}
		 */
		snippetMaterialsPath: string
	}
	/**
	 * @description lwocode 插件内部使用的一些库，暴露出来避免重复安装
	 */
	libs: {
		/**
		 * @description axios
		 * @type {*}
		 */
		axios: any
		/**
		 * @description copy-paste
		 * @type {*}
		 */
		copyPaste: any
		/**
		 * @description directory-tree
		 * @type {*}
		 */
		dirTree: any
		/**
		 * @description ejs
		 * @type {*}
		 */
		ejs: any
		/**
		 * @description fs-extra
		 * @type {*}
		 */
		fsExtra: any
		/**
		 * @description execa
		 * @type {*}
		 */
		execa: any
		/**
		 * @description glob
		 * @type {*}
		 */
		glob: any
		/**
		 * @description prettier
		 * @type {*}
		 */
		prettier: any
		/**
		 * @description strip-comments
		 * @type {*}
		 */
		stripComments: any
		/**
		 * @description strip-json-comments
		 * @type {*}
		 */
		stripJsonComments: any
		/**
		 * @description generate-schema
		 * @type {*}
		 */
		generateSchema: any
		/**
		 * @description json-schema-to-typescript
		 * @type {*}
		 */
		jsonSchemaToTypescript: any
		/**
		 * @description typescript-json-schema
		 * @type {*}
		 */
		typescriptJsonSchema: any
		/**
		 * @description axios
		 * @type {*}
		 */
		tar: any
	}
}
interface CompileContext extends Context {
	/**
	 * @description 代码片段编译后的代码
	 * @type {string}
	 */
	code: string
}

interface ViewCallContext extends Context {
	/**
	 * @description 传入的方法参数
	 * @type {string}
	 */
	params: string
}

export class CompileHandler {
	private context!: CompileContext

	constructor(context: CompileContext) {
		this.context = context
	}

	log(value: string) {
		this.context.outputChannel.appendLine(value)
	}
}

export class ViewCallHandler {
	private context!: ViewCallContext

	constructor(context: ViewCallContext) {
		this.context = context
	}

	log(value: string) {
		this.context.outputChannel.appendLine(value)
	}

	showInformationMessage(msg: string) {
		this.context.vscode.window.showInformationMessage(msg)
	}

	intFromOcrText() {
		return Promise.resolve({ ...this.context.model, name: '测试一下' })
	}
}
