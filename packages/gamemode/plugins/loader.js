const fs = require('fs');
const path = require('path');

DB.connect(() => {

    fs.readdirSync(path.resolve(__dirname, '../core')).forEach(src => {
        global._[src.replace(".js", "")] = require('../core/' + src);
    });

    let events = [];

    fs.readdirSync(path.resolve(__dirname, '../events')).forEach(src => {
        events = events.concat(require('../events/' + src));
    });
    events.forEach(event => {
        mp.events.add(event);
    });
});