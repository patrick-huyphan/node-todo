module.exports = function (app) {
    var path = require('path');
    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/page0', function (req, res) {
        console.log('*'+__dirname +'-page0');
        res.sendFile(path.resolve(__dirname + '/../public/src/page/page0.html')); // load the single view file (angular will handle the page changes on the front-end)
    });
    app.get('/page1', function (req, res) {
        console.log('*'+__dirname + '-page1');
        res.sendFile(path.resolve(__dirname + '/../public/src/page/page1.html')); // load the single view file (angular will handle the page changes on the front-end)
    });
    app.get('/page2', function (req, res) {
        console.log('*'+__dirname + '-page2');
        res.sendFile(path.resolve(__dirname + '/../public/src/page/page2.html')); // load the single view file (angular will handle the page changes on the front-end)
    });
    app.get('/page3', function (req, res) {
        console.log('*'+__dirname + '-page3');
        res.sendFile(path.resolve(__dirname + '/../public/src/page/page3.html')); // load the single view file (angular will handle the page changes on the front-end)
    });
    // application -------------------------------------------------------------
    app.get('/', function (req, res) {
        console.log('*'+__dirname+'-main');
        res.sendFile(path.resolve(__dirname + '/../public/index.html')); // load the single view file (angular will handle the page changes on the front-end)
    });
};
