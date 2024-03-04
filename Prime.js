let isPrime = (num) => {
    num = parseInt(num)
    let prm = true
    for (let index = 2; index < parseInt(num); index++) {
        if (parseInt(num)%index == 0) {
            prm = false
        }
        
    }
    if (parseInt(num) <= 1)
    {
        prm = false
    }
    return prm

}

module.exports = isPrime