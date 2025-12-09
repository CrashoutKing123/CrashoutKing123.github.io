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

let omCost = document.querySelector('.om-Cost')
let parsedOmCost = parseFloat(omCost.innerHTML)
let omLevel = document.querySelector('.om-level')
let omIncrease = document.querySelector('.om-increase')
let parsedOmIncrease = parseFloat(omIncrease.innerHTML)

let mvpCost = document.querySelector('.mvp-Cost')
let parsedMvpCost = parseFloat(mvpCost.innerHTML)
let mvpLevel = document.querySelector('.mvp-level')
let mvpIncrease = document.querySelector('.mvp-increase')
let parsedMvpIncrease = parseFloat(mvpIncrease.innerHTML)

let chipCost = document.querySelector('.chip-Cost')
let parsedChipCost = parseFloat(chipCost.innerHTML)
let chipLevel = document.querySelector('.chip-level')
let chipIncrease = document.querySelector('.chip-increase')
let parsedChipIncrease = parseFloat(chipIncrease.innerHTML)

let fmvpCost = document.querySelector('.fmvp-Cost')
let parsedFmvpCost = parseFloat(chipCost.innerHTML)
let fmvpLevel = document.querySelector('.fmvp-level')
let fmvpIncrease = document.querySelector('.fmvp-increase')
let parsedFmvpIncrease = parseFloat(fmvpIncrease.innerHTML)

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

function buyOm() {
    if (parsedPoint >= parsedOmCost) {
        point.innerHTML = Math.round(parsedPoint -= parsedOmCost);

        omLevel.innerHTML ++

        parsedOmIncrease = parseFloat((parsedOmIncrease * 1).toFixed(2))
        omIncrease.innerHTML = parsedOmIncrease
        pps += parsedOmIncrease

        parsedOmCost *= 1.15;
        omCost.innerHTML = Math.round(parsedOmCost)
        point.innerHTML = Math.round(point.innerHTML)
    }
}

function buyMvp() {
    if (parsedPoint >= parsedMvpCost) {
        point.innerHTML = Math.round(parsedPoint -= parsedMvpCost);

        mvpLevel.innerHTML ++

        parsedMvpIncrease = parseFloat((parsedMvpIncrease * 1).toFixed(2))
        mvpIncrease.innerHTML = parsedMvpIncrease
        pps += parsedMvpIncrease

        parsedMvpCost *= 1.15;
        mvpCost.innerHTML = Math.round(parsedMvpCost)
        point.innerHTML = Math.round(point.innerHTML)
    }
}

function buyChip() {
    if (parsedPoint >= parsedChipCost) {
        point.innerHTML = Math.round(parsedPoint -= parsedChipCost);

        chipLevel.innerHTML ++

        parsedChipIncrease = parseFloat((parsedChipIncrease * 1).toFixed(2))
        chipIncrease.innerHTML = parsedChipIncrease
        pps += parsedChipIncrease

        parsedChipCost *= 1.15;
        chipCost.innerHTML = Math.round(parsedChipCost)
        point.innerHTML = Math.round(point.innerHTML)
    }
}

function buyFmvp() {
    if (parsedPoint >= parsedFmvpCost) {
        point.innerHTML = Math.round(parsedPoint -= parsedFmvpCost);

        fmvpLevel.innerHTML ++

        parsedFmvpIncrease = parseFloat((parsedFmvpIncrease * 1).toFixed(2))
        fmvpIncrease.innerHTML = parsedFmvpIncrease
        pps += parsedFmvpIncrease

        parsedFmvpCost *= 1.15;
        fmvpCost.innerHTML = Math.round(parsedFmvpCost)
        point.innerHTML = Math.round(point.innerHTML)
    }
}

resetButton.addEventListener('click', () => {
    parsedPoint = 0
    pps = 0
    rotyCost = 15
    stCost = 100
    asmvpCost = 1100
    omCost = 12000
    mvpCost = 130000
    chipCost = 1400000
    fmvpCost = 20000000
    rotyLevel = 0
    stLevel = 0
    asmvpLevel = 0
    omLevel = 0
    mvpLevel = 0
    chipLevel = 0
    fmvpLevel = 0
});

setInterval(() => {
    parsedPoint += pps / 125
    point.innerHTML = Math.round(parsedPoint)
    ppsText.innerHTML = Math.round(pps*10)/10
}, 1)