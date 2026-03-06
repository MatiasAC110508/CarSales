export const httpClient = {
    async fetchCars() {
        try {
            const response = await fetch('/api/cars');
            
            if (!response.ok) {
                throw new Error('HTTP Error: ' + response.status);
            }
            
            return await response.json();
        } catch (error) {
            console.error("Fetch failure:", error);
            throw error;
        }
    }
};