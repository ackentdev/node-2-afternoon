const express = require("express");
const app = express();
const port = 3001;
const mc = require('./controllers/messages_controller');

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

