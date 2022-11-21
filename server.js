const express = require('express');
const path = require('path');
const dbRoutes = require('./db/controller/dbRoutes');
const htmlRoutes = require('./db/controller/htmlRoutes');
const fs = require('fs');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 5500;

app.use(express.static("public"));

app.use("/api", dbRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log("Server is listening on: http://localhost:" + PORT);
});
