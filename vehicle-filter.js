console.log("Vehicle Filter Script Loaded");

document.addEventListener('DOMContentLoaded', function() {
    const carMakes = [
        "Buick", "Cadillac", "Chevrolet", "Chrysler", "Dodge", "Ford", "GMC", "Jeep", "Lincoln", "Ram"
    ];

    const carData = {
        "Buick": {
            models: ["Century", "Electra", "Enclave", "Encore", "Envision", "LaCrosse", "LeSabre", "Lucerne", "Park Avenue", "Rainier", "Regal", "Rendezvous", "Riviera", "Roadmaster", "Skylark", "Verano"],
            engines: {"Century": ["3.1L V6", "3.8L V6"], "Electra": ["3.8L V6", "5.0L V8"], "Enclave": ["3.6L V6"], "Encore": ["1.4L I4"], "Envision": ["2.0L I4", "2.5L I4"], "LaCrosse": ["2.4L I4", "3.6L V6", "3.8L V6"], "LeSabre": ["3.8L V6"], "Lucerne": ["3.9L V6", "4.6L V8"], "Park Avenue": ["3.8L V6"], "Rainier": ["4.2L I6", "5.3L V8"], "Regal": ["2.0L I4", "2.4L I4", "3.8L V6"], "Rendezvous": ["3.4L V6", "3.6L V6"], "Riviera": ["3.8L V6"], "Roadmaster": ["5.7L V8"], "Skylark": ["3.1L V6"], "Verano": ["2.0L I4", "2.4L I4"]},
            transmissions: {"Century": ["4-Speed Auto"], "Electra": ["4-Speed Auto"], "Enclave": ["6-Speed Auto", "9-Speed Auto"], "Encore": ["6-Speed Auto"], "Envision": ["6-Speed Auto", "9-Speed Auto"], "LaCrosse": ["4-Speed Auto", "6-Speed Auto", "8-Speed Auto"], "LeSabre": ["4-Speed Auto"], "Lucerne": ["4-Speed Auto"], "Park Avenue": ["4-Speed Auto"], "Rainier": ["4-Speed Auto"], "Regal": ["4-Speed Auto", "6-Speed Auto", "9-Speed Auto"], "Rendezvous": ["4-Speed Auto"], "Riviera": ["4-Speed Auto"], "Roadmaster": ["4-Speed Auto"], "Skylark": ["4-Speed Auto"], "Verano": ["6-Speed Auto"]}
        },
        "Cadillac": {
            models: ["ATS", "Brougham", "CT4", "CT5", "CT6", "CTS", "DeVille", "DTS", "Eldorado", "Escalade", "Fleetwood", "Seville", "SRX", "STS", "XT4", "XT5", "XT6", "XTS"],
            engines: {"ATS": ["2.0L I4", "2.5L I4", "3.6L V6"], "Brougham": ["5.0L V8", "5.7L V8"], "CT4": ["2.0L I4", "2.7L I4"], "CT5": ["2.0L I4", "3.0L V6"], "CT6": ["2.0L I4", "3.0L V6", "4.2L V8"], "CTS": ["2.0L I4", "3.0L V6", "3.6L V6"], "DeVille": ["4.6L V8"], "DTS": ["4.6L V8"], "Eldorado": ["4.6L V8"], "Escalade": ["5.3L V8", "6.0L V8", "6.2L V8"], "Fleetwood": ["4.1L V8", "5.7L V8"], "Seville": ["4.6L V8"], "SRX": ["3.0L V6", "3.6L V6"], "STS": ["3.6L V6", "4.6L V8"], "XT4": ["2.0L I4"], "XT5": ["2.0L I4", "3.6L V6"], "XT6": ["3.6L V6"], "XTS": ["3.6L V6"]},
            transmissions: {"ATS": ["6-Speed Manual", "6-Speed Auto", "8-Speed Auto"], "Brougham": ["4-Speed Auto"], "CT4": ["8-Speed Auto", "10-Speed Auto"], "CT5": ["10-Speed Auto"], "CT6": ["8-Speed Auto", "10-Speed Auto"], "CTS": ["6-Speed Manual", "6-Speed Auto", "8-Speed Auto"], "DeVille": ["4-Speed Auto"], "DTS": ["4-Speed Auto"], "Eldorado": ["4-Speed Auto"], "Escalade": ["4-Speed Auto", "6-Speed Auto", "10-Speed Auto"], "Fleetwood": ["4-Speed Auto"], "Seville": ["4-Speed Auto"], "SRX": ["5-Speed Auto", "6-Speed Auto"], "STS": ["5-Speed Auto", "6-Speed Auto"], "XT4": ["9-Speed Auto"], "XT5": ["8-Speed Auto", "9-Speed Auto"], "XT6": ["9-Speed Auto"], "XTS": ["6-Speed Auto"]}
        },
        "Chevrolet": {
            models: ["Astro", "Blazer", "Camaro", "Caprice", "Cavalier", "Colorado", "Corvette", "Cruze", "Equinox", "Impala", "Malibu", "Monte Carlo", "Nova", "S10", "Silverado", "Suburban", "Tahoe", "TrailBlazer", "Traverse", "Trax"],
            engines: {"Astro": ["4.3L V6"], "Blazer": ["2.0L I4", "2.5L I4", "3.6L V6", "4.3L V6"], "Camaro": ["2.0L I4", "3.6L V6", "5.7L V8", "6.2L V8"], "Caprice": ["4.3L V6", "5.0L V8", "5.7L V8"], "Cavalier": ["2.2L I4"], "Colorado": ["2.5L I4", "3.6L V6", "2.8L I4 Diesel"], "Corvette": ["5.7L V8", "6.2L V8", "7.0L V8"], "Cruze": ["1.4L I4", "1.6L I4 Diesel"], "Equinox": ["1.5L I4", "2.0L I4", "2.4L I4"], "Impala": ["2.5L I4", "3.4L V6", "3.6L V6", "3.8L V6"], "Malibu": ["1.5L I4", "2.0L I4", "2.2L I4", "3.1L V6"], "Monte Carlo": ["3.4L V6", "3.8L V6"], "Nova": ["4.1L I6"], "S10": ["2.2L I4", "4.3L V6"], "Silverado": ["4.3L V6", "4.8L V8", "5.3L V8", "6.0L V8", "6.2L V8"], "Suburban": ["5.3L V8", "6.0L V8"], "Tahoe": ["4.8L V8", "5.3L V8", "6.2L V8"], "TrailBlazer": ["4.2L I6", "5.3L V8"], "Traverse": ["3.6L V6"], "Trax": ["1.4L I4"]},
            transmissions: {"Astro": ["4-Speed Auto"], "Blazer": ["4-Speed Auto", "5-Speed Manual", "9-Speed Auto"], "Camaro": ["4-Speed Auto", "6-Speed Manual", "6-Speed Auto", "8-Speed Auto", "10-Speed Auto"], "Caprice": ["4-Speed Auto"], "Cavalier": ["4-Speed Auto", "5-Speed Manual"], "Colorado": ["6-Speed Auto", "8-Speed Auto"], "Corvette": ["4-Speed Auto", "6-Speed Manual", "8-Speed Auto"], "Cruze": ["6-Speed Auto", "6-Speed Manual"], "Equinox": ["6-Speed Auto", "9-Speed Auto"], "Impala": ["4-Speed Auto", "6-Speed Auto"], "Malibu": ["4-Speed Auto", "6-Speed Auto", "CVT"], "Monte Carlo": ["4-Speed Auto"], "Nova": ["3-Speed Auto"], "S10": ["4-Speed Auto", "5-Speed Manual"], "Silverado": ["4-Speed Auto", "6-Speed Auto", "8-Speed Auto", "10-Speed Auto"], "Suburban": ["4-Speed Auto", "6-Speed Auto", "10-Speed Auto"], "Tahoe": ["4-Speed Auto", "6-Speed Auto", "10-Speed Auto"], "TrailBlazer": ["4-Speed Auto"], "Traverse": ["6-Speed Auto", "9-Speed Auto"], "Trax": ["6-Speed Auto"]}
        },
        "Chrysler": {
            models: ["200", "300", "Aspen", "Concorde", "Pacifica", "PT Cruiser", "Sebring", "Town & Country", "Voyager"],
            engines: {"200": ["2.4L I4", "3.6L V6"], "300": ["2.7L V6", "3.5L V6", "3.6L V6", "5.7L V8"], "Aspen": ["4.7L V8", "5.7L V8"], "Concorde": ["2.7L V6", "3.5L V6"], "Pacifica": ["3.5L V6", "3.6L V6", "4.0L V6"], "PT Cruiser": ["2.4L I4"], "Sebring": ["2.4L I4", "2.7L V6"], "Town & Country": ["3.3L V6", "3.6L V6", "3.8L V6"], "Voyager": ["3.3L V6", "3.6L V6"]},
            transmissions: {"200": ["4-Speed Auto", "6-Speed Auto"], "300": ["4-Speed Auto", "5-Speed Auto", "8-Speed Auto"], "Aspen": ["5-Speed Auto"], "Concorde": ["4-Speed Auto"], "Pacifica": ["4-Speed Auto", "6-Speed Auto", "9-Speed Auto"], "PT Cruiser": ["4-Speed Auto", "5-Speed Manual"], "Sebring": ["4-Speed Auto", "6-Speed Auto"], "Town & Country": ["4-Speed Auto", "6-Speed Auto"], "Voyager": ["4-Speed Auto", "9-Speed Auto"]}
        },
        "Dodge": {
            models: ["Avenger", "Caravan", "Challenger", "Charger", "Dakota", "Dart", "Durango", "Magnum", "Neon", "Nitro", "Ram", "Viper"],
            engines: {"Avenger": ["2.4L I4", "3.5L V6"], "Caravan": ["2.4L I4", "3.3L V6", "3.8L V6"], "Challenger": ["3.5L V6", "3.6L V6", "5.7L V8", "6.4L V8"], "Charger": ["2.7L V6", "3.5L V6", "3.6L V6", "5.7L V8"], "Dakota": ["3.7L V6", "4.7L V8"], "Dart": ["1.4L I4", "2.0L I4", "2.4L I4"], "Durango": ["3.6L V6", "4.7L V8", "5.7L V8"], "Magnum": ["2.7L V6", "3.5L V6", "5.7L V8"], "Neon": ["2.0L I4"], "Nitro": ["3.7L V6", "4.0L V6"], "Ram": ["3.9L V6", "5.2L V8", "5.9L V8"], "Viper": ["8.0L V10", "8.3L V10"]},
            transmissions: {"Avenger": ["4-Speed Auto", "6-Speed Auto"], "Caravan": ["4-Speed Auto", "6-Speed Auto"], "Challenger": ["5-Speed Auto", "6-Speed Manual", "8-Speed Auto"], "Charger": ["4-Speed Auto", "5-Speed Auto", "8-Speed Auto"], "Dakota": ["4-Speed Auto", "5-Speed Auto"], "Dart": ["6-Speed Manual", "6-Speed Auto"], "Durango": ["4-Speed Auto", "5-Speed Auto", "8-Speed Auto"], "Magnum": ["4-Speed Auto", "5-Speed Auto"], "Neon": ["3-Speed Auto", "5-Speed Manual"], "Nitro": ["4-Speed Auto", "5-Speed Auto"], "Ram": ["4-Speed Auto", "5-Speed Auto"], "Viper": ["6-Speed Manual"]}
        },
        "Ford": {
            models: ["Bronco", "Crown Victoria", "Edge", "Escape", "Excursion", "Expedition", "Explorer", "F-150", "Falcon", "Focus", "Fusion", "Mustang", "Ranger", "Taurus", "Thunderbird"],
            engines: {"Bronco": ["2.3L I4", "2.7L V6", "4.9L I6", "5.0L V8"], "Crown Victoria": ["4.6L V8"], "Edge": ["2.0L I4", "2.7L V6", "3.5L V6"], "Escape": ["1.5L I3", "2.0L I4", "2.5L I4"], "Excursion": ["5.4L V8", "6.8L V10"], "Expedition": ["3.5L V6", "5.4L V8"], "Explorer": ["2.3L I4", "3.0L V6", "4.0L V6"], "F-150": ["3.3L V6", "3.5L V6", "4.6L V8", "5.0L V8", "5.4L V8"], "Falcon": ["4.1L I6"], "Focus": ["1.0L I3", "2.0L I4"], "Fusion": ["1.5L I4", "2.0L I4", "2.5L I4"], "Mustang": ["2.3L I4", "3.7L V6", "4.6L V8", "5.0L V8"], "Ranger": ["2.3L I4", "3.0L V6", "4.0L V6"], "Taurus": ["3.0L V6", "3.5L V6"], "Thunderbird": ["3.9L V8", "4.6L V8"]},
            transmissions: {"Bronco": ["4-Speed Auto", "5-Speed Manual", "10-Speed Auto"], "Crown Victoria": ["4-Speed Auto"], "Edge": ["6-Speed Auto", "8-Speed Auto"], "Escape": ["4-Speed Auto", "6-Speed Auto", "8-Speed Auto"], "Excursion": ["4-Speed Auto"], "Expedition": ["4-Speed Auto", "6-Speed Auto", "10-Speed Auto"], "Explorer": ["4-Speed Auto", "5-Speed Auto", "6-Speed Auto", "10-Speed Auto"], "F-150": ["4-Speed Auto", "6-Speed Auto", "10-Speed Auto"], "Falcon": ["3-Speed Auto"], "Focus": ["5-Speed Manual", "6-Speed Auto"], "Fusion": ["6-Speed Auto"], "Mustang": ["4-Speed Auto", "5-Speed Manual", "6-Speed Manual", "6-Speed Auto", "10-Speed Auto"], "Ranger": ["4-Speed Auto", "5-Speed Auto", "10-Speed Auto"], "Taurus": ["4-Speed Auto", "6-Speed Auto"], "Thunderbird": ["4-Speed Auto", "5-Speed Auto"]}
        },
        "GMC": {
            models: ["Acadia", "Canyon", "Envoy", "Jimmy", "Savana", "Sierra", "Sonoma", "Suburban", "Terrain", "Yukon"],
            engines: {"Acadia": ["2.5L I4", "3.6L V6"], "Canyon": ["2.5L I4", "3.6L V6", "2.8L I4 Diesel"], "Envoy": ["4.2L I6", "5.3L V8"], "Jimmy": ["4.3L V6"], "Savana": ["4.3L V6", "5.3L V8", "6.0L V8"], "Sierra": ["4.3L V6", "4.8L V8", "5.3L V8", "6.0L V8", "6.2L V8"], "Sonoma": ["2.2L I4", "4.3L V6"], "Suburban": ["5.7L V8"], "Terrain": ["1.5L I4", "2.0L I4"], "Yukon": ["4.8L V8", "5.3L V8", "6.2L V8"]},
            transmissions: {"Acadia": ["6-Speed Auto", "9-Speed Auto"], "Canyon": ["6-Speed Auto", "8-Speed Auto"], "Envoy": ["4-Speed Auto"], "Jimmy": ["4-Speed Auto"], "Savana": ["4-Speed Auto", "6-Speed Auto", "8-Speed Auto"], "Sierra": ["4-Speed Auto", "6-Speed Auto", "8-Speed Auto", "10-Speed Auto"], "Sonoma": ["4-Speed Auto", "5-Speed Manual"], "Suburban": ["4-Speed Auto"], "Terrain": ["6-Speed Auto", "9-Speed Auto"], "Yukon": ["4-Speed Auto", "6-Speed Auto", "10-Speed Auto"]}
        },
        "Jeep": {
            models: ["Cherokee", "Comanche", "Commander", "Compass", "Gladiator", "Grand Cherokee", "Liberty", "Patriot", "Renegade", "Wagoneer", "Wrangler"],
            engines: {"Cherokee": ["2.4L I4", "3.2L V6", "4.0L I6"], "Comanche": ["2.5L I4", "4.0L I6"], "Commander": ["3.7L V6", "4.7L V8", "5.7L V8"], "Compass": ["2.0L I4", "2.4L I4"], "Gladiator": ["3.6L V6"], "Grand Cherokee": ["3.0L V6", "3.6L V6", "4.0L I6", "5.7L V8"], "Liberty": ["2.4L I4", "3.7L V6"], "Patriot": ["2.0L I4", "2.4L I4"], "Renegade": ["1.3L I4", "2.4L I4"], "Wagoneer": ["5.7L V8"], "Wrangler": ["2.0L I4", "3.6L V6", "4.0L I6"]},
            transmissions: {"Cherokee": ["4-Speed Auto", "5-Speed Manual", "9-Speed Auto"], "Comanche": ["4-Speed Auto", "5-Speed Manual"], "Commander": ["5-Speed Auto"], "Compass": ["5-Speed Manual", "6-Speed Auto", "9-Speed Auto"], "Gladiator": ["6-Speed Manual", "8-Speed Auto"], "Grand Cherokee": ["4-Speed Auto", "5-Speed Auto", "8-Speed Auto"], "Liberty": ["4-Speed Auto", "6-Speed Manual"], "Patriot": ["5-Speed Manual", "CVT"], "Renegade": ["6-Speed Manual", "9-Speed Auto"], "Wagoneer": ["8-Speed Auto"], "Wrangler": ["4-Speed Auto", "5-Speed Manual", "6-Speed Manual", "8-Speed Auto"]}
        },
        "Lincoln": {
            models: ["Aviator", "Continental", "Corsair", "LS", "Mark LT", "MKC", "MKS", "MKT", "MKX", "MKZ", "Navigator", "Town Car"],
            engines: {"Aviator": ["3.0L V6", "5.0L V8"], "Continental": ["2.7L V6", "3.0L V6", "4.6L V8"], "Corsair": ["2.0L I4", "2.3L I4"], "LS": ["3.0L V6", "3.9L V8"], "Mark LT": ["5.4L V8"], "MKC": ["2.0L I4", "2.3L I4"], "MKS": ["3.5L V6", "3.7L V6"], "MKT": ["3.5L V6", "3.7L V6"], "MKX": ["2.7L V6", "3.5L V6", "3.7L V6"], "MKZ": ["2.0L I4", "3.0L V6", "3.5L V6"], "Navigator": ["3.5L V6", "5.4L V8"], "Town Car": ["4.6L V8"]},
            transmissions: {"Aviator": ["4-Speed Auto", "6-Speed Auto", "10-Speed Auto"], "Continental": ["4-Speed Auto", "6-Speed Auto"], "Corsair": ["8-Speed Auto"], "LS": ["5-Speed Auto"], "Mark LT": ["4-Speed Auto"], "MKC": ["6-Speed Auto"], "MKS": ["6-Speed Auto"], "MKT": ["6-Speed Auto"], "MKX": ["6-Speed Auto"], "MKZ": ["6-Speed Auto"], "Navigator": ["4-Speed Auto", "6-Speed Auto", "10-Speed Auto"], "Town Car": ["4-Speed Auto"]}
        },
        "Ram": {
            models: ["1500", "2500", "3500", "Dakota"],
            engines: {"1500": ["3.6L V6", "3.7L V6", "4.7L V8", "5.7L V8", "5.9L V8"], "2500": ["5.7L V8", "6.4L V8", "6.7L I6 Diesel"], "3500": ["5.7L V8", "6.4L V8", "6.7L I6 Diesel"], "Dakota": ["2.5L I4", "3.9L V6", "4.7L V8"]},
            transmissions: {"1500": ["4-Speed Auto", "5-Speed Auto", "6-Speed Auto", "8-Speed Auto"], "2500": ["5-Speed Auto", "6-Speed Auto", "8-Speed Auto"], "3500": ["5-Speed Auto", "6-Speed Auto", "8-Speed Auto"], "Dakota": ["4-Speed Auto", "5-Speed Auto", "6-Speed Manual"]}
        }
    };

    const makeSelect = document.getElementById('carilVehicleFilter_make');
    const yearStartSelect = document.getElementById('carilVehicleFilter_yearStart');
    const yearEndSelect = document.getElementById('carilVehicleFilter_yearEnd');
    const modelSelect = document.getElementById('carilVehicleFilter_model');
    const engineSelect = document.getElementById('carilVehicleFilter_engine');
    const transmissionSelect = document.getElementById('carilVehicleFilter_transmission');
    const form = document.getElementById('caril-vehicle-filter-form');

    console.log('DOM Elements:', {
        makeSelect: !!makeSelect,
        yearStartSelect: !!yearStartSelect,
        yearEndSelect: !!yearEndSelect,
        modelSelect: !!modelSelect,
        engineSelect: !!engineSelect,
        transmissionSelect: !!transmissionSelect,
        form: !!form
    });

    if (!makeSelect || !yearStartSelect || !yearEndSelect || !modelSelect || !engineSelect || !transmissionSelect || !form) {
        console.error('One or more form elements not found:', {
            makeSelect: !!makeSelect,
            yearStartSelect: !!yearStartSelect,
            yearEndSelect: !!yearEndSelect,
            modelSelect: !!modelSelect,
            engineSelect: !!engineSelect,
            transmissionSelect: !!transmissionSelect,
            form: !!form
        });
        return;
    }

    // Populate Makes
    console.log('Populating makes...');
    carMakes.forEach((make, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = make;
        makeSelect.appendChild(option);
    });

    // Populate Years (1960 to 2025)
    console.log('Populating years...');
    const currentYear = new Date().getFullYear() + 1; // 2025
    for (let year = currentYear; year >= 1960; year--) {
        const twoDigitYear = String(year).slice(-2);
        const optionStart = document.createElement('option');
        const optionEnd = document.createElement('option');
        optionStart.value = year;
        optionEnd.value = year;
        optionStart.textContent = `${year} (${twoDigitYear})`;
        optionEnd.textContent = `${year} (${twoDigitYear})`;
        yearStartSelect.appendChild(optionStart);
        yearEndSelect.appendChild(optionEnd);
    }

    // Update Models based on Make
    makeSelect.addEventListener('change', function() {
        console.log('Make changed:', this.value);
        modelSelect.innerHTML = '<option value="">Select Model</option>';
        engineSelect.innerHTML = '<option value="">Select Engine</option>';
        transmissionSelect.innerHTML = '<option value="">Select Transmission</option>';
        const selectedMake = carMakes[this.value];
        if (carData[selectedMake] && carData[selectedMake].models) {
            carData[selectedMake].models.forEach(model => {
                const option = document.createElement('option');
                option.value = model;
                option.textContent = model;
                modelSelect.appendChild(option);
            });
        }
    });

    // Update Engines and Transmissions based on Model
    modelSelect.addEventListener('change', function() {
        console.log('Model changed:', this.value);
        engineSelect.innerHTML = '<option value="">Select Engine</option>';
        transmissionSelect.innerHTML = '<option value="">Select Transmission</option>';
        const selectedMake = carMakes[makeSelect.value];
        const selectedModel = this.value;
        if (carData[selectedMake] && carData[selectedMake].engines[selectedModel]) {
            carData[selectedMake].engines[selectedModel].forEach(engine => {
                const option = document.createElement('option');
                option.value = engine;
                option.textContent = engine;
                engineSelect.appendChild(option);
            });
        }
        if (carData[selectedMake] && carData[selectedMake].transmissions[selectedModel]) {
            carData[selectedMake].transmissions[selectedModel].forEach(transmission => {
                const option = document.createElement('option');
                option.value = transmission;
                option.textContent = transmission;
                transmissionSelect.appendChild(option);
            });
        }
    });

    // Form Submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const make = makeSelect.options[makeSelect.selectedIndex].text;
        const yearStart = yearStartSelect.value;
        const yearEnd = yearEndSelect.value;
        const model = modelSelect.value;
        const engine = engineSelect.value || '';
        const transmission = transmissionSelect.value || '';

        if (make && yearStart && yearEnd && model) {
            const yearRange = yearStart === yearEnd ? yearStart : `${yearStart}-${yearEnd}`;
            const query = `${yearRange} ${make} ${model}${engine ? " " + engine : ""}${transmission ? " " + transmission : ""}`;
            window.location.href = `/search.php?search_query=${encodeURIComponent(query)}`;
        } else {
            alert('Please select make, start year, end year, and model');
        }
    });
});
