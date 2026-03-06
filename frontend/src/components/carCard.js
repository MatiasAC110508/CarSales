export function createCarCard(car) {
    const card = document.createElement('div');
    card.className = "bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow";
    
    card.innerHTML = `
        <div class="flex justify-between items-start mb-4">
            <h3 class="text-xl font-bold text-slate-800">${car.make} ${car.model}</h3>
            <span class="bg-indigo-100 text-indigo-700 text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                ${car.unique_plate}
            </span>
        </div>
        <div class="space-y-2 text-sm">
            <p class="flex justify-between">
                <span class="text-slate-500 font-medium">Color:</span>
                <span class="text-slate-900">${car.color}</span>
            </p>
            <p class="flex justify-between border-t pt-2">
                <span class="text-slate-500 font-medium">Mileage:</span>
                <span class="text-slate-900 font-mono">${car.mileage.toLocaleString()} km</span>
            </p>
        </div>
    `;
    
    return card;
}