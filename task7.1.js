var services = {
    haircut: "60 UAH",
    shaving: "80 UAH",
    hairWash: "100 UAH",

    price: function() {
        let total = 0;

        for (let key in this) {
            if (typeof this[key] === "string") {
                total += parseInt(this[key]);
            }
        }

        return total;
    },

    minPrice: function() {
        let prices = [];

        for (let key in this) {
            if (typeof this[key] === "string") {
                prices.push(parseInt(this[key]));
            }
        }

        return Math.min(...prices);
    },

    maxPrice: function() {
        let prices = [];

        for (let key in this) {
            if (typeof this[key] === "string") {
                prices.push(parseInt(this[key]));
            }
        }

        return Math.max(...prices);
    }
};

console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice());

services.brokenGlass = "200 UAH";

console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice());