//importing required packages,
const express = require('express');
const axios = require('axios');
const cors = require('cors');
//creating the express app
const app = express();
//here im first checking for a port number provided by host
//then if false i'm using default 3002 as a backup to run locally.
const PORT = process.env.PORT || 3002;
app.use(cors()); //enabling CORS

//Here I'm creating an API endpoint in my server that
//listens for incoming requests for country data.
//When a request is made, the server will fetch the
//data from the external API and send it back to the client.
app.get('/country-info/:countryName', async (req, res) => {
  try {
    //get country name from the request URL
    const countryName = req.params.countryName;
    //i am getting the name of a country because
    //i want the information of that specific country.

    //Actually fetching the country data from the API
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}`
    );

    //Sending the country data back to client
    res.json(response.data);
  } catch (error) {
    //console.error('error on line 32(fetching country info)', error);
    //sends error 500(it lets client know its a server side error)
    res.status(500).json({ message: 'Error fetching country information' });
  }
});

//lets developer know that the server ran successfully
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
module.exports = app; //export the app
