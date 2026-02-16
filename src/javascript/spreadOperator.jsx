import { useState } from "react";
//1
const [profile, setProfile] = useState({
  name: "Asha",
  contact: {
    email: "asha@gmail.com",
    phone: "9999999999"
  },
  role: "user"
});

setProfile(prev => ({
  ...prev,
  contact: {
    ...prev.contact,
    phone: "8888888888"
  }
}));
//2
const [todos, setTodos] = useState([
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Practice JS", completed: false }
]);
const newText = "Master JavaScript";

setTodos(prev => {
  const exists = prev.find(el => el.id === clickedId);

  if (!exists) return prev;

  return prev.map(item =>
    item.id === clickedId
      ? { ...item, text: newText }
      : item
  );
});

//3
const [cart, setCart] = useState([
  { id: 1, name: "Laptop", quantity: 2 },
  { id: 2, name: "Mouse", quantity: 1 }
]);




setCart(prev => {
  const item = prev.find(el => el.id === clickedId);

  if (!item) return prev; // safety

  if (item.quantity === 1) {
    return prev.filter(el => el.id !== clickedId);
  } else {
    return prev.map(el =>
      el.id === clickedId
        ? { ...el, quantity: el.quantity - 1 }
        : el
    );
  }
});

//4
const [wishlist, setWishlist] = useState([
  { id: 1, name: "Laptop" }
]);

const product = { id: 2, name: "Mouse" };

// Task 5
// You receive a product when user clicks heart icon:
// If product already exists in wishlist → remove it
// If product does NOT exist → add it
// So it behaves like a toggle.


setWishlist(prev => {
  const exists = prev.some(item => item.id === product.id);

  if (exists) {
    return prev.filter(item => item.id !== product.id);
  } else {
    return [...prev, product];
  }
});


// Task:6
// If product already exists in cart → increase quantity
// Else → add new item with quantity 1

const [cart2, setCart2] = useState([
  { id: 1, name: "Laptop", quantity: 1 }
]);




const product2 = { id: 1, name: "Laptop" };



setCart2(prev => {
  const exists = prev.some(item => item.id === product.id);

  if (exists) {
    return prev.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    return [
      ...prev,
      { ...product, quantity: 1 }
    ];
  }
});


// Task 7
// Change only city to "Chennai".
const [state, setState] = useState({
  user: {
    name: "Asha",
    address: {
      city: "Hyderabad",
      pincode: 500001
    }
  },
  theme: "light"
});


setState(prev => ({
  ...prev,
  user: {
    ...prev.user,
    address: {
      ...prev.user.address,
      city: "Chennai"
    }
  }
}));
