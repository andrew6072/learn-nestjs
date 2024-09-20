var fs = require('fs');
var path = require('path');

var directory = './data'
var content = 'This is first file ever. Hello world!\n'

if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
}

fs.appendFile(
    path.join(directory, 'mynewfile1.txt'), 
    content, 
    function (err) {
        if (err) throw err;
        console.log('Appended!');
    }
);

fs.open(
    path.join(directory, 'mynewfile2.txt'),
    'w', 
    function (err, file) {
        if (err) throw err;
        console.log('Saved!');
    }
);

fs.writeFile('data/mynewfile3.txt', 'Hello content 3!\n', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});

fs.unlink('data/mynewfile1.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});


fs.rename('data/mynewfile3.txt', 'data/myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
});
  
