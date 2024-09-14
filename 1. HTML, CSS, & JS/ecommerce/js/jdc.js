import { users } from '../../database/dummy.js';


document.addEventListener('DOMContentLoaded', () => {
  // Personalization
  const biodataName = document.querySelector('#biodata-name');

  const loggedInUserEmail = localStorage.getItem('email');

  const currentUser = users.find((user) => user.email === loggedInUserEmail);
  console.log(currentUser);

  biodataName.innerText = `${currentUser.firstName} ${currentUser.lastName}`;

  // Logout Button Function
  document.querySelector('#logout-button').addEventListener('click', () => {
    window.location.href = '../login/login.html';
  })

  // Render Dashboard
  renderDashboard();
})

const fetchProducts = async (category) => {
  try {
    const url = `https://fakestoreapi.com/products/category/${category}`;
    const response = await fetch(url);

    if (!response.ok) {
      console.log(response);
      throw new Error(`Something went wrong when fetching ${url}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

const renderDashboard = async () => {
  try {
    const menClothings = await fetchProducts(`men's%20clothing`);
    const womenClothings = await fetchProducts(`women's%20clothing`);
    const electronics = await fetchProducts(`electronics`);
    const jewelry = await fetchProducts(`jewelery`);

    console.log(menClothings);
    console.log(womenClothings);
    console.log(electronics);
    console.log(jewelry);
  } catch (error) {
    console.log(error);
  }
}