var koa = require("koa");
var koaWs = require("./lib");

var app = koa();

koaWs(app);

app.use(function*(){
	var con = yield this.upgrade();
	con.send("hello world!");
	throw new Error("wtf?!")
})
app.listen(80);
