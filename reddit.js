const path = require('path');
const fs = require('fs');
const rp = require('request-promise');


rp('https://reddit.com/r/aww.json')
.then(data => {
    let articles = JSON.parse(data);
    let writeData = articles.data.children.map(article => {
        console.log(article);

        return {
            title: article.data.title,
            author: article.data.author,
            URL: article.data.url
        }
    }); 

    console.log(writeData);

    fs.writeFile(path.join(__dirname, '../aww-articles.json'), JSON.stringify(writeData), (err) => {
        if (err) console.log(err);
        console.log('r/aww article objects written!');
    })

}).catch(err => console.log(err));