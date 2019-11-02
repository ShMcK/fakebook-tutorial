import { promises } from 'fs'
import { join } from 'path'

const { readFile, readdir } = promises

interface Params {
	name: string // npm package name
	type: 'dependency' | 'devDependency' | 'peerDependency' // dependency type
}

const packaged = async ({ name, type }: Params) => {
	// 1. load package.json file
	const pathToPackageJson: string = join(process.cwd(), 'package.json')
	const packageJson: string | void = await readFile(pathToPackageJson, 'utf8').catch(console.error)
	if (!packageJson) {
		throw new Error('Missing root package.json')
	}
	const json = JSON.parse(packageJson)
	if (!json) {
		throw new Error('Your package.json looks invalid')
	}

	// 2. verify package installed
	let installCommand: string
	let hasDependency: boolean

	switch (type) {
		case 'dependency':
				installCommand = '--save'
				hasDependency = !!json.dependencies && json.dependencies[name]
				break
		case 'devDependency':
				installCommand = '--save-dev'
				hasDependency = !!json.devDependencies && json.devDependencies[name]
				break
		case 'peerDependency':
			throw new Error('Peer dependencies unsupported')
		default:
			throw new Error('Unsupported packaged type')
	}

	if (!hasDependency) {
		throw new Error(`Run "npm install ${installCommand} ${name}"`)
	}

	// 3. verify node_module installed
	const pathToNodeModule: string = join(process.cwd(), 'node_modules', name)
	const hasNodeModules: string[] = await readdir(pathToNodeModule)
		.catch(() => {
			throw new Error('Missing node_modules. Run "npm install"')	
		})
	if (!hasNodeModules) {
		throw new Error('Missing node_modules. Run "npm install"')
	}

	// 4. chicken dinner!
	return true
}

export default packaged