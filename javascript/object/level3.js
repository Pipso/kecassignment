// Q1: Create a function that takes the 'person' object as input and returns the age group based on the age.
// Age groups: 'Child' (0-12), 'Teen' (13-19), 'Adult' (20-59), 'Senior' (60 and above)
// Expected output for person1: 'Adult'
const person1 = { name: 'John', age: 30 };



function verify(person1){
  const age = person1.age
  if (age<=12){
    return 'child';
  }
  
else if(age>12 && age<=19){
  return 'teen';
}
  else if(age>19 && age<=59){
    return 'adult'
  }
else {
    return 'senior';
  }
}
verify(person1)




// Q2: Create a function that takes the 'inventory' object and returns the total number of items in stock.
// Expected output for inventory2: 23
const inventory2 = { apples: 10, bananas: 5, oranges: 8 };

function total (inventory2){
  let sum = 0
  let newArr = Object.values(inventory2)
  newArr.forEach((item)=>
                 {
    sum += item
  }
  
  )
  return sum
}
console.log(total(inventory2))



// Q3: Create a function that takes the 'students' object and returns an array of student names.
// Expected output for students3: ['Alice', 'Bob', 'Emma']
const students3 = { student1: 'Alice', student2: 'Bob', student3: 'Emma' };



function name(students3){
  const arr = Object.values(students3)
  return arr
}
console.log(name(students3))



// Q4: Create a function that takes the 'details' object and checks if all properties have values.
// Expected output for details4: true
const details4 = { name: 'John', age: 25, city: 'New York' };


function checkValue(details4){
  const check = Object.values(details4).includes(null || undefined)
  return !check
}
console.log(checkValue(details4))


//question no 5 baki xa


// Q6: Create a function that takes the 'scores' object and returns the highest score.
// Expected output for scores6: 95
const scores6 = { math: 85, science: 90, english: 95 };


function compare(scores6){
  const scoresArr= Object.values(scores6)
   const higest = Math.max(...scoresArr)
   return higest
  
}
console.log(compare(scores6))

//question 7 same as que no 5




// Q8: Create a function that takes the 'data' object and returns an array of values sorted in ascending order.
// Expected output for data8: [25, 'John', 'New York']
const data8 = { name: 'John', age: 25, city: 'New York' };

function arrange(data8){
  const arr = Object.values(data8)
  const ascending = arr.sort((a,b)=>{
    if ( typeof a === 'number' && typeof b === 'number'){
      return a - b
    }
    else ;{
      return a.toString().localeCompare(b)
    }
  })
  return ascending
}
console.log(arrange(data8))


// Q9: Create a function that takes the 'order' object and calculates the total cost based on quantity and price.
// Expected output for order9: 150
const order9 = { item: 'Laptop', quantity: 2, price: 75 };


function cost (order9){
  const totalCost = order9.quantity* order9.price
  return totalCost
  

}
console.log(cost(order9))



// Q10: Create a function that takes the 'expenses' object and returns the total amount spent.
// Expected output for expenses10: 500
const expenses10 = { rent: 200, groceries: 150, utilities: 100, entertainment: 50 };
function totalSpend(expenses10){
  const amounts = Object.values(expenses10)
  let total = 0
 for (let amount of amounts){
   total += amount
 }
  return total
}

console.log(totalSpend(expenses10))

