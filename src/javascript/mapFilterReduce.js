// 1) Total Revenue from Completed Orders

const orders = [
  { id: 1, amount: 250, status: "completed" },
  { id: 2, amount: 400, status: "pending" },
  { id: 3, amount: 150, status: "completed" },
  { id: 4, amount: 300, status: "cancelled" },
  { id: 5, amount: 500, status: "completed" },
];



const totalRevenue = orders
  .filter(order => order.status === "completed")
  .reduce((acc, order) => acc + order.amount, 0);

console.log(totalRevenue); // 900

//  2) Students With Average ≥ 75
const students = [
  { id: 1, name: "Anu", marks: [80, 90, 70] },
  { id: 2, name: "Ravi", marks: [60, 50, 40] },
  { id: 3, name: "Kiran", marks: [100, 95, 98] },
  { id: 4, name: "Leela", marks: [30, 45, 50] }
];


// Return names of students whose average marks ≥ 75.

const topStudents = students
  .filter(student => {
    const total = student.marks.reduce((acc, mark) => acc + mark, 0);
    const avg = total / student.marks.length;
    return avg >= 75;
  })
  .map(student => student.name);

console.log(topStudents); // ["Anu", "Kiran"]

// 3) Group Items by Category (Dynamic)
// Question
const products = [
  { id: 1, name: "Laptop", category: "electronics" },
  { id: 2, name: "Shirt", category: "clothing" },
  { id: 3, name: "Phone", category: "electronics" },
  { id: 4, name: "Jeans", category: "clothing" },
  { id: 5, name: "Book", category: "stationery" }
];


// Return:

// {
//   electronics: ["Laptop", "Phone"],
//   clothing: ["Shirt", "Jeans"],
//   stationery: ["Book"]
// }

// Solution
const grouped = products.reduce((acc, item) => {
  if (!acc[item.category]) {
    acc[item.category] = [];
  }

  acc[item.category].push(item.name);

  return acc;
}, {});

console.log(grouped);

// 4) Net Balance Per User (Dynamic)
const transactions = [
  { user: "A", type: "credit", amount: 100 },
  { user: "A", type: "debit", amount: 50 },
  { user: "B", type: "credit", amount: 200 },
  { user: "A", type: "credit", amount: 70 },
  { user: "B", type: "debit", amount: 30 }
];


// Return:

// {
//   A: 120,
//   B: 170
// }

const balances = transactions.reduce((acc, item) => {
  acc[item.user] = (acc[item.user] || 0) +
    (item.type === "credit" ? item.amount : -item.amount);

  return acc;
}, {});

console.log(balances);


//  5) Add Subtotal to Cart Items
Question
const cart = [
  { id: 1, name: "Laptop", price: 50000, quantity: 1 },
  { id: 2, name: "Mouse", price: 1000, quantity: 2 },
  { id: 3, name: "Keyboard", price: 2000, quantity: 1 },
];



const updatedCart = cart.map(item => ({
  ...item,
  subtotal: item.price * item.quantity
}));


