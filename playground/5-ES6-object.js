//object property shorthand
const name = 'Andrew'
const age = 31
const user = {
    name,
    age,
    location: 'Allahabad'
}
console.log(user)

// //object destructuring
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}


// const {label:prodLabel, stock, rating = 5} = product
// console.log(rating)

const transaction = (type, myProduct = {}) => {
 const {label:prodLabel} = myProduct 
 console.log(prodLabel)
}

transaction('order')