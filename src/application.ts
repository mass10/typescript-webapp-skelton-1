import express from "express";
import { root } from "./controllers/index";
import { account } from "./controllers/account";
import { dashboard } from "./controllers/dashboard";

/**
 * アプリケーションクラスです。
 */
export class MyApplication {

	/**
	 * コンストラクター
	 */
	public constructor() {

	}

	/**
	 * アプリケーションを起動します。
	 */
	public run(server: string = "0.0.0.0", port: number = 80): void {

		const app = express();

		app.set("view engine", "ejs");

		app.use("/static", express.static("public"));


		app.get("/", root.get);
		app.get("/account", account.get);
		app.get("/dashboard", dashboard.get);

		app.listen(port, server);
	}
}
