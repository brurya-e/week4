// Have this array of array’s of neighbouring countries:
// With the use of two for loops, console log all the countries
// one by one and in your terminal. You should see something
// like this in your terminal:
// Neighbour: Canada
// Neighbour: Mexico
// Neighbour: Spain
// Neighbour: Norway
// Neighbour: Sweden
// Neighbour: Russia

const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
   ];

const print  =  listOfNeighbours =>{
    for(let row of listOfNeighbours)
        for(let country of row) 
            console.log(`Neighbour: ${country}`);
    // for(let i = 0; i< listOfNeighbours.length; i++)
    //     for (let j =0 ; j < listOfNeighbours[i].length;j++)
            // console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
}

print(listOfNeighbours);