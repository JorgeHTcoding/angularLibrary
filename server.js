const express = require('express');
const app = express();

app.use(express.static(__dirname + "/dist/angular-library"));
app.get('*', function(request,response){
    response.sendFile("index.html", {root:__dirname + "/dist/angular-library"});
});
app.listen(process.env.PORT || 8080 );