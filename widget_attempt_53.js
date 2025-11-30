let point = document.querySelector('.point-cost')
let parsedPoint = parseFloat(point.innerHTML)

let rotyCost = document.querySelector('.roty-Cost')
let parsedRotyCost = parseFloat(rotyCost.innerHTML)

function incrementPoints() {
    parsedPoint += 1
    point.innerHTML = parsedPoint
}

function buyRoty() {
    if (parsedPoint >= parsedRotyCost) {
        parsedPoint -= parsedRotyCost
        point.innerHTML = parsedPoint
    }
}