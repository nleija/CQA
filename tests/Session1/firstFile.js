import { fixture } from "testcafe"

fixture ("firstTest")

test
	.page 'http://demoqa.com/text-box';
	("Demo QA site", async t => {
		console.log("Se ingreso a la pagina de DemoQA correctamente")
	})