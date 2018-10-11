import express from 'express';


const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'I was changed on the feature branch!' });
});

const PORT = process.env.NODE_ENV === 'test' ? 0 : (process.env.PORT || 80);
const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = server;