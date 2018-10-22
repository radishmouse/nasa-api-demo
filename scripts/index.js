console.log('boop beep boop');


// ====================================== 
// Data pathfinding experiments
// ====================================== 

// This finds the minimum estimated diameter
// dummyData['near_earth_objects']['2015-09-08'][0]['estimated_diameter']["feet"]['estimated_diameter_min']

const URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-08-09&end_date=2015-08-15&api_key=${API_KEY}`;
// "mangled" version for testing the .catch
// const URL = `https://klahfkajsdhfkjashgdfjasdhgfjdsagfjasgdfjasg/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${API_KEY}`;

function extractDataForDates(asteroidData) {
    // go spelunking into the data
    let justTheData = asteroidData['near_earth_objects'];
    return justTheData;
}

// 1. expect to receive the data as an argument
function cacheResults(asteroidData) {
    console.log('saving snapshot to localStorage');
    // 3. make a snapshot
    
    // Pull the existing data, perhaps from cache
    let existingData = pullResultsFromCache();
    // Add on our new data
    let newData = {
        ...existingData,
        ...asteroidData
    };
    
    // 3a. make a JSON version of the data
    let stringVersionOfData = JSON.stringify(newData);
    // 3b. save that JSON version to localStorage
    // Then save back to localStorage
    localStorage.setItem('asteroids', stringVersionOfData);

    // 2. return the data you got as an argument
    return asteroidData;
}

function pullResultsFromCache() {
    // 1. Grab the string data from localStorage
    let cachedResults = localStorage.getItem('asteroids') || "{}";
    // 2. Convert the string to JavaScript data (object or array, etc.)
    let convertedResults = JSON.parse(cachedResults);
    // 3. Return my data
    return convertedResults;
}

function drawResultsToPage(asteroidData) {
    console.log('i got the datazzz! woot!');
    console.log(asteroidData);
}

function getAsteroidData() {
    fetch(URL) // fetch the data
        .then(r => r.json()) // convert to json
        .then(extractDataForDates)
        .then(cacheResults)// cache the results
        .catch(pullResultsFromCache)// catch any errors, returning cached info to next link in promise chain
        .then(drawResultsToPage)
    
    // draw results to screen
}

