import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';


let config = dotenv.config({path: `${process.cwd()}/.env`});
console.log(`Config object: ${JSON.stringify(config)}`);

const app = express();

app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));


app.post('/create-cookie', (req, res) => {
    console.log(`[Back-end] '/create-cookie' endpoint invoked.`);
    res.header({
        
    });
    res.cookie('jsonwebtoken', 'encryptedstringtoken', {
        maxAge: Date.now() + 9999
    });
    res.json({message: "End point successfully invoked"}).send();
});

app.get('/check-cookie', (req, res) => {
    console.log(`[Back-end] '/check-cookie' endpoint invoked.`);
    console.log(`Request Cookie: ${JSON.stringify(req.cookies)}`);
    res.header({

    });
    res.status(200).send({message: "checking your cookie"});
});

app.listen(process.env.SERVER_PORT || 4500, () => {
    console.log(`Server is listening at port ${process.env.SERVER_PORT}`);
});
