console.log("Hello Tanaya, welcome to the js master class. Let's learn js like a pro...");

let brandName = "Aurora Fashion";
let launchYear = 2026;
let premiumBrand = true;

let theme = "dark"

theme = "light"

const company = "Aurora"
company = "Nike"

// String
let brand = "Aurora Fashion"
typeof brand
let slogan = 'Luxury meets streetwear'
typeof slogan


// Number

let price = 2499
let rating = 4.8
typeof price
typeof rating

// Boolean
let inStock = true
let soldOut = false

// undefined
let discount;
console.log(discount);

// Null
let selectedProduct = null

// BigInt
let views = 999999999999999999999

// Symbol We can use Symbol to create unique identifiers for object properties
let uniqueId = Symbol('id');
console.log(uniqueId); //but we'll learn about it later'

// Arrays

let colors = ["black","white","red"]

// Objects

let product = {
    name:"Oversized Hoodie",
    price:2999
}

// Stack vs Heap   
// Imagine browser memory has two rooms.

//     Stack Memory

//         Fast.

//         Simple.

//         Stores primitives.

//     Heap Memory

//         Large.

//         Stores objects.

//         Arrays.

//         Functions.

//         Complex data.


// Primitive Example
let a = 10
let b = a

// console test

let a = 10
let b = a

b = 50

console.log(a)
console.log(b)

// Object Example
let product1 = {
    name:"Jacket"
}

  // Object goes into heap.

  // Variable stores reference.

  // Think:

  // product1 → address123

  // NOT copied.

  //   Reference copied.

  //   Both point to SAME object


      //   Console Experiment.

      // let product1 = {
      //     name:"Jacket"
      // }

      // let product2 = product1

      // product2.name = "Sneakers"

      // console.log(product1.name)
      // console.log(product2.name)

        //       Mental model:

        // STACK

        // product1 → 0x45A
        // product2 → 0x45A

        // HEAP

        // 0x45A → {name:"Sneakers"}

        // Console Deep Dive — Beginner Edition

    //         console.log()

    // Basic printing.

    // console.log("Hello Fashion Store")

          console.table()

      // AMAZING for arrays/objects.

      // Try:

      const products = [
          {name:"Hoodie",price:2999},
          {name:"Sneakers",price:4999}
      ]

      // console.table(products)

          //       typeof

          // Essential debugging tool.

          // typeof true
          // typeof []
          // typeof {}




      //           Mini Project Exercise

      // Open browser console.

      // Do this.

      const brand = "Aurora Fashion"

      let products = [
          {
              name:"Oversized Hoodie",
              price:2999,
              inStock:true
          },
          {
              name:"Leather Jacket",
              price:5999,
              inStock:false
          }
      ]

      console.table(products)

      products[1].price

      typeof products

      products[0].inStock