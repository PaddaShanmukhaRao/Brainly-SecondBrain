import express, { json } from 'express';
const app = express();
app.use(json());
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    res.send({
        username,
        password
    });
});
app.listen(3000);
//# sourceMappingURL=index.js.map