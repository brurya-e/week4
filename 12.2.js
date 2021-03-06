const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200
   }

// 1. Implement the following getCandy function:
// The function should return the candy element with the specified id.
function getCandy(candyStore, id){
    return candyStore.candies.find(ele => ele.id === id);
}

console.log(getCandy(candyStore,'as12f'));

// 2. Implement the following getPrice function:
// The function should return the price (number) of the candy with the specified
// id.
function getPrice(candyStore, id){
    return (candyStore.candies.filter(ele => ele.id === id))[0].price;
}
console.log(getPrice(candyStore,'as12f'));


// 3. Implement the following addCandy function:
// The function should add a new candy to the candy list in candyStore with a
// default amount of 1. The function will not return anything.
function addCandy(candyStore, id, name, price){
    candyStore.candies.push({name: name,
    id: id,
    price: price,
    amount: 1});
}

addCandy(candyStore, 'dsdsd', 'brurya', 100);
console.log (candyStore);

// 4. Implement the following buy function: The function should add the candy
// price to the cashRegister, and decrease the amount property of the relevant
// candy.
function buy(candyStore, id){
    candy = candyStore.candies.filter(ele => ele.id === id);
    console.log(candy);
    candy[0].amount--;
    cash = candy[0].price;
    candyStore.cashRegister +=cash;
}
buy(candyStore ,'as12f');
console.log(candyStore);