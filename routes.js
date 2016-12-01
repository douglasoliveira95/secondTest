const path = __dirname + "/public/"

module.exports = function(app) {
    app.use("/", function(request, response) {
        response.sendFile(path + "index.html");
    })
}