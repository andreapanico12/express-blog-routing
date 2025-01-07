const express = require('express');
const app = express();
const router = require('./routers/posts')
const port = 3002;



app.use(express.json());

app.use(`/imgs`, express.static(`public/imgs`));

app.use(`/posts`,router);


app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`)
})