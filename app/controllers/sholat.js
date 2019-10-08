"use strict";

const times = require('../libs/prayer')

module.exports.prayer = (req, res, models) => {
  // header
  const lat     = req.header('x-lat')
  const long    = req.header('x-long')
  const method  = req.header('x-method')

  // query
  const {
    m,
    y,
    timezone
  } = req.query

  let month, year, timeZone

  // declrations library prayer times
  const timesPrayer = new times.time(method)

  month   = new Date().getMonth() + 1
  year    = new Date().getFullYear()
  timeZone= 7 /* GMT +7 (indonesian WIB) */

  if(m != undefined) {
    month = new Date(m).getMonth() + 1
  }

  if(y != undefined){
    year  = new Date(y).getFullYear()
  }

  if(timezone != undefined) {
    timeZone  = timezone
  }

  let lastDate  = new Date(year, month, 0).getDate()

  var day = new Array()
  for(let i = 1; i <= lastDate; i++) {
    if(i < 10) {
      i = `0${i}`
    }

    let dayPush = year + '-' + month + '-' + i
    day.push(dayPush)
  }

  const data  = new Array()
  day.forEach(days => {
    let dates = new Date(days)

    let times = timesPrayer.getTimes(dates, [lat, long], timezone)

    const pray  = new Array()
    for(const [key, val] of Object.entries(times)) {
      pray.push({
        nama: key.charAt(0).toUpperCase() + key.slice(1),
        waktu: val
      })
    }

    data.push({
      date: `${dates.getDate()} ${bulan(dates.getMonth() + 1)} ${dates.getFullYear()}`,
      jadwal: pray
    })
  })

  const response  = require('../middlewares/response').default

  response.data   = data
  res.status(200).json(response)

}

const bulan = (month) => {
  switch(month){
    case 1:
      return 'Januari'
      break;
    case 2:
      return 'Februari'
      break;
    case 3:
      return 'Maret'
      break;
    case 4:
      return 'April'
      break;
    case 5:
      return 'Mei'
      break;
    case 6:
      return 'Juni'
      break;
    case 7:
      return 'Juli'
      break;
    case 8:
      return 'Agustus'
      break;
    case 9:
      return 'September'
      break;
    case 10:
      return 'Oktober'
      break;
    case 11:
      return 'November'
      break;
    case 12:
      return 'Desember'
      break;
    default:
      return null
      break;
  } 
}
