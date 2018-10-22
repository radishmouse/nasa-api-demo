console.log('boop beep boop');


// ====================================== 
// Data pathfinding experiments
// ====================================== 

// This finds the minimum estimated diameter
// dummyData['near_earth_objects']['2015-09-08'][0]['estimated_diameter']["feet"]['estimated_diameter_min']

const URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${API_KEY}`;

// 1. expect to receive the data as an argument
function cacheResults(asteroidData) {
    console.log('saving snapshot to localStorage');
    // 3. make a snapshot
    // 3a. make a JSON version of the data
    let stringVersionOfData = JSON.stringify(asteroidData);
    // 3b. save that JSON version to localStorage
    localStorage.setItem('asteroids', stringVersionOfData);

    // 2. return the data you got as an argument
    return asteroidData;
}

function pullResultsFromCache() {

}

function getAsteroidData() {
    fetch(URL) // fetch the data
        .then(r => r.json()) // convert to json
        .then(cacheResults)// cache the results
    // catch any errors, returning cached info to next link in promise chain
    // draw results to screen
}

