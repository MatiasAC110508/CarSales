import { httpClient } from './src/api/httpClient.js';
import { createCarCard } from './src/components/carCard.js';

const container = document.getElementById('car-container');
const refreshBtn = document.getElementById('refresh-btn');

async function render() {
    container.innerHTML = '<div class="col-span-full py-20 text-center text-slate-400 italic">Fetching latest inventory data...</div>';

    try {
        const cars = await httpClient.fetchCars();
        container.innerHTML = ''; 

        if (cars.length === 0) {
            container.innerHTML = '<p class="col-span-full text-center py-10">Inventory is empty.</p>';
            return;
        }

        cars.forEach(car => {
            container.appendChild(createCarCard(car));
        });

    } catch (error) {
        console.error("Connection Error:", error);
        container.innerHTML = '<div class="col-span-full bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg text-center font-medium">Connection failed. Please check if your Backend is running.</div>';
    }
}

refreshBtn.addEventListener('click', render);
document.addEventListener('DOMContentLoaded', render);