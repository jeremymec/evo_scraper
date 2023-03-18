const evoData = {trips: []}

const evoToJsonData = () => { 
    const scrollContainer = document.getElementsByClassName("infinite-scroll-component jss48").item(0);
    for (trip of scrollContainer.children) {
        const tripData = {}
        const items = trip.getElementsByClassName("MuiTypography-root MuiTypography-body1 MuiTypography-colorPrimary")
        if (items.length !== 8) { continue; }
        tripData["startDate"] = items.item(0).textContent
        tripData["duration"] = items.item(1).textContent
        tripData["cost"] = items.item(2).textContent
        tripData["registration"] = items.item(3).textContent
        tripData["distance"] = items.item(4).textContent
        tripData["pdfLink"] = trip.getElementsByClassName("MuiButton-containedPrimary").item(0).href
        evoData.trips.push(tripData)
    }
}

evoToJsonData()
console.log(JSON.stringify(evoData))