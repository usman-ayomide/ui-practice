import express from "express";
import cors from "cors";
import mock from "./list.js";

const app = express();
const port = 3000;


app.use(cors({
    origin: 'http://127.0.0.1:5173'
}));

app.get("/approvals", (req, res) => {
    res.json(mock);
});

app.listen(port, () => {
    console.log(`Running on ${port}`);
});