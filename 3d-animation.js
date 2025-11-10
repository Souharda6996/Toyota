// Three.js 3D Background Animation
let scene, camera, renderer, particles;

function init3DBackground() {
    // Create scene
    scene = new THREE.Scene();
    
    // Create camera
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 50;
    
    // Create renderer
    const canvas = document.getElementById('bg-canvas');
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Create particle system
    createParticleSystem();
    
    // Create geometric shapes
    createGeometricShapes();
    
    // Add lights
    addLights();
    
    // Animation loop
    animate();
    
    // Handle window resize
    window.addEventListener('resize', onWindowResize);
    
    // Mouse interaction
    document.addEventListener('mousemove', onMouseMove);
}

function createParticleSystem() {
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 200;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.1,
        color: 0xEB0A1E,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    
    particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
}

function createGeometricShapes() {
    // Create rotating torus
    const torusGeometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const torusMaterial = new THREE.MeshStandardMaterial({
        color: 0xEB0A1E,
        wireframe: true,
        transparent: true,
        opacity: 0.3
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(-30, 0, -20);
    scene.add(torus);
    
    // Create rotating cube
    const cubeGeometry = new THREE.BoxGeometry(15, 15, 15);
    const cubeMaterial = new THREE.MeshStandardMaterial({
        color: 0xff6b6b,
        wireframe: true,
        transparent: true,
        opacity: 0.2
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(30, -10, -30);
    scene.add(cube);
    
    // Create rotating octahedron
    const octaGeometry = new THREE.OctahedronGeometry(8, 0);
    const octaMaterial = new THREE.MeshStandardMaterial({
        color: 0x00ffff,
        wireframe: true,
        transparent: true,
        opacity: 0.25
    });
    const octahedron = new THREE.Mesh(octaGeometry, octaMaterial);
    octahedron.position.set(0, 30, -25);
    scene.add(octahedron);
    
    // Store shapes for animation
    window.shapes = { torus, cube, octahedron };
}

function addLights() {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Point lights
    const pointLight1 = new THREE.PointLight(0xEB0A1E, 1, 100);
    pointLight1.position.set(50, 50, 50);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0x00ffff, 1, 100);
    pointLight2.position.set(-50, -50, 50);
    scene.add(pointLight2);
}

let mouseX = 0;
let mouseY = 0;

function onMouseMove(event) {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
}

function animate() {
    requestAnimationFrame(animate);
    
    // Rotate particles
    if (particles) {
        particles.rotation.x += 0.0005;
        particles.rotation.y += 0.0005;
    }
    
    // Rotate geometric shapes
    if (window.shapes) {
        window.shapes.torus.rotation.x += 0.01;
        window.shapes.torus.rotation.y += 0.005;
        
        window.shapes.cube.rotation.x += 0.005;
        window.shapes.cube.rotation.y += 0.01;
        
        window.shapes.octahedron.rotation.x += 0.008;
        window.shapes.octahedron.rotation.y += 0.008;
    }
    
    // Mouse interaction
    camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
    camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
    
    // Scroll effect
    const scrollY = window.scrollY;
    camera.position.z = 50 + scrollY * 0.01;
    
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init3DBackground);
} else {
    init3DBackground();
}

// Additional particle effects for specific sections
function createSectionParticles(sectionId) {
    const section = document.querySelector(`#${sectionId}`);
    if (!section) return;
    
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
    `;
    
    section.style.position = 'relative';
    section.appendChild(particleContainer);
    
    // Create floating particles
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 5 + 2}px;
            height: ${Math.random() * 5 + 2}px;
            background: radial-gradient(circle, rgba(235,10,30,0.8) 0%, rgba(235,10,30,0) 70%);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float-particle ${Math.random() * 10 + 5}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        particleContainer.appendChild(particle);
    }
}

// Add particle animation CSS
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float-particle {
        0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Create particles for each section
setTimeout(() => {
    createSectionParticles('legacy');
    createSectionParticles('vehicles');
    createSectionParticles('innovation');
}, 1000);

// Performance optimization: Pause animation when tab is not visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause heavy animations
        if (renderer) {
            renderer.setAnimationLoop(null);
        }
    } else {
        // Resume animations
        if (renderer) {
            renderer.setAnimationLoop(animate);
        }
    }
});

console.log('%c✨ 3D Animation System Loaded', 'color: #00ffff; font-size: 14px; font-weight: bold;');