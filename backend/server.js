const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB

const uri = 'mongodb+srv://tester123:test111@fiascluster.ghdz6o3.mongodb.net/fias-user-info?retryWrites=true&w=majority&appName=FIASCluster';
mongoose.connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a schema
const userSchema = new mongoose.Schema({
  fullname: String,
  dob: Date,
  email: String,
  password: String,
  accountNumber: Number,
});

// Create a model
const User = mongoose.model('User', userSchema);

// Define a route to handle account creation
app.post('/api/createAccount', async (req, res) => {
  const { fullname, dob, email, password, accountNumber } = req.body;
  const newUser = new User({ fullname, dob, email, password, accountNumber });
  try {
    await newUser.save();
    res.status(201).send('Account created successfully');
  } catch (error) {
    res.status(500).send('Error creating account');
  }
});

// Change the port if necessary
const port = process.env.PORT || 5002;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
