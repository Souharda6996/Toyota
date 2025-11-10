// Three.js 3D Background Animation with Animated Toyota Logo
let scene, camera, renderer, particles, toyotaLogos = [];

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
    
    // Create animated Toyota logos
    createAnimatedToyotaLogos();
    
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
    const particlesCount = 3000;
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 250;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.15,
        color: 0xEB0A1E,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
    });
    
    particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
}

function createAnimatedToyotaLogos() {
    // Create multiple floating Toyota logo representations
    const logoPositions = [
        { x: -40, y: 30, z: -60, scale: 0.8 },
        { x: 50, y: -20, z: -80, scale: 1.2 },
        { x: -60, y: -30, z: -50, scale: 0.6 },
        { x: 30, y: 40, z: -70, scale: 0.9 },
        { x: 0, y: 0, z: -90, scale: 1.5 }
    ];
    
    logoPositions.forEach((pos, index) => {
        // Create Toyota logo as three interlocking ellipses
        const logoGroup = new THREE.Group();
        
        // Outer ellipse (horizontal)
        const outerEllipse = createEllipse(3.5 * pos.scale, 2 * pos.scale, 0xEB0A1E, 0.4);
        logoGroup.add(outerEllipse);
        
        // Inner ellipse 1 (vertical)
        const innerEllipse1 = createEllipse(1.5 * pos.scale, 2.5 * pos.scale, 0xEB0A1E, 0.5);
        innerEllipse1.rotation.z = Math.PI / 2;
        logoGroup.add(innerEllipse1);
        
        // Inner ellipse 2 (horizontal)
        const innerEllipse2 = createEllipse(2.5 * pos.scale, 1 * pos.scale, 0xEB0A1E, 0.5);
        logoGroup.add(innerEllipse2);
        
        logoGroup.position.set(pos.x, pos.y, pos.z);
        logoGroup.userData = { 
            baseY: pos.y,
            floatSpeed: 0.5 + Math.random() * 0.5,
            rotateSpeed: 0.2 + Math.random() * 0.3,
            index: index
        };
        
        scene.add(logoGroup);
        toyotaLogos.push(logoGroup);
    });
}

function createEllipse(radiusX, radiusY, color, opacity) {
    const curve = new THREE.EllipseCurve(
        0, 0,
        radiusX, radiusY,
        0, 2 * Math.PI,
        false,
        0
    );
    
    const points = curve.getPoints(100);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    
    const material = new THREE.LineBasicMaterial({
        color: color,
        transparent: true,
        opacity: opacity,
        linewidth: 2
    });
    
    const ellipse = new THREE.Line(geometry, material);
    
    // Add glow effect with mesh
    const glowGeometry = new THREE.TorusGeometry(radiusX, 0.1, 8, 50);
    const glowMaterial = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.2,
        side: THREE.DoubleSide
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.scale.set(1, radiusY / radiusX, 1);
    ellipse.add(glow);
    
    return ellipse;
}

function createGeometricShapes() {
    // Create rotating torus
    const torusGeometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const torusMaterial = new THREE.MeshStandardMaterial({
        color: 0xEB0A1E,
        wireframe: true,
        transparent: true,
        opacity: 0.2
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(-30, 0, -20);
    scene.add(torus);
    
    // Create rotating cube
    const cubeGeometry = new THREE.BoxGeometry(15, 15, 15);
    const cubeMaterial = new THREE.MeshStandardMaterial({
        color: 0x888888,
        wireframe: true,
        transparent: true,
        opacity: 0.15
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(30, -10, -30);
    scene.add(cube);
    
    // Create rotating octahedron
    const octaGeometry = new THREE.OctahedronGeometry(8, 0);
    const octaMaterial = new THREE.MeshStandardMaterial({
        color: 0xcccccc,
        wireframe: true,
        transparent: true,
        opacity: 0.15
    });
    const octahedron = new THREE.Mesh(octaGeometry, octaMaterial);
    octahedron.position.set(0, 30, -25);
    scene.add(octahedron);
    
    // Store shapes for animation
    window.shapes = { torus, cube, octahedron };
}

function addLights() {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);
    
    // Point lights
    const pointLight1 = new THREE.PointLight(0xEB0A1E, 1.5, 100);
    pointLight1.position.set(50, 50, 50);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0xffffff, 0.8, 100);
    pointLight2.position.set(-50, -50, 50);
    scene.add(pointLight2);
    
    const pointLight3 = new THREE.PointLight(0xEB0A1E, 1, 80);
    pointLight3.position.set(0, 0, 30);
    scene.add(pointLight3);
}

let mouseX = 0;
let mouseY = 0;

function onMouseMove(event) {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
}

function animate() {
    requestAnimationFrame(animate);
    
    const time = Date.now() * 0.001;
    
    // Rotate particles
    if (particles) {
        particles.rotation.x += 0.0003;
        particles.rotation.y += 0.0005;
    }
    
    // Animate Toyota logos
    toyotaLogos.forEach((logo) => {
        // Floating animation
        logo.position.y = logo.userData.baseY + Math.sin(time * logo.userData.floatSpeed) * 5;
        
        // Rotation animation
        logo.rotation.y += 0.005 * logo.userData.rotateSpeed;
        logo.rotation.x += 0.003 * logo.userData.rotateSpeed;
        
        // Pulsing scale effect
        const scale = 1 + Math.sin(time * 2 + logo.userData.index) * 0.1;
        logo.scale.set(scale, scale, scale);
        
        // Subtle position drift
        logo.position.x += Math.sin(time * 0.3 + logo.userData.index) * 0.02;
    });
    
    // Rotate geometric shapes
    if (window.shapes) {
        window.shapes.torus.rotation.x += 0.008;
        window.shapes.torus.rotation.y += 0.004;
        
        window.shapes.cube.rotation.x += 0.004;
        window.shapes.cube.rotation.y += 0.008;
        
        window.shapes.octahedron.rotation.x += 0.006;
        window.shapes.octahedron.rotation.y += 0.006;
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
        z-index: 1;
    `;
    
    section.style.position = 'relative';
    section.appendChild(particleContainer);
    
    // Create floating Toyota-inspired particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: radial-gradient(circle, rgba(235,10,30,0.8) 0%, rgba(235,10,30,0) 70%);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float-particle ${Math.random() * 15 + 8}s ease-in-out infinite;
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
            opacity: 0.8;
        }
        90% {
            opacity: 0.8;
        }
        100% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0.3);
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
        if (renderer) {
            renderer.setAnimationLoop(null);
        }
    } else {
        if (renderer) {
            renderer.setAnimationLoop(animate);
        }
    }
});

console.log('%c✨ Toyota 3D Animation System with Animated Logos Loaded', 'color: #EB0A1E; font-size: 14px; font-weight: bold;');