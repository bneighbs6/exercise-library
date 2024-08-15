// Assign a port value for server to run on
// In this case, its set to whatever PORT is in process.env, otherwise its defaulted to 5000
const { PORT = 5000 } = process.env; 

// Require Express application, exported from app.js
const app = require("./app");

const listener = () => console.log(`Listening on PORT ${PORT}!`);

app.listen(PORT, listener);

