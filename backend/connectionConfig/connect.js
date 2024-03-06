<<<<<<< HEAD
const mongoose=require("mongoose")


mongoose.connect("mongodb+srv://mosmeep:Mosmee%4017@cluster0.0d6hjbd.mongodb.net/Major_Project",



)
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});
=======
mongoose.connect('mongodb://localhost:27017/payment', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
>>>>>>> 8ad86ea62112c0169735b111bda31052ad9fc059
