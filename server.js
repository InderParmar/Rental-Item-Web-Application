//server side implementation Fahad Ali Khan student ID 158938217
// ----------- IMPORTS AND CONFIGURATION -------- //
const express = require("express")
const app = express()
const HTTP_PORT = process.env.PORT || 8080
// static resources folder
app.use(express.static("assets"))

// accept / read form file values
app.use(express.urlencoded({extended:true}))

// import handlebars library
const exphbs = require("express-handlebars");
//setup handlebars
app.engine(".hbs", exphbs.engine({
    extname: ".hbs",
    helpers: {
        json: (context) => { return JSON.stringify(context) }
    }
  }));
  app.set("view engine", ".hbs");

  // ----------- DATA SOURCE ----------------- //

//The Items for rent must be modelled as an array of Javascript object literalls


const items = [
    {id: 1, name: "PlayStation 5 Digital Edition God of War Ragnarok Bundle", available: true, pic: "ps5.jpg"},
    {id: 2, name: "Apple iPad 10.2 64GB with Wi-Fi (9th Generation) - Space Grey", available: true, pic: "ipad.jpg"},
    {id: 3, name: "Beats by Dr. Dre Solo3 Icon On-Ear Sound Isolating Bluetooth Headphones - Matte Black", availability: true, pic: "headphones.jpg"},
    {id: 4, name: "PlayStation 5 DualSense Wireless Controller - Midnight Black", available: true, pic: "controller.jpg"},
    {id: 5, name: "JBL Flip 5 Waterproof Bluetooth Wireless Speaker - Black", available: true, pic: "speaker.jpg"},
    {id: 6, name: "Epson printer WF-2930", availability: true, pic: "printer.jpg"}
]


// ----------- ENDPOINTS ------------------ //

app.get("/", (req,res)=>{
    console.log(`[DEBUG] GET request received at / endpoint`)
    res.render("home", {layout:false, item:items})
})

app.post("/back", (req,res)=>{
    console.log(`[DEBUG] GET request received at /back endpoint`)
    res.render("homepage", {layout:false, item: items})
    //coud've used redirect but was not sure if you mentioned it in classess or not.
})

// 1 searchbox
app.post("/searchbar", (req, res) => {

})

app.post("/_Filter",(req,res) => {


})

app.post("/_return", (req,res)=>{


})

app.post("/rent" , (req,res)=>{


})

//----------------ENDPOINTS-----------------//
// ----------- STARTING SERVER ------------------ //
const onHttpStart = () => {
    console.log("Express http server listening on: " + HTTP_PORT);
    console.log(`http://localhost:${HTTP_PORT}`);
   }
   app.listen(HTTP_PORT, onHttpStart);