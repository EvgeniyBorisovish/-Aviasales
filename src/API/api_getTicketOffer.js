export function getStartStopTime(dateString,minutes){
    minutes = Number(minutes)
    const date_ = new Date(dateString)
    const hourStart = String(date_.getHours()).padStart(2,"0")
    const MinutesStart = String(date_.getMinutes()).padStart(2,"0")
  
    date_.setMinutes( date_.getMinutes() + minutes )
   
    const MinutesFinish = String(date_.getMinutes()).padStart(2,"0")
    const hourFinish = String(date_.getHours()).padStart(2,"0")
    
    return (`${hourStart}:${MinutesStart} - ${hourFinish}:${MinutesFinish}`)
  }
  
  export function getDurationString(duration){
    duration = Number(duration)
    const hours = Math.trunc(duration/60)===0?"":(`${Math.trunc(duration/60)}ч `)
    let minutes = duration - Math.trunc(duration/60)*60
    minutes = minutes===0?"":(`${String(minutes).padStart(2,"0")}м`)
    return (`${hours}${minutes}`)
  }
  
  export function getCaptionStop(countStops,filterStops=false){

    countStops = Number(countStops)

    if (countStops===0 && filterStops===true){return "без пересадок"}

    if (countStops===0){return ""}
    if (countStops===1){return " 1 пересадка "}
    else if (countStops>=2 && countStops<=4){return countStops + "  пересадки "}
    else if (countStops>=5 && countStops<=20){return countStops + "  пересадок "}
    else {
      return countStops+" пересад."
    }
  }
  