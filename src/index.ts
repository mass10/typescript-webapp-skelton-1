import { MyApplication } from './application';

/**
 * エントリーポイントを定義する名前空間です。
 */
module Main {

	type IArgumentMapCore = {
		[key: string]: string | boolean | undefined
	};

	class ArgumentMap {

		private _core: IArgumentMapCore = {};

		public getNumber(key: string): number | undefined {

			const unknown = this._core[key];
			if (unknown === undefined)
				return undefined;
			if (unknown === true)
				return 1;
			if (unknown === false)
				return 0;
			try {
				return parseFloat(unknown);
			}
			catch (e) {
				return 0;
			}
		}

		public getString(key: string): string | undefined {

			const unknown = this._core[key];
			if (unknown === true)
				return "true";
			if (unknown === false)
				return "false";
			return unknown;
		}

		public set(key: string, value: any): void {

			this._core[key] = value;
		}
	}

	function readArgs(): ArgumentMap {

		const args = new ArgumentMap();
		let key = "";
		for (const e of process.argv) {
			if (e.startsWith("--")) {
				args.set(e, true);
				key = e;
			}
			else if (key != "") {
				args.set(key, e);
				key = "";
			}
		}
		return args;
	}

	/**
	 * エントリーポイントの定義です。
	 */
	export function main() {

		const args = readArgs();
		// アプリケーションを起動します。
		new MyApplication().run(args.getString("--server"), args.getNumber("--port"));
	}
}

Main.main();
