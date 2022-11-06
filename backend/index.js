import express, { response } from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.json({
        evento:'TCC',
        dev:'Wiliender F. Silva'
    });
});

app.listen(3333);