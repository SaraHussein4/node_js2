const express = require('express')
const app = express()

const port = process.env.PORT || 3003
  
            
const path = require ("path")
const publicDirectory =  path.join(__dirname , '../public')
app.use (express.static (publicDirectory))

app.set('view engine', 'hbs');

  const viewsDirectory = path.join (__dirname , "../temp1/views" )
  app.set( "views" , viewsDirectory)



  var hbs = require ('hbs')

  const partialsPath = path.join (__dirname , "../temp1/partials")

  hbs.registerPartials(partialsPath)



app.get('/' , (req , res) => {
    res.render('index' , {
        title: "HOME",
        desc : "This is home page"
    })
})


app.get('/weather', (req, res) => {
    const weatherData = {
      title: "Weather",
      country: 'Egypt',
      latitude: '26.820553',
      longitude: ', 30.802498',
      currentWeather: 'Sunny',
      temperature: '25°C',
    };
  
    res.render('weather', { weatherData });
  });

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

