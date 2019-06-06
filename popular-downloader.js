const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

rp('https://reddit.com/r/popular.json')
    .then(data => {
        let posts = JSON.parse(data);
        posts.data.children.forEach(post => {
            if (path.extname(post.data.url) === '.jpg' ||
                path.extname(post.data.url) === '.gif' ||
                path.extname(post.data.url) === '.png') {

                let writeFileName = post.data.id + path.extname(post.data.url);

                rp(post.data.url, { encoding: 'base64' })
                    .then(media => {
                        fs.writeFile(path.join(__dirname, `./downloads/media/${writeFileName}`), media, { encoding: 'base64' }, (err) => {
                            if (err) console.log(err);
                        });
                    })
                    .catch(e => console.log(e));
            }

        });
    }).catch(e => console.log(e));