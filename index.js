const express = require('express');
const app = express();
const adminRouter = require('./Routes/admin_route');
const userRouter = require('./Routes/user_route');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
//connect to the database if needed 
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://delvadiyamv:mvd246@blogdata.d2h8lsr.mongodb.net/?retryWrites=true&w=majority&appName=blogdata', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err)); 

app.use('/', adminRouter);
app.use('/', userRouter);


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
}); 