fixture `firstTest`;

test
	.page `http://devexpress.github.io/testcafe/example`
	("Test Cafe Blog", async t =>{
		console.log("Se ingreso correctamente al sitio 1");
	});

test
	.page `http://demoqa.com/text-box`
	("Demo QA site", async t => {
		console.log("Se ingreso a la pagina de DemoQA correctamente");
	});