// Vehicle History Data
const vehicleHistoryData = {
    camry: {
        name: 'Toyota Camry',
        history: [
            {
                year: '1982',
                title: 'Birth of a Legend',
                description: 'The Toyota Camry was first introduced as a compact car, marking the beginning of an automotive icon that would dominate the sedan market for decades.'
            },
            {
                year: '1991',
                title: 'American Manufacturing',
                description: 'Production began in Georgetown, Kentucky, making the Camry a truly American-made vehicle and the best-selling car in America for years to come.'
            },
            {
                year: '2007',
                title: 'Hybrid Innovation',
                description: 'Toyota introduced the Camry Hybrid, combining efficiency with performance, achieving over 40 MPG and setting new standards for eco-friendly sedans.'
            },
            {
                year: '2018',
                title: 'TNGA Platform Revolution',
                description: 'Built on the Toyota New Global Architecture, the Camry received a complete redesign with improved handling, safety, and a bold, aggressive styling.'
            },
            {
                year: '2025',
                title: 'Modern Excellence',
                description: 'The latest Camry continues its legacy with advanced safety features, cutting-edge technology, and refined luxury that defines the modern sedan experience.'
            }
        ]
    },
    rav4: {
        name: 'Toyota RAV4',
        history: [
            {
                year: '1994',
                title: 'Creating a New Category',
                description: 'The RAV4 pioneered the compact crossover SUV segment, offering the versatility of an SUV with the efficiency of a car, revolutionizing urban mobility.'
            },
            {
                year: '2000',
                title: 'Global Expansion',
                description: 'The second generation brought all-wheel drive as standard in many markets, cementing the RAV4 as the go-to vehicle for adventure seekers worldwide.'
            },
            {
                year: '2013',
                title: 'Fourth Generation Redesign',
                description: 'A complete transformation with a more rugged design, improved fuel economy, and enhanced safety features made it America\'s favorite SUV.'
            },
            {
                year: '2019',
                title: 'Adventure-Ready',
                description: 'Introduction of the TRD Off-Road and Adventure trims brought serious off-road capability, while the RAV4 Prime plug-in hybrid delivered 302 horsepower.'
            },
            {
                year: '2025',
                title: 'Best-Selling SUV',
                description: 'The RAV4 continues to dominate as the world\'s best-selling SUV, offering unmatched reliability, advanced tech, and hybrid efficiency for every lifestyle.'
            }
        ]
    },
    supra: {
        name: 'Toyota Supra',
        history: [
            {
                year: '1978',
                title: 'The Celica Supra Era',
                description: 'Born as the Celica Supra, Toyota\'s grand touring sports car featured a powerful inline-six engine and luxury appointments that set it apart from the competition.'
            },
            {
                year: '1993',
                title: 'Legendary Fourth Generation',
                description: 'The A80 Supra with its 2JZ-GTE twin-turbo engine became a tuning legend, capable of 1,000+ horsepower and immortalized in racing and pop culture.'
            },
            {
                year: '2002',
                title: 'Production Hiatus',
                description: 'Production ended, but the Supra\'s legend only grew stronger through motorsports, street racing culture, and appearances in films like The Fast and the Furious.'
            },
            {
                year: '2019',
                title: 'The Return',
                description: 'After 17 years, the Supra returned in collaboration with BMW, featuring a turbocharged inline-six producing 382 horsepower and pure driving excitement.'
            },
            {
                year: '2025',
                title: 'Modern Icon',
                description: 'The GR Supra continues to evolve with performance upgrades, special editions, and a manual transmission option, honoring its legendary heritage.'
            }
        ]
    },
    prius: {
        name: 'Toyota Prius',
        history: [
            {
                year: '1997',
                title: 'World\'s First Mass-Produced Hybrid',
                description: 'Toyota launched the revolutionary Prius in Japan, introducing Hybrid Synergy Drive technology that would change the automotive industry forever.'
            },
            {
                year: '2000',
                title: 'Global Debut',
                description: 'The Prius went global, bringing hybrid technology to the masses and establishing Toyota as the leader in eco-friendly automotive innovation.'
            },
            {
                year: '2004',
                title: 'Second Generation Success',
                description: 'With its distinctive wedge shape and improved 50+ MPG efficiency, the Prius became a cultural phenomenon and symbol of environmental consciousness.'
            },
            {
                year: '2016',
                title: 'Fourth Generation Excellence',
                description: 'Built on TNGA platform with 54 MPG combined, the Prius received awards for efficiency, safety, and value, surpassing 4 million global sales.'
            },
            {
                year: '2023',
                title: 'Bold Redesign',
                description: 'The fifth-generation Prius features dramatic styling, improved performance, and plug-in hybrid capability, proving efficiency can be exciting and beautiful.'
            }
        ]
    },
    tundra: {
        name: 'Toyota Tundra',
        history: [
            {
                year: '1999',
                title: 'Entering the Full-Size Arena',
                description: 'Toyota introduced the Tundra to compete in the American full-size pickup market, combining legendary reliability with genuine truck capability.'
            },
            {
                year: '2007',
                title: 'Second Generation Power',
                description: 'A complete redesign brought the powerful 5.7L V8 engine, increased towing capacity up to 10,000 lbs, and the prestigious Motor Trend Truck of the Year award.'
            },
            {
                year: '2014',
                title: 'TRD Pro Arrives',
                description: 'The TRD Pro trim brought off-road performance to new heights with FOX shocks, specialized suspension, and rugged styling for adventure enthusiasts.'
            },
            {
                year: '2022',
                title: 'Revolutionary Redesign',
                description: 'The third-generation Tundra features a twin-turbo V6 hybrid powertrain producing 437 horsepower, modern technology, and capability that redefines the segment.'
            },
            {
                year: '2025',
                title: 'Modern Workhorse',
                description: 'The Tundra continues to combine power, reliability, and advanced features, offering best-in-class towing and the durability Toyota is famous for.'
            }
        ]
    },
    gr86: {
        name: 'Toyota GR86',
        history: [
            {
                year: '2012',
                title: 'The GT86 / FR-S Debuts',
                description: 'Developed with Subaru, the GT86 (FR-S/BRZ) brought back affordable, pure driving dynamics with a naturally aspirated boxer engine and rear-wheel drive.'
            },
            {
                year: '2013',
                title: 'Global Sports Car Phenomenon',
                description: 'The lightweight coupe won numerous awards for its balanced handling and driver engagement, becoming a favorite among enthusiasts and track day warriors.'
            },
            {
                year: '2017',
                title: 'Evolution and Refinement',
                description: 'Updates brought improved torque delivery, enhanced suspension tuning, and technology upgrades while maintaining the pure, analog driving experience.'
            },
            {
                year: '2022',
                title: 'The GR86 Arrives',
                description: 'The second generation debuts with a more powerful 2.4L engine producing 228 HP, stiffer chassis, and improved aerodynamics under the GR performance brand.'
            },
            {
                year: '2025',
                title: 'Pure Driving Joy',
                description: 'The GR86 continues Toyota\'s commitment to affordable performance, offering one of the most engaging driving experiences with perfect balance and precision.'
            }
        ]
    }
};

// 3D Animation Scene
let historyScene, historyCamera, historyRenderer, historyLogo;

function showHistory(vehicle) {
    const modal = document.getElementById('historyModal');
    const content = document.getElementById('historyContent');
    const container = document.getElementById('history-3d-container');
    
    const data = vehicleHistoryData[vehicle];
    
    // Generate history content
    let html = `
        <h2 class="history-title neon-text">${data.name} History</h2>
        <div class="history-timeline">
    `;
    
    data.history.forEach((item, index) => {
        html += `
            <div class="history-item" style="animation-delay: ${index * 0.2}s">
                <div class="history-year-badge">${item.year}</div>
                <div class="history-item-content">
                    <h3 class="history-item-title">${item.title}</h3>
                    <p class="history-item-desc">${item.description}</p>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    content.innerHTML = html;
    
    // Initialize 3D Animation
    init3DHistoryAnimation(container);
    
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function closeHistory() {
    const modal = document.getElementById('historyModal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        if (historyRenderer) {
            historyRenderer.dispose();
        }
    }, 300);
}

function init3DHistoryAnimation(container) {
    // Clear previous scene
    container.innerHTML = '';
    
    // Scene setup
    historyScene = new THREE.Scene();
    historyCamera = new THREE.PerspectiveCamera(75, container.offsetWidth / 300, 0.1, 1000);
    historyRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    historyRenderer.setSize(container.offsetWidth, 300);
    historyRenderer.setClearColor(0x000000, 0);
    container.appendChild(historyRenderer.domElement);
    
    // Create Toyota Logo 3D
    const geometry = new THREE.TorusGeometry(1, 0.15, 16, 100);
    const material = new THREE.MeshPhongMaterial({ 
        color: 0xff0000,
        emissive: 0xff0000,
        emissiveIntensity: 0.5,
        shininess: 100
    });
    historyLogo = new THREE.Mesh(geometry, material);
    historyScene.add(historyLogo);
    
    // Add inner circles
    const innerGeometry1 = new THREE.TorusGeometry(0.7, 0.12, 16, 100);
    const innerLogo1 = new THREE.Mesh(innerGeometry1, material);
    historyScene.add(innerLogo1);
    
    const innerGeometry2 = new THREE.TorusGeometry(0.4, 0.1, 16, 100);
    const innerLogo2 = new THREE.Mesh(innerGeometry2, material);
    historyScene.add(innerLogo2);
    
    // Lighting
    const light1 = new THREE.PointLight(0xff0000, 1, 100);
    light1.position.set(10, 10, 10);
    historyScene.add(light1);
    
    const light2 = new THREE.PointLight(0xffffff, 0.5, 100);
    light2.position.set(-10, -10, 10);
    historyScene.add(light2);
    
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    historyScene.add(ambientLight);
    
    historyCamera.position.z = 3;
    
    // Animation
    function animate() {
        requestAnimationFrame(animate);
        
        historyLogo.rotation.y += 0.01;
        historyLogo.rotation.x += 0.005;
        innerLogo1.rotation.y -= 0.015;
        innerLogo1.rotation.x += 0.008;
        innerLogo2.rotation.y += 0.02;
        innerLogo2.rotation.x -= 0.01;
        
        historyRenderer.render(historyScene, historyCamera);
    }
    
    animate();
}

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('historyModal');
    if (event.target === modal) {
        closeHistory();
    }
}

// Close on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeHistory();
    }
});