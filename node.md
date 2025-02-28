## middleware

app.get('/', middleware1, middleware2, middleware3)
~~ run: middleware1 -> middleware2 -> middleware3 -> "/"
~~ constructure: (req, res, next) => {
res.send("Hello World!");
}
