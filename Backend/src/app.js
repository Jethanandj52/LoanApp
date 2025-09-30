require('dotenv').config();
const express= require('express')
const {dbConnected} = require('./config/dataBase')
const {routes} = require('./routes/authApi')
 
 
const cookieParser= require('cookie-parser')
const cors= require('cors');
const loanRouter = require('./routes/loansApi');
const guarantorRouter = require('./routes/guarantorApi');
const appointmentRouter = require('./routes/appoinmentApi'); 
 


const app= express()

const port= process.env.PORT
app.use(express.json());
app.use(cookieParser()); 
app.use(cors({
  origin: "http://localhost:3000", // ✅ exact frontend URL
  credentials: true               // ✅ allow cookies, headers, etc.
}));

app.use('/auth',routes)
app.use('/loan',loanRouter)
app.use('/guarantor',guarantorRouter)
 // sahi path check karo
app.use('/appointments', appointmentRouter);  

 

dbConnected()
    .then(() => console.log("Connected to database successfully"))
    .catch(err => console.error("Could not connect to database", err));



app.listen(port || 3000,()=>{
    console.log("welcom",port);
    
})

 
