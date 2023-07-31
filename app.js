// var panel= document.querySelectorAll('.panel')
// var active= document.querySelectorAll('.active')
// var button= document.querySelectorAll('.btn')
// // console.log(panel[0])
// panel.forEach((panel) =>{
//     // console.log(panel)
//     panel.addEventListener('click',() => {
//         panel.classList.replace('panel','active')
//         // document.querySelectorAll('.active')
//         // var img = document.createElement("img");
//         // img.src = './back.png';
//         // var block = document.querySelectorAll('.active');
//         // block.appendChild(img);
//         // var x = document.createElement("IMG");
//         // x.setAttribute("src", "back.png");
//         // x.setAttribute("width", "304");
//         // x.setAttribute("height", "228");
//         // x.setAttribute("alt", "The Pulpit Rock");
//         // document.body.appendChild(x);
//         // console.log(123)
//         button[0].style.visibility = "visible";
//         button[0].addEventListener('click', () => {
//             panel.classList.replace('active','panel')
//             button[0].style.visibility = "hidden";
            
//         })
        
//     })
//     if (panel.classList.contains('active')) {
//         button[0].style.visibility = "visible";
//     }
// })

// active.forEach((active) =>{
//     active.addEventListener('click', () =>{
//         // console.log(123)
//         active.classList.replace('active','panel')
        
//     })
// })
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 8000;


// FOR EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 

// ENDPOINTS
app.get('/', (req, res)=>{
    // const con = "This is the best content on the internet so far so use it wisely"
    // const params = 
    res.status(200).render('home.pug');
})
app.get('/philosophy', (req, res)=>{
    // const con = "This is the best content on the internet so far so use it wisely"
    // const params = 
    res.status(200).render('philosophy.pug');
})
app.get('/photography', (req, res)=>{
    // const con = "This is the best content on the internet so far so use it wisely"
    // const params = 
    // res.sendfile(path.join(__dirname,'/views/photography.html'))
    res.status(200).render('photography.pug');
})
app.get('/books', (req, res)=>{
    // const con = "This is the best content on the internet so far so use it wisely"
    // const params = 
    // res.sendfile(path.join(__dirname,'/views/photography.html'))
    res.status(200).render('books.pug');
})






// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port http://localhost:${port}`);
});