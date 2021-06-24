const fs = require('fs');
const initialDB = require('./db_initial.json');

fs.writeFileSync('./db.json', JSON.stringify(initialDB, null, 2))

