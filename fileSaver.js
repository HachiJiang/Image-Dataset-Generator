const fs = require('fs'); // @TODO: cannot be used in browser
const xlsx = require("node-xlsx");

const HEADERS = ['name', 'x', 'y']; // @TODO: no hardcode

module.exports = function exportToExcel(locations, filename) {
    let data = [HEADERS, ...locations.map(location => [location.name, location.pos.x, location.pos.y])];
    let buffer = xlsx.build([{
        name: 'My Locations',
        data
    }]); // Returns a buffer

    fs.writeFileSync(filename, buffer, 'binary');
    console.log(`Save dataset to ${filename} with ${locations.length} locations!`);
};