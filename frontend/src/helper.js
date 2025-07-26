export const toggleClass = (el,className) => {
  let elem = document.querySelector(el);
  elem.classList.toggle(className);
};

export const removeClass = (el,className) => {
  let elem = document.querySelector(el);
  elem.classList.remove(className);
};

export const api_base_url = window.location.hostname === 'localhost' 
  ? "http://localhost:3000"
  : "https://your-backend-name.onrender.com";