export function formatTimeH_M(minutes) {
    let hours =  Math.trunc(minutes/60)>0?(Math.trunc(minutes/60)+"ч "):""
    let minutes_ =  minutes -  Math.trunc(minutes/60)*60
    minutes_ =  minutes_>0?(minutes_+"м"):""
    return (hours+minutes_)
 }