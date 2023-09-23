import express from 'express'

/** import controllers */
import view from './Controller/user/view.mjs';
import list from './Controller/user/list.mjs';
import create from './Controller/user/create.mjs';


const app = express();
const PORT = 8000;



app.use(express.json())

app.get('/user',list)

app.get('/user/:id', view)

app.post('/user',create)

app.listen(PORT, () => {
    console.log(`server is running on port  ${PORT}`);
})