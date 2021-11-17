// We are not getting the data as we want it. We are going to need to massage
// the data.
// Create separate functions for each questions below:
const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

// 1. Create a function that returns all the names from the array.
const onlyName = obj => {
    const names = obj.map(function (ele) {
        return ele.name;
    })
    return names;
}
// console.log(onlyName(data));

// 2. Create a function that returns all the objects that are born before 1990.

const bornYear = str => {
    let temp = str.split('-');
    return temp[2];
}

const bornBefore1990 = obj => {
    const res = [];
    obj.forEach(function (ele) {
        if (bornYear(ele.birthday) < "1990")
            res.push(ele);
    });
    return res;
}
// console.log(bornBefore1990(data));

// 3. Create a function that returns an object of all the different foods from all
// the objects as the key and the number of times that food is present in all the
// objects as the value.


const allFood = obj => {
    const food = {};
    obj.forEach(function (ele) {
        let meats =ele.favoriteFoods.meats;
        let fish =ele.favoriteFoods.fish;
        // let foods = ele.values(ele.favoriteFoods).flat();
        // console.log(food);
        // foods.forEach
        meats.forEach(function (typeFood) {
                // if (food.hasOwnProperty(typeFood))
                //     food[typeFood] += 1;
                // else
                food[typeFood] = (food[typeFood] || 0) + 1;
        })
        fish.forEach(function (typeFood) {
            food[typeFood] = (food[typeFood] || 0) + 1;
        })
    });
    return food;
}
console.log(allFood(data));
