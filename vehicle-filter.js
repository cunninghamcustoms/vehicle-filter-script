document.addEventListener('DOMContentLoaded', function() {
    console.log("Vehicle Filter Script Loaded");

    const makes = ["Buick", "Cadillac", "Chevrolet"];
    const models = {
        "Buick": ["Enclave", "Encore", "LaCrosse"],
        "Cadillac": ["ATS", "CT4", "Escalade"],
        "Chevrolet": ["Camaro", "Silverado", "Tahoe"]
    };

    const makeSelect = document.getElementById('carilVehicleFilter_make');
    const yearSelect = document.getElementById('carilVehicleFilter_year');
    const modelSelect = document.getElementById('carilVehicleFilter_model');
    const form = document.getElementById('caril-vehicle-filter-form');

    console.log('DOM Elements:', {
        makeSelect: !!makeSelect,
        yearSelect: !!yearSelect,
        modelSelect: !!modelSelect,
        form: !!form
    });

    if (!makeSelect || !yearSelect || !modelSelect || !form) {
        console.error('One or more form elements not found');
        return;
    }

    // Populate Makes (already in HTML, but ensure consistency)
    makes.forEach(make => {
        if (!Array.from(makeSelect.options).some(opt => opt.value === make)) {
            const option = document.createElement('option');
            option.value = make;
            option.textContent = make;
            makeSelect.appendChild(option);
        }
    });

    // Update Models based on Make
    makeSelect.addEventListener('change', function() {
        console.log('Make changed:', this.value);
        modelSelect.innerHTML = '<option value="">Select Model</option>';
        const selectedMake = this.value;
        if (models[selectedMake]) {
            models[selectedMake].forEach(model => {
                const option = document.createElement('option');
                option.value = model;
                option.textContent = model;
                modelSelect.appendChild(option);
            });
        } else {
            console.log('No models found for make:', selectedMake);
        }
    });

    // Form Submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const make = makeSelect.value;
        const year = yearSelect.value;
        const model = modelSelect.value;

        if (make && year && model) {
            const query = `${year} ${make} ${model}`;
            window.location.href = `/search.php?search_query=${encodeURIComponent(query)}`;
        } else {
            alert('Please select make, year, and model');
        }
    });

    // Enforce fixed position
    const filter = document.querySelector('.caril-vehicleFilter');
    if (filter) {
        filter.style.position = 'fixed';
        filter.style.top = '0';
        filter.style.left = '0';
        filter.style.width = '100%';
        console.log('Forced position: fixed on vehicle filter');
    }
});

// Fallback in case DOMContentLoaded fires too early
setTimeout(() => {
    if (!document.querySelector('#carilVehicleFilter_make').children.length > 1) {
        console.log('Fallback: Running script after delay');
        const event = new Event('DOMContentLoaded');
        document.dispatchEvent(event);
    }
}, 1000);
