var services = {
    haircut: "60 UAH",
    shaving: "80 UAH",
    hairWash: "100 UAH",

    price: function() {
        return parseInt(services.haircut) +
               parseInt(services.shaving) +
               parseInt(services.hairWash);
    },

    minPrice: function() {
        return Math.min(
            parseInt(services.haircut),
            parseInt(services.shaving),
            parseInt(services.hairWash)
        );
    },

    maxPrice: function() {
        return Math.max(
            parseInt(services.haircut),
            parseInt(services.shaving),
            parseInt(services.hairWash)
        );
    }
};

console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice());