import express from 'express';


const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' });
});

const PORT = process.env.NODE_ENV === 'test' ? 0 : (process.env.PORT || 3000);
const server = app.listen(80, () => console.log(`Listening on port ${80}`));

module.exports = server;