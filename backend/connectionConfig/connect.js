const mongoose=require("mongoose")


mongoose.connect("mongodb+srv://mosmeep:Mosmee%4017@cluster0.0d6hjbd.mongodb.net/Major_Project",



)
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});