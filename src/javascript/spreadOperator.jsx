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
