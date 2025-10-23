const getAllBtn = document.getElementById('getAllBtn');
const getByIdBtn = document.getElementById('getByIdBtn');
const carIdInput = document.getElementById('carIdInput');
const resultDiv = document.getElementById('result');

const API_URL = 'http://localhost:9000/cars'; // adjust port if needed

// Get All Cars
getAllBtn.addEventListener('click', async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    displayCars(data);
  } catch (err) {
    resultDiv.innerHTML = 'Error fetching cars';
  }
});

// Get Car By ID
getByIdBtn.addEventListener('click', async () => {
  const id = carIdInput.value;
  if (!id) {
    resultDiv.innerHTML = 'Please enter a car ID';
    return;
  }

  try {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error('Car not found');
    const data = await res.json();
    displayCars([data]);
  } catch (err) {
    resultDiv.innerHTML = 'Error fetching car';
  }
});

// Helper function to display cars
function displayCars(cars) {
  if (!cars || cars.length === 0) {
    resultDiv.innerHTML = 'No cars found';
    return;
  }
  resultDiv.innerHTML = '';
  cars.forEach(car => {
    const carDiv = document.createElement('div');
    carDiv.classList.add('car-item');
    carDiv.innerHTML = `
      <strong>Mark:</strong> ${car.mark} <br>
      <strong>Model:</strong> ${car.model} <br>
      <strong>Age:</strong> ${car.age} <br>
      <strong>Cost:</strong> ${car.cost}
    `;
    resultDiv.appendChild(carDiv);
  });
}
