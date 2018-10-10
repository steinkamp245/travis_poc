import express from 'express';


const app = express();

const PORT = process.env.NODE_ENV === 'test' ? 0 : (process.env.PORT || 3000);
const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = server;