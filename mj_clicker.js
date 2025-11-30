let point = document.querySelector('.point-cost')
let parsedPoint = parseFloat(point.innerHTML)

let clickerCost = document.querySelector('.clicker-cost')
let parsedClickerCost = parseFloat(clickerCost.innerHTML)

function incrementPoints() {
    parsedPoint += 1
    point.innerHTML = parsedPoint
}

function buyClick() {
    if (parsedPoint >= parsedClickerCost) {
        parsedPoint -= parsedClickerCost
        point.innerHTML = parsedPoint
    }
}