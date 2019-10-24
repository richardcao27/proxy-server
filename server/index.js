let express = require('express');
let path = require('path');

const PORT = 4000;

let app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../')));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
