const filter = {
    changTimeType: time => {
        if (time) {
            let oDate = new Date()
            oDate.setTime(time)
            let year = oDate.getFullYear()
            let month = oDate.getMonth() + 1
            let day = oDate.getDate()
            let hour = oDate.getHours()
            let min = oDate.getMinutes()
            let second = oDate.getSeconds()
            return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + second
        }
    }
}
export default filter