let point = document.querySelector('.point-cost')
let parsedPoint = parseFloat(point.innerHTML)

let rotyCost = document.querySelector('.roty-Cost')
let parsedRotyCost = parseFloat(rotyCost.innerHTML)
let rotyLevel = document.querySelector('.roty-level')
let rotyIncrease = document.querySelector('.roty-increase')
let parsedRotyIncrease = parseFloat(rotyIncrease.innerHTML)

let stCost = document.querySelector('.st-Cost')
let parsedStCost = parseFloat(stCost.innerHTML)
let stLevel = document.querySelector('.st-level')
let stIncrease = document.querySelector('.st-increase')
let parsedStIncrease = parseFloat(stIncrease.innerHTML)

let asmvpCost = document.querySelector('.asmvp-Cost')
let parsedAsmvpCost = parseFloat(asmvpCost.innerHTML)
let asmvpLevel = document.querySelector('.asmvp-level')
let asmvpIncrease = document.querySelector('.asmvp-increase')
let parsedAsmvpIncrease = parseFloat(asmvpIncrease.innerHTML)

let ppsText = document.getElementById("pps-text")

let pps = 0;

function incrementPoints() {
    parsedPoint += 1;
    point.innerHTML = parsedPoint
    point.innerHTML = Math.round(point.innerHTML)
}

function buyRoty() {
    if (parsedPoint >= parsedRotyCost) {
        point.innerHTML = Math.round(parsedPoint -= parsedRotyCost);

        rotyLevel.innerHTML ++

        parsedRotyIncrease = parseFloat((parsedRotyIncrease * 1).toFixed(2))
        rotyIncrease.innerHTML = parsedRotyIncrease
        pps += parsedRotyIncrease

        parsedRotyCost *= 1.15;
        rotyCost.innerHTML = Math.round(parsedRotyCost)
        point.innerHTML = Math.round(point.innerHTML)

        
    }
}

function buySt() {
    if (parsedPoint >= parsedStCost) {
        point.innerHTML = Math.round(parsedPoint -= parsedStCost);

        stLevel.innerHTML ++

        parsedStIncrease = parseFloat((parsedStIncrease * 1).toFixed(2))
        stIncrease.innerHTML = parsedStIncrease
        pps += parsedStIncrease

        parsedStCost *= 1.15;
        stCost.innerHTML = Math.round(parsedStCost)
        point.innerHTML = Math.round(point.innerHTML)
    }
}

function buyAsmvp() {
    if (parsedPoint >= parsedAsmvpCost) {
        point.innerHTML = Math.round(parsedPoint -= parsedAsmvpCost);

        asmvpLevel.innerHTML ++

        parsedAsmvpIncrease = parseFloat((parsedAsmvpIncrease * 1).toFixed(2))
        asmvpIncrease.innerHTML = parsedAsmvpIncrease
        pps += parsedAsmvpIncrease

        parsedAsmvpCost *= 1.15;
        asmvpCost.innerHTML = Math.round(parsedAsmvpCost)
        point.innerHTML = Math.round(point.innerHTML)
    }
}

setInterval(() => {
    parsedPoint += pps / 10
    point.innerHTML = Math.round(parsedPoint)
    ppsText.innerHTML = Math.round(pps*10)/10
}, 100)