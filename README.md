# Description
This library for any applications who needs a Prayer Times. using Latitude, Longitude, and Timezone (e.g UTC +7 and etc..)
The data will be appearing in 1 month.

# Installation
### Step 1
```bash
   # if you want using Https
   git clone https://github.com/pandudpn/prayer-times.git
   
   # or if you want using SSH
   git clone git@github.com:pandudpn/prayer-times.git
```
### Step 2
```bash
   npm -i --save
```

# How to Use
This is example to shown in 1 day.
```js
   const prayer = require("../libs/prayer")
   
   module.exports.prayer  = (req, res) => {
      // if u are using header
      const lat       = req.header("lat")
      const long      = req.header("long")
      const timezone  = req.header("timezone")
      const method    = req.header("method")
      
      // query
      const { date }  = req.query
      
      const prayTimes = new prayer.times(method)
      
      let dates       = new Date()
      
      if(dates != undefined) {
        dates = new Date(date)
      }
      
      const times     = prayTimes.getTimes(dates, [lat, long], timezone)
      
      res.status(200).send(times)
   }
```
