const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const user = require('./routes/user');
const bodyParser=require("body-parser")

//initilze express.js
const app = express();
//to receive json data
app.use(express.json());
//initilze cors 
app.use(cors({
    origin: '*'
}));

//connect mongobd
mongoose.connect('mongodb+srv://yasasvipreetam:yasasvipreetam@cluster0.fvjeuvz.mongodb.net/login?retryWrites=true&w=majority').then(
    console.log("Db is connected")
);

//auth api's
app.use('/api/auth', auth);
//users api's
app.use('/api/user', user);

app.get('/',(req,res)=>{

})
const formDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    accommodationType: String,
    roomNumber: String,
    acPreference: String,
    fixedAmount: String,
  });
  
  const FormData = mongoose.model('FormData', formDataSchema);
  
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  
  // Endpoint to handle form submission
  app.post('/SubmitForm', (req, res) => {
    const formData = new FormData({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      accommodationType: req.body.accommodationType,
      roomNumber: req.body.roomNumber,
      acPreference: req.body.acPreference,
      fixedAmount: req.body.fixedAmount,
    });
  
    formData.save()
      .then(() => {
        console.log('Form data saved');
        res.json({ message: 'Form submitted successfully!' });
      })
      .catch((error) => {
        console.error('Error saving form data:', error);
        res.status(500).json({ error: 'An error occurred while saving the form data' });
      });
  });

  //complaint
  const complaintSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
  });
  
  // Define a model based on the complaint schema
  const Complaint = mongoose.model('Complaint', complaintSchema);

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  
  // Create a POST route to handle complaints
  app.post('/complaints', (req, res) => {
    // Create a new complaint object based on the request body
    const newComplaint = new Complaint({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    });
  
    // Save the complaint to the database
    newComplaint.save()
      .then((complaint) => {
        console.log('Complaint saved:', complaint);
        res.status(200).json({ message: 'Complaint submitted successfully' });
      })
      .catch((err) => {
        console.error('Error saving complaint:', err);
        res.status(500).json({ error: 'An error occurred while submitting the complaint' });
      });
  });
  

//run server
app.listen(5000, () => console.log('server is running'));