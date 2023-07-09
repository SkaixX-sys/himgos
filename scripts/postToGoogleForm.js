// Импортируем библиотеку Axios
import axios from 'axios';

// Получаем ссылки на поля Google Forms из переменных окружения
const API_URL = import.meta.env.VITE_REACT_CALLBACK_FORM_API_URL;
const NAME_API_URL = import.meta.env.VITE_REACT_CALLBACK_NAME_API_URL;
const PHONE_API_URL = import.meta.env.VITE_REACT_CALLBACK_PHONE_API_URL;

// Получаем ссылку на форму на странице
const form = document.querySelector('.feedback__form');

// Добавляем обработчик события на отправку формы
form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Отменяем стандартное поведение формы

  // Получаем значения полей формы
  const name = document.getElementById('full_name').value;
  const phone = document.getElementById('phone_number').value;

  // Отправляем данные формы на сервер Google Forms
  try {
    await axios.post(API_URL, new URLSearchParams({
      [NAME_API_URL]: name,
      [PHONE_API_URL]: phone,
    }));
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
  } catch (error) {
    alert('Данные приняты на обработку');
    feedbackModalHandle()
  }
});