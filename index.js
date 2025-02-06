const express = require('express');
// const { resolve } = require('path');
const connect = require('./dataBase')
const menuschemas = require('./schema')
const app = express();
const port = 3010;


connect();
app.use(express.json())

// app.get('/', (req, res) => {
//   res.sendFile(resolve(__dirname, 'pages/index.html'));
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.put('/menu', async (req, res) => {
  try {
    const {id} = req.query;
    const { name, description, price } = req.body;
 
    console.log(id)
    const item = await menuschemas.findById(id);
   

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
  
    console.log(item.name)
    if (name) {
      item.name = name;
    }
    if (description){
      item.description = description;
    } 
    if (price){
       item.price = price;
    }

    await item.save();
    res.json({ message: "Item updated successfully", item });

  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.delete('/menu/:id', async (req, res) => {
  try {
    const { id } = req.params;



    const item = await menuschemas.findByIdAndDelete(id);

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.json({ message: "Item deleted successfully", item });

  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});