const path = require('path');
const fs = require('fs');

const chirps = [
    {
        chirp: "I am chirp 1!"
    },
    {
        chirp: "I am chirp 2!"
    },
    {
        chirp: "I am chirp 3!"
    },
    {
        chirp: "I am chirp 4!"
    },
    {
        chirp: "I am chirp 5!"
    },
];

fs.writeFile(path.join(__dirname, '../chirps.json'), JSON.stringify(chirps), (err) => {
    if(err) console.log(err);
    console.log('chirp objects written!');
});

fs.readFile(path.join(__dirname, '../chirps.json'), (err, chirps) => {
    if(err) console.log(err);
    console.log(JSON.parse(chirps));
});

