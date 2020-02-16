import { MyApplication } from './application';

/**
 * エントリーポイントを定義する名前空間です。
 */
module Main {

	/**
	 * キーと値を保持する連想配列のクラスです。
	 */
	type IArgumentMapCore = {
		[key: string]: string | boolean | undefined
	};

	/**
	 * コマンドライン引数を保存するクラスです。
	 */
	class ArgumentMap {

		private _core: IArgumentMapCore = {};

		/**
		 * 数値にして値を取り出します。
		 * key が存在しない場合は undefined を返します。
		 * @param key 
		 */
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

		/**
		 * 値を文字列で取り出します。
		 * key が存在しない場合は undefined を返します。
		 * @param key 
		 */
		public getString(key: string): string | undefined {

			const unknown = this._core[key];
			if (unknown === true)
				return "true";
			if (unknown === false)
				return "false";
			return unknown;
		}

		/**
		 * キーと値を保存します。
		 * @param key 
		 * @param value 
		 */
		public set(key: string, value: any): void {

			this._core[key] = value;
		}
	}

	/**
	 * コマンドライン引数を読み取ります。
	 */
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
