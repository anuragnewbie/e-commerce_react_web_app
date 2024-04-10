// method to sort an object by price in ascending order
const priceLowToHighSort = (productList) => {
    productList.sort((a, b) => {
        if(a.price < b.price) {
            return -1;
        }else if(a.price > b.price) {
            return 1;
        }else {
            return 0;
        }
    });

    return productList;
}

// method to sort an object by price in descending order
const priceHighToLowSort = (productList) => {
    productList.sort((a, b) => {
        if(a.price < b.price) {
            return 1;
        }else if(a.price > b.price) {
            return -1;
        }else {
            return 0;
        }
    });

    return productList;
}

module.exports = {
    priceLowToHighSort,
    priceHighToLowSort
};
