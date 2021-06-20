const request =require('request')
const forecast=(latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=cbe035fa33a546b70ce025e5fb771d0d&query='+ latitude +','+ longitude +''

    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to weather service',undefined)

        }else if(body.error){
            callback('Unable to find location',undefined)
        }else{
          
            callback(undefined,body.current.weather_descriptions[0] +
            '. Its is Currently ' +
            body.current.temperature +
            ' degrees out. it feels like ' +
            body.current.feelslike +  
            ' degrees. The humitdity is '+body.current.humidity+ "% with wind speed "+body.current.wind_speed+" and Direction "+body.current.wind_dir)
        }
    })
}

module.exports=forecast