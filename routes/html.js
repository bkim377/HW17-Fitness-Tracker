var path = require("path");

module.exports = function(app) {

// home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../public/index.html"));
});

// exercise page
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "../public/exercise.html"));
});
     
// statistics page
app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "../public/stats.html"));
});

};