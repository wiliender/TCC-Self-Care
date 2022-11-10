import express from 'express';
import crypto from 'crypto';
import connection from './database/connection.js';

const routes = express.Router();

routes.post('/group', async (req, res) => {
    const { name, email, whatsapp, city, uf} = req.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('group').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return res.json({ id });
});

export default routes;