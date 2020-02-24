namespace DataSource {

	export class Connection {

		/**
		 * コンストラクター
		 */
		public constructor() {

		}

		/**
		 * 参照系の問い合わせを実行します。
		 * @param sql 
		 * @param parameters 
		 */
		public executeQuery(sql: string, parameters: any[]): any {

		}

		/**
		 * 更新系の問い合わせを実行します。
		 * @param sql 
		 * @param parameters 
		 */
		public executeUpdate(sql: string, parameters: any[]): any {

		}

		/**
		 * 
		 */
		public close(): void {

		}
	}
}
