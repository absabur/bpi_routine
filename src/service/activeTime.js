import shift1 from '../components/CommonPartTable/shift1'
import shift2 from '../components/CommonPartTable/shift2'

const activeTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = weekday[date.getDay()].toUpperCase();

    if (day==="FRIDAY" || day==="SATURDA") {
        return ""
    }else {
        if (hours === 8 && min < 45) {
            return shift1[1].subject
        }
        if ((hours === 8 && min >= 45 )||(hours === 9 && min < 30 )) {
            return shift1[2].subject
        }
        if ((hours === 9 && min >= 30) || (hours === 10 && min < 15 )) {
            return shift1[3].subject
        }
        if ((hours ===10 && min >= 15)) {
            return shift1[4].subject
        }
        if ((hours === 11 && min < 45) ) {
            return shift1[5].subject
        }
        if ((hours === 11 && min >= 45) || (hours === 12 && min < 30) ) {
            return shift1[6].subject
        }
        if ((hours === 12 && min >= 30) || (hours === 13 && min < 15) ) {
            return shift1[7].subject
        }

        if ((hours === 13 && min >= 30) || (hours === 14 && min < 15) ) {
            return shift2[1].subject
        }
        if ((hours === 14 && min >= 15)) {
            return shift2[2].subject
        }
        if ((hours === 15 && min < 45) ) {
            return shift2[3].subject
        }
        if ((hours ===15 && min >= 45) || (hours === 16 && min < 30) ) {
            return shift2[4].subject
        }
        if ((hours === 16 && min >= 30) || (hours === 17 && min < 15) ) {
            return shift2[5].subject
        }
        if ((hours === 17 && min >= 15)) {
            return shift2[6].subject
        }
        if ((hours === 18 && min < 45) ) {
            return shift2[7].subject
        }
    }
}

export default activeTime;