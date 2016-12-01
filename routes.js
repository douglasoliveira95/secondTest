
const path = __dirname + "/public/"

module.exports = function(app) {
    app.get("/", function(request, response) {
        response.sendFile(path + "index.html");
    })

    app.post("/calcular", function(request, response){
        console.log("Salary: " + request.body.salary);  //ver no terminal
        response.send("Salary: " + request.body.salary); //pegar o valor
    })
}

