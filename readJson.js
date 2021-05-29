import fs from 'fs';
const raw = fs.readFileSync('myfile.json');
const data = JSON.parse(raw);

fs.writeFileSync('newfile.json', JSON.stringify(data));

console.log(data);
