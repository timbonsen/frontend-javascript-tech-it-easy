// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

let typesOfTvs = inventory.map((televisions) => {
  return televisions.type
})

/*console.log(typesOfTvs)*/

let soldOutTvs = inventory.filter((televisions) => {
  if (televisions.sold === televisions.originalStock) {
    return true
  } else {
    return false
  }
})

/*console.log(soldOutTvs)*/

let ambilightTvs = inventory.filter((televisions) => {
  if (televisions.options.ambiLight === true) {
    return true
  } else {
    return false
  }
})

/*console.log(ambilightTvs)*/

function priceLowToHigh(inventory) {
  inventory.sort((a, b) => {
    return a.price - b.price
  })
}

/*priceLowToHigh(inventory)
console.log(inventory)*/

function leftToSell(inventory) {
  let leftToSell = 0;
  const leftToSellArray = inventory.map((television) => {
    return television.originalStock - television.sold;
  })
  for (let i = 0; i < leftToSellArray.length; i++) {
    leftToSell = leftToSell + leftToSellArray[i]
  }
  return leftToSell
}

const tvsToSell = document.getElementById("leftToSell")
tvsToSell.textContent = `Nog te verkopen: ${leftToSell(inventory)} stuks`
/*console.log(leftToSell(inventory))*/

function targetRevenue(inventory) {
  let totalRevenue = 0
  let revenueArray = inventory.map((a) => {
    return a.price * a.originalStock
  })
  for (let i = 0; i < revenueArray.length; i++) {
    totalRevenue = totalRevenue + revenueArray[i]
  }
  return totalRevenue
}
 const totalRevenue = document.getElementById("targetRevenue")
totalRevenue.textContent = `Verwachte totale omzet: €${targetRevenue(inventory)}`
/*console.log(targetRevenue(inventory))*/

function currentRevenue(inventory) {
  let currentRevenue = 0
  let revenueArray = inventory.map((a) => {
    return a.price * a.sold;
  })
  for (let i = 0; i < revenueArray.length; i++) {
    currentRevenue = currentRevenue + revenueArray[i]
  }
  return currentRevenue
}
const revenueToDate = document.getElementById("revenueToDate")
revenueToDate.textContent = `Huidige omzet: €${currentRevenue(inventory)}`
/*console.log(currentRevenue(inventory))*/

const televisionType1 = inventory[0].type
const televisionType2 = inventory[2].type

const televisionList = document.getElementById("televisionList")
/*const televisionListItem1 = document.createElement("li")
const televisionListItem2 = document.createElement("li")
televisionListItem1.textContent = `${televisionType1}`
televisionListItem2.textContent = `${televisionType2}`
televisionList.appendChild(televisionListItem1)
televisionList.appendChild(televisionListItem2)*/

function showTvNameTag(television) {
  return television.brand + " " + television.type + " - " + television.name
}

/*console.log(showTvNameTag(inventory[0]))*/

function showPrice(television) {
  return "€" + television.price + ",-"
}

/*console.log(showPrice(inventory[0]))*/

function showScreenSizes(availableSizes) {
  let sizesString = ''
  for (let i = 0; i < availableSizes.length; i++) {
    if (i === availableSizes.length - 1) {
      sizesString = sizesString + availableSizes[i] + " inch (" + (availableSizes[i] * 2.54) + " cm)"
    } else {
      sizesString = sizesString + availableSizes[i] + " inch (" + (availableSizes[i] * 2.54) + " cm) | "
    }
  }
  return sizesString
}

/*console.log(showScreenSizes(inventory[0].availableSizes))*/

function createTelevisionParagraph(textLine) {
  const createParagraph = document.createElement("p")
  createParagraph.setAttribute("id", "tvItem")
  createParagraph.textContent = `${textLine}`
  return createParagraph
}

function printSingleTelevision(television) {
  const container = document.createElement("div")
  container.setAttribute("id", "televisionContainer")
  televisionList.appendChild(container)
  container.appendChild(createTelevisionParagraph(showTvNameTag(television)))
  container.appendChild(createTelevisionParagraph(showPrice(television)))
  container.appendChild(createTelevisionParagraph(showScreenSizes(television.availableSizes)))
}

/*console.log(printSingleTelevision(inventory[0]))*/

function printAllTvs(inventory) {
  for (let i = 0; i < inventory.length; i++) {
    let a = printSingleTelevision(inventory[i])
  }
}

printAllTvs(inventory)
