
const path = __dirname + "/public/"

module.exports = function(app) {
    app.use("/", function(request, response) {
        response.sendFile(path + "index.html");
    })

    app.post("/calcular", function(request, response){
        console.log("Salary: " + request.body);  //ver no terminal
        response.send("Salary: " + request.body); //pegar o valor
    })
}

