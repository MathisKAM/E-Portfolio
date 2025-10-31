// ========================================
// IMMERSIVE SPACE 3D BACKGROUND - Welcome Section
// Fond spatial immersif avec fusées, satellites, planètes, soleil et étoiles
// Utilisation de Three.js pour un rendu réaliste et performant
// ========================================

(function() {
    'use strict';

    // Variables globales de la scène
    let scene, camera, renderer, animationId;
    let stars, shootingStars = [];
    let rockets = [], satellites = [], planets = [], sun;
    let particleSystem;
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;
    let isInitialized = false;

    // ========================================
    // INITIALISATION DE LA SCÈNE
    // ========================================
    function init() {
        const welcomeSection = document.getElementById('welcome');
        if (!welcomeSection) {
            console.log('⏳ Welcome section not found, retrying...');
            setTimeout(init, 500);
            return;
        }

        if (typeof THREE === 'undefined') {
            console.log('⏳ Three.js not loaded yet, retrying...');
            setTimeout(init, 500);
            return;
        }
        
        if (isInitialized) {
            console.log('⚠️ Fond spatial déjà initialisé, ignoré');
            return;
        }

        console.log('🌌 Initializing Immersive Space Background');
        isInitialized = true;

        // Créer la scène avec fond noir profond spatial
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);
        scene.fog = new THREE.FogExp2(0x050510, 0.0003); // Brouillard subtil bleu nuit

        // Créer la caméra avec perspective réaliste
        camera = new THREE.PerspectiveCamera(
            75, // FOV plus large pour immersion
            window.innerWidth / window.innerHeight,
            0.1,
            2000
        );
        camera.position.set(0, 0, 50);

        // Créer le renderer WebGL avec antialiasing
        renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance'
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        // Insérer le canvas dans la section welcome
        const canvas = renderer.domElement;
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '0';
        canvas.style.pointerEvents = 'none';
        welcomeSection.style.position = 'relative';
        welcomeSection.insertBefore(canvas, welcomeSection.firstChild);

        // ========================================
        // CRÉATION DES ÉLÉMENTS DE LA SCÈNE
        // ========================================
        
        createStars();           // Étoiles scintillantes
        createMicroParticles();  // Particules subtiles
        createSun();            // Soleil lumineux
        createPlanets();        // Planètes avec textures
        createRockets();        // Fusées réalistes
        createSatellites();     // Satellites/stations spatiales
        createLighting();       // Lumières ambiance

        // ========================================
        // ÉVÉNEMENTS
        // ========================================
        document.addEventListener('mousemove', onMouseMove);
        // Optimized resize handler with debounce
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(onWindowResize, 100);
        });

        // Lancer l'animation
        animate();

        console.log('✅ Immersive Space Background initialized');
    }

    // ========================================
    // CRÉATION DES ÉTOILES RÉALISTES
    // Étoiles scintillantes avec variations de taille et luminosité
    // ========================================
    function createStars() {
        const starGeometry = new THREE.BufferGeometry();
        // Adaptive star count based on device performance
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const starCount = isMobile ? 4000 : 8000;
        const positions = new Float32Array(starCount * 3);
        const colors = new Float32Array(starCount * 3);
        const sizes = new Float32Array(starCount);

        for (let i = 0; i < starCount; i++) {
            const i3 = i * 3;
            
            // Position aléatoire dans tout l'espace
            const radius = 200 + Math.random() * 800;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            
            positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i3 + 2] = radius * Math.cos(phi);

            // Couleurs variées (blanc, bleuté, jaunâtre)
            const colorType = Math.random();
            if (colorType < 0.6) {
                // Étoiles blanches
                colors[i3] = 1.0;
                colors[i3 + 1] = 1.0;
                colors[i3 + 2] = 1.0;
            } else if (colorType < 0.85) {
                // Étoiles bleues
                colors[i3] = 0.7 + Math.random() * 0.3;
                colors[i3 + 1] = 0.8 + Math.random() * 0.2;
                colors[i3 + 2] = 1.0;
            } else {
                // Étoiles jaunâtres
                colors[i3] = 1.0;
                colors[i3 + 1] = 0.9 + Math.random() * 0.1;
                colors[i3 + 2] = 0.6 + Math.random() * 0.3;
            }

            // Tailles variées pour simuler la profondeur
            sizes[i] = Math.random() * 2.5 + 0.5;
        }

        starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        starGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        // Créer une texture de point rond lumineux
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');
        
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
        
        const starTexture = new THREE.CanvasTexture(canvas);

        const starMaterial = new THREE.PointsMaterial({
            size: 1.2,
            vertexColors: true,
            transparent: true,
            opacity: 0.95,
            sizeAttenuation: true,
            blending: THREE.AdditiveBlending,
            map: starTexture,
            depthWrite: false
        });

        stars = new THREE.Points(starGeometry, starMaterial);
        stars.userData.twinklePhases = new Float32Array(starCount).map(() => Math.random() * Math.PI * 2);
        scene.add(stars);
    }

    // ========================================
    // CRÉATION DES MICRO-PARTICULES
    // Particules discrètes pour donner du relief
    // ========================================
    function createMicroParticles() {
        const particleGeometry = new THREE.BufferGeometry();
        const particleCount = 1000;
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 600;
            positions[i + 1] = (Math.random() - 0.5) * 600;
            positions[i + 2] = (Math.random() - 0.5) * 300;
        }

        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const particleMaterial = new THREE.PointsMaterial({
            size: 0.5,
            color: 0x4a5568,
            transparent: true,
            opacity: 0.3,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        particleSystem = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particleSystem);
    }

    // ========================================
    // CRÉATION DU SOLEIL
    // Soleil IMPOSANT et TRÈS LUMINEUX
    // ========================================
    function createSun() {
        const sunGroup = new THREE.Group();

        // Sphère principale du soleil (PLUS GROS)
        const sunGeometry = new THREE.SphereGeometry(35, 64, 64);
        const sunMaterial = new THREE.MeshBasicMaterial({
            color: 0xffd700 // Or brillant
        });
        const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
        sunGroup.add(sunMesh);

        // Glow interne (première couche)
        const glow1Geometry = new THREE.SphereGeometry(42, 64, 64);
        const glow1Material = new THREE.MeshBasicMaterial({
            color: 0xffaa00,
            transparent: true,
            opacity: 0.5,
            side: THREE.BackSide
        });
        const glow1Mesh = new THREE.Mesh(glow1Geometry, glow1Material);
        sunGroup.add(glow1Mesh);

        // Glow externe (deuxième couche - PLUS IMPOSANT)
        const glow2Geometry = new THREE.SphereGeometry(55, 64, 64);
        const glow2Material = new THREE.MeshBasicMaterial({
            color: 0xff8800,
            transparent: true,
            opacity: 0.3,
            side: THREE.BackSide
        });
        const glow2Mesh = new THREE.Mesh(glow2Geometry, glow2Material);
        sunGroup.add(glow2Mesh);
        
        // Glow très externe (troisième couche - effet corona)
        const glow3Geometry = new THREE.SphereGeometry(70, 64, 64);
        const glow3Material = new THREE.MeshBasicMaterial({
            color: 0xffaa44,
            transparent: true,
            opacity: 0.15,
            side: THREE.BackSide
        });
        const glow3Mesh = new THREE.Mesh(glow3Geometry, glow3Material);
        sunGroup.add(glow3Mesh);

        // Position du soleil (en arrière-plan, côté)
        sunGroup.position.set(-200, 100, -400);
        
        sunGroup.userData.rotationSpeed = 0.001;
        
        sun = sunGroup;
        scene.add(sun);

        // Lumière du soleil (BEAUCOUP PLUS PUISSANTE)
        const sunLight = new THREE.PointLight(0xffdd88, 3.5, 1200);
        sunLight.position.copy(sunGroup.position);
        scene.add(sunLight);
    }

    // ========================================
    // CRÉATION DES PLANÈTES
    // Planètes avec textures procédurales et rotations
    // ========================================
    function createPlanets() {
        const planetData = [
            { 
                radius: 8, 
                color: 0x4a90e2, 
                position: [80, -50, -150],
                rotationSpeed: 0.002,
                orbitRadius: 100,
                orbitSpeed: 0.0003
            },
            { 
                radius: 12, 
                color: 0xe74c3c, 
                position: [-120, 60, -200],
                rotationSpeed: 0.0015,
                orbitRadius: 150,
                orbitSpeed: 0.0002
            },
            { 
                radius: 6, 
                color: 0x9b59b6, 
                position: [150, -80, -250],
                rotationSpeed: 0.003,
                orbitRadius: 180,
                orbitSpeed: 0.00015
            },
            { 
                radius: 10, 
                color: 0x27ae60, 
                position: [-80, 100, -180],
                rotationSpeed: 0.0018,
                orbitRadius: 120,
                orbitSpeed: 0.00025
            }
        ];

        planetData.forEach((data, index) => {
            const planetGroup = new THREE.Group();

            // Géométrie de la planète
            const geometry = new THREE.SphereGeometry(data.radius, 32, 32);
            
            // Créer une texture procédurale pour la planète
            const canvas = document.createElement('canvas');
            canvas.width = 512;
            canvas.height = 512;
            const ctx = canvas.getContext('2d');
            
            // Fond de base
            ctx.fillStyle = `#${data.color.toString(16).padStart(6, '0')}`;
            ctx.fillRect(0, 0, 512, 512);
            
            // Ajouter des variations de texture
            for (let i = 0; i < 100; i++) {
                ctx.fillStyle = `rgba(${Math.random() * 100}, ${Math.random() * 100}, ${Math.random() * 100}, 0.3)`;
                ctx.beginPath();
                ctx.arc(
                    Math.random() * 512,
                    Math.random() * 512,
                    Math.random() * 50 + 10,
                    0,
                    Math.PI * 2
                );
                ctx.fill();
            }
            
            const texture = new THREE.CanvasTexture(canvas);
            
            const material = new THREE.MeshPhongMaterial({
                map: texture,
                shininess: 30,
                emissive: data.color,
                emissiveIntensity: 0.1
            });

            const planet = new THREE.Mesh(geometry, material);
            planetGroup.add(planet);

            // Atmosphère (glow)
            const glowGeometry = new THREE.SphereGeometry(data.radius * 1.1, 32, 32);
            const glowMaterial = new THREE.MeshBasicMaterial({
                color: data.color,
                transparent: true,
                opacity: 0.2,
                side: THREE.BackSide
            });
            const glow = new THREE.Mesh(glowGeometry, glowMaterial);
            planetGroup.add(glow);

            // Position initiale
            planetGroup.position.set(...data.position);

            // Données pour l'animation
            planetGroup.userData = {
                rotationSpeed: data.rotationSpeed,
                orbitRadius: data.orbitRadius,
                orbitSpeed: data.orbitSpeed,
                orbitAngle: Math.random() * Math.PI * 2,
                initialZ: data.position[2]
            };

            planets.push(planetGroup);
            scene.add(planetGroup);
        });
    }

    // ========================================
    // CRÉATION DES FUSÉES RÉALISTES
    // Fusées modélisées en 3D avec flammes orientées
    // ========================================
    function createRockets() {
        // Adaptive rocket count based on device performance
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const rocketCount = isMobile ? 2 : 4;

        // Trajectoires logiques et variées
        const trajectoryTypes = [
            'diagonal-up-right',
            'diagonal-up-left', 
            'vertical-up',
            'horizontal-right',
            'horizontal-left',
            'curved-right',
            'curved-left',
            'spiral-up'
        ];

        for (let i = 0; i < rocketCount; i++) {
            const rocket = createRocketModel();
            
            // Position initiale aléatoire (en bas ou sur les côtés)
            const startSide = Math.floor(Math.random() * 4);
            let startPos;
            
            if (startSide === 0) { // Bas
                startPos = new THREE.Vector3((Math.random() - 0.5) * 200, -120, (Math.random() - 0.5) * 100 - 50);
            } else if (startSide === 1) { // Gauche
                startPos = new THREE.Vector3(-150, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100 - 50);
            } else if (startSide === 2) { // Droite
                startPos = new THREE.Vector3(150, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100 - 50);
            } else { // Bas centre
                startPos = new THREE.Vector3((Math.random() - 0.5) * 100, -100, (Math.random() - 0.5) * 80 - 60);
            }
            
            rocket.position.copy(startPos);

            // Type de trajectoire aléatoire
            const trajectoryType = trajectoryTypes[Math.floor(Math.random() * trajectoryTypes.length)];
            
            // Direction de mouvement selon le type
            let direction, curveData;
            
            switch(trajectoryType) {
                case 'diagonal-up-right':
                    direction = new THREE.Vector3(0.7, 1, 0).normalize();
                    break;
                case 'diagonal-up-left':
                    direction = new THREE.Vector3(-0.7, 1, 0).normalize();
                    break;
                case 'vertical-up':
                    direction = new THREE.Vector3((Math.random() - 0.5) * 0.2, 1, 0).normalize();
                    break;
                case 'horizontal-right':
                    direction = new THREE.Vector3(1, 0.3, 0).normalize();
                    break;
                case 'horizontal-left':
                    direction = new THREE.Vector3(-1, 0.3, 0).normalize();
                    break;
                case 'curved-right':
                    direction = new THREE.Vector3(0.5, 1, 0).normalize();
                    curveData = { axis: 'y', strength: 0.002 };
                    break;
                case 'curved-left':
                    direction = new THREE.Vector3(-0.5, 1, 0).normalize();
                    curveData = { axis: 'y', strength: -0.002 };
                    break;
                case 'spiral-up':
                    direction = new THREE.Vector3(0, 1, 0).normalize();
                    curveData = { type: 'spiral', radius: 30, speed: 0.02 };
                    break;
                default:
                    direction = new THREE.Vector3(0, 1, 0).normalize();
            }
            
            // Orienter la fusée dans la direction du mouvement
            const up = new THREE.Vector3(0, 1, 0);
            const quaternion = new THREE.Quaternion();
            quaternion.setFromUnitVectors(up, direction);
            rocket.quaternion.copy(quaternion);

            // Données d'animation
            rocket.userData = {
                direction: direction.clone(),
                speed: 0.08 + Math.random() * 0.1, // Vitesse plus lente pour plus de fluidité
                maxSpeed: 0.25 + Math.random() * 0.15,
                acceleration: 0.001, // Accélération progressive
                trajectoryType: trajectoryType,
                curveData: curveData,
                // Rotation sur l'axe longitudinal (axe de vol)
                spinSpeed: 0, // Vitesse de rotation désactivée (pas de rotation)
                currentSpin: 0,  // Angle de rotation actuel
                initialPosition: startPos.clone(),
                active: true,
                nextAppearance: Math.random() * 6000 + 4000,
                travelDistance: 0,
                spiralAngle: Math.random() * Math.PI * 2
            };

            rockets.push(rocket);
            scene.add(rocket);
        }
    }

    // ========================================
    // MODÈLE DE FUSÉE (PLUS GROSSE ET DÉTAILLÉE)
    // Création procédurale d'une fusée réaliste style SpaceX/Ariane
    // ========================================
    function createRocketModel() {
        const rocket = new THREE.Group();

        // Nez conique très arrondi (capsule) - PLUS GROS
        const noseGeometry = new THREE.SphereGeometry(0.8, 64, 64, 0, Math.PI * 2, 0, Math.PI / 1.4);
        const noseMaterial = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            shininess: 130,
            emissive: 0x2196f3,
            emissiveIntensity: 0.15,
            flatShading: false,
            metalness: 0.4
        });
        const nose = new THREE.Mesh(noseGeometry, noseMaterial);
        nose.position.y = 5.5;
        rocket.add(nose);
        
        // Fenêtres/hublots sur le nez
        const windowGeometry = new THREE.CircleGeometry(0.15, 16);
        const windowMaterial = new THREE.MeshPhongMaterial({
            color: 0x1a1a2e,
            shininess: 150,
            transparent: true,
            opacity: 0.9
        });
        for (let i = 0; i < 3; i++) {
            const window = new THREE.Mesh(windowGeometry, windowMaterial);
            const angle = (i * Math.PI * 2) / 3;
            window.position.set(
                Math.cos(angle) * 0.5,
                4.8,
                Math.sin(angle) * 0.5
            );
            window.lookAt(0, 4.8, 0);
            rocket.add(window);
        }

        // Corps principal (cylindre avec bords arrondis) - PLUS GROS
        const bodyPoints = [];
        bodyPoints.push(new THREE.Vector2(0.75, 4.5));
        bodyPoints.push(new THREE.Vector2(0.8, 4.2));
        bodyPoints.push(new THREE.Vector2(0.8, -1.5));
        bodyPoints.push(new THREE.Vector2(0.75, -1.8));
        bodyPoints.push(new THREE.Vector2(0.65, -2));
        
        const bodyGeometry = new THREE.LatheGeometry(bodyPoints, 64);
        const bodyMaterial = new THREE.MeshPhongMaterial({
            color: 0xf8f8f8,
            shininess: 100,
            emissive: 0x4a90e2,
            emissiveIntensity: 0.1,
            flatShading: false,
            metalness: 0.5
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.position.y = 0.5;
        rocket.add(body);

        // Bandes décoratives arrondies (style SpaceX)
        for (let i = 0; i < 2; i++) {
            const stripePoints = [];
            stripePoints.push(new THREE.Vector2(0.51, 0.2));
            stripePoints.push(new THREE.Vector2(0.53, 0.15));
            stripePoints.push(new THREE.Vector2(0.53, -0.15));
            stripePoints.push(new THREE.Vector2(0.51, -0.2));
            
            const stripeGeometry = new THREE.LatheGeometry(stripePoints, 32);
            const stripeMaterial = new THREE.MeshPhongMaterial({
                color: 0x1976d2,
                emissive: 0x0d47a1,
                emissiveIntensity: 0.25,
                shininess: 100
            });
            const stripe = new THREE.Mesh(stripeGeometry, stripeMaterial);
            stripe.position.y = 2.2 - i * 1.8;
            rocket.add(stripe);
        }

        // Ailerons arrondis (4) - PLUS GRANDS
        const finShape = new THREE.Shape();
        finShape.moveTo(0, 0.2);
        finShape.bezierCurveTo(0.3, 0, 1.0, -1.0, 1.5, -2.2);
        finShape.bezierCurveTo(1.2, -2.3, 0.5, -2.5, 0, -2.5);
        finShape.lineTo(0, 0.2);

        const finGeometry = new THREE.ExtrudeGeometry(finShape, {
            depth: 0.18,
            bevelEnabled: true,
            bevelThickness: 0.06,
            bevelSize: 0.06,
            bevelSegments: 8
        });
        const finMaterial = new THREE.MeshPhongMaterial({
            color: 0xff5555,
            emissive: 0xdd0000,
            emissiveIntensity: 0.2,
            shininess: 110,
            metalness: 0.4
        });

        for (let i = 0; i < 4; i++) {
            const fin = new THREE.Mesh(finGeometry, finMaterial);
            fin.rotation.y = (Math.PI / 2) * i;
            fin.position.y = -1.2;
            const angle = (Math.PI / 2) * i;
            fin.position.x = Math.cos(angle) * 0.5;
            fin.position.z = Math.sin(angle) * 0.5;
            rocket.add(fin);
        }
        
        // Marquages réalistes sur le corps (logos, bandes)
        const markingGeometry = new THREE.CircleGeometry(0.35, 32);
        const markingMaterial = new THREE.MeshPhongMaterial({
            color: 0xff3333,
            shininess: 120
        });
        const marking1 = new THREE.Mesh(markingGeometry, markingMaterial);
        marking1.position.set(0.81, 2, 0);
        marking1.rotation.y = -Math.PI / 2;
        rocket.add(marking1);
        
        // Logo opposé
        const marking2 = new THREE.Mesh(markingGeometry, markingMaterial);
        marking2.position.set(-0.81, 2, 0);
        marking2.rotation.y = Math.PI / 2;
        rocket.add(marking2);
        
        // Numérotation/identification
        const numGeometry = new THREE.BoxGeometry(0.6, 0.3, 0.02);
        const numMaterial = new THREE.MeshPhongMaterial({
            color: 0x1a1a1a,
            shininess: 100
        });
        const num1 = new THREE.Mesh(numGeometry, numMaterial);
        num1.position.set(0.81, 0, 0);
        num1.rotation.y = -Math.PI / 2;
        rocket.add(num1);

        // Moteurs - PLUS GROS ET RÉALISTES avec détails internes
        const engineGeometry = new THREE.CylinderGeometry(0.65, 0.6, 1.0, 32);
        const engineMaterial = new THREE.MeshPhongMaterial({
            color: 0x2a2a2a,
            emissive: 0x0a0a0a,
            emissiveIntensity: 0.3,
            shininess: 80,
            metalness: 0.7
        });
        const engine = new THREE.Mesh(engineGeometry, engineMaterial);
        engine.position.y = -2.5;
        rocket.add(engine);
        
        // Intérieur du moteur (tuyère)
        const nozzleGeometry = new THREE.CylinderGeometry(0.5, 0.4, 0.6, 32);
        const nozzleMaterial = new THREE.MeshPhongMaterial({
            color: 0xff6600,
            emissive: 0xff4400,
            emissiveIntensity: 0.6,
            shininess: 150
        });
        const nozzle = new THREE.Mesh(nozzleGeometry, nozzleMaterial);
        nozzle.position.y = -2.8;
        rocket.add(nozzle);
        
        // Anneaux de refroidissement
        for (let i = 0; i < 3; i++) {
            const ringGeometry = new THREE.TorusGeometry(0.7, 0.03, 16, 32);
            const ringMaterial = new THREE.MeshPhongMaterial({
                color: 0x555555,
                shininess: 100,
                metalness: 0.8
            });
            const ring = new THREE.Mesh(ringGeometry, ringMaterial);
            ring.position.y = -2.0 - i * 0.3;
            ring.rotation.x = Math.PI / 2;
            rocket.add(ring);
        }

        // FEU DU RÉACTEUR - BEAUCOUP PLUS VISIBLE ET IMPRESSIONNANT
        const flameGroup = new THREE.Group();
        
        // Flamme interne TRÈS LUMINEUSE (blanc/jaune intense)
        const flameInnerGeometry = new THREE.ConeGeometry(0.65, 3.5, 32);
        const flameInnerMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff, // Blanc pur très lumineux
            transparent: true,
            opacity: 1.0
        });
        const flameInner = new THREE.Mesh(flameInnerGeometry, flameInnerMaterial);
        flameInner.position.y = -1.75;
        flameGroup.add(flameInner);
        
        // Flamme moyenne (jaune intense)
        const flameMidGeometry = new THREE.ConeGeometry(0.85, 4.5, 32);
        const flameMidMaterial = new THREE.MeshBasicMaterial({
            color: 0xffff00, // Jaune vif
            transparent: true,
            opacity: 0.9
        });
        const flameMid = new THREE.Mesh(flameMidGeometry, flameMidMaterial);
        flameMid.position.y = -2.25;
        flameGroup.add(flameMid);

        // Flamme externe (orange vif)
        const flameOuterGeometry = new THREE.ConeGeometry(1.0, 5.5, 32);
        const flameOuterMaterial = new THREE.MeshBasicMaterial({
            color: 0xff6600, // Orange intense
            transparent: true,
            opacity: 0.85
        });
        const flameOuter = new THREE.Mesh(flameOuterGeometry, flameOuterMaterial);
        flameOuter.position.y = -2.75;
        flameGroup.add(flameOuter);
        
        // Flamme la plus externe (rouge/orange pour profondeur)
        const flameOutermost = new THREE.ConeGeometry(1.2, 6.5, 32);
        const flameOutermostMaterial = new THREE.MeshBasicMaterial({
            color: 0xff3300, // Rouge-orange
            transparent: true,
            opacity: 0.7
        });
        const flameOutest = new THREE.Mesh(flameOutermost, flameOutermostMaterial);
        flameOutest.position.y = -3.25;
        flameGroup.add(flameOutest);
        
        // Lumière du feu (pour éclairer autour)
        const flameLight = new THREE.PointLight(0xffaa00, 2, 15);
        flameLight.position.y = -3;
        flameGroup.add(flameLight);

        flameGroup.position.y = -3.0;
        flameGroup.userData.isFlame = true;
        rocket.add(flameGroup);

        return rocket;
    }

    // ========================================
    // CRÉATION DES SATELLITES
    // Satellites/stations spatiales réalistes
    // ========================================
    function createSatellites() {
        const satelliteCount = 5;

        for (let i = 0; i < satelliteCount; i++) {
            const satellite = createSatelliteModel();
            
            // Position aléatoire sur orbites PLUS ÉLOIGNÉES
            const radius = 150 + Math.random() * 120; // Plus loin (était 80-180, maintenant 150-270)
            const angle = (Math.PI * 2 / satelliteCount) * i + Math.random() * 0.5;
            
            satellite.position.set(
                Math.cos(angle) * radius,
                (Math.random() - 0.5) * 60,
                Math.sin(angle) * radius - 120 // Plus en profondeur
            );

            // Données d'animation - rotation réaliste comme dans l'espace
            satellite.userData = {
                // Rotation sur lui-même sur les 3 axes (comme dans l'espace)
                selfRotation: {
                    x: (Math.random() - 0.5) * 0.006,  // Ralenti pour plus de réalisme
                    y: (Math.random() - 0.5) * 0.01,
                    z: (Math.random() - 0.5) * 0.005
                },
                orbitRadius: radius,
                orbitAngle: angle,
                orbitSpeed: 0.0002 + Math.random() * 0.0003, // Plus lent pour plus de réalisme
                orbitTilt: (Math.random() - 0.5) * 1.2,
                floatAmplitude: 15,
                floatSpeed: 0.0004 + Math.random() * 0.0003,
                tumbleSpeed: 0.0008 + Math.random() * 0.0015 // Rotation complexe plus lente
            };

            satellites.push(satellite);
            scene.add(satellite);
        }
    }

    // ========================================
    // MODÈLE DE SATELLITE (BEAUCOUP PLUS GROS ET DÉTAILLÉ)
    // Création procédurale d'un satellite réaliste type ISS/Hubble
    // ========================================
    function createSatelliteModel() {
        const satellite = new THREE.Group();

        // Corps principal arrondi - BEAUCOUP PLUS GROS
        const bodyGeometry = new THREE.CylinderGeometry(1.4, 1.4, 3.2, 64);
        const bodyMaterial = new THREE.MeshPhongMaterial({
            color: 0xf5f5f5,
            shininess: 130,
            flatShading: false,
            metalness: 0.5,
            reflectivity: 0.8
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        satellite.add(body);
        
        // Extrémités arrondies pour le corps (haut et bas)
        const capGeometry = new THREE.SphereGeometry(1.4, 64, 64);
        const topCap = new THREE.Mesh(capGeometry, bodyMaterial);
        topCap.position.y = 1.6;
        topCap.scale.y = 0.5;
        satellite.add(topCap);
        
        const bottomCap = new THREE.Mesh(capGeometry, bodyMaterial);
        bottomCap.position.y = -1.6;
        bottomCap.scale.y = 0.5;
        satellite.add(bottomCap);
        
        // Bandes techniques colorées
        for (let i = 0; i < 3; i++) {
            const bandGeometry = new THREE.CylinderGeometry(1.45, 1.45, 0.3, 64);
            const bandMaterial = new THREE.MeshPhongMaterial({
                color: i % 2 === 0 ? 0x1976d2 : 0xff9800,
                shininess: 140,
                metalness: 0.7
            });
            const band = new THREE.Mesh(bandGeometry, bandMaterial);
            band.position.y = -1 + i * 1;
            satellite.add(band);
        }

        // Module supérieur (dôme transparent TRÈS GROS et réaliste)
        const domeGeometry = new THREE.SphereGeometry(1.2, 64, 64);
        const domeMaterial = new THREE.MeshPhongMaterial({
            color: 0x99ddff,
            shininess: 180,
            transparent: true,
            opacity: 0.65,
            metalness: 0.6,
            reflectivity: 0.9
        });
        const dome = new THREE.Mesh(domeGeometry, domeMaterial);
        dome.position.y = 2.5;
        satellite.add(dome);
        
        // Intérieur du dôme (équipements visibles)
        const innerGeometry = new THREE.SphereGeometry(0.5, 32, 32);
        const innerMaterial = new THREE.MeshPhongMaterial({
            color: 0x333333,
            shininess: 50
        });
        const inner = new THREE.Mesh(innerGeometry, innerMaterial);
        inner.position.y = 2.5;
        satellite.add(inner);
        
        // Bandes de connexion métalliques (plusieurs pour réalisme)
        for (let i = 0; i < 4; i++) {
            const bandGeometry = new THREE.CylinderGeometry(1.42, 1.42, 0.15, 64);
            const bandMaterial = new THREE.MeshPhongMaterial({
                color: i % 2 === 0 ? 0x1976d2 : 0x424242,
                shininess: 140,
                metalness: 0.85
            });
            const band = new THREE.Mesh(bandGeometry, bandMaterial);
            band.position.y = -1.2 + i * 0.8;
            satellite.add(band);
        }
        
        // Anneau central BEAUCOUP PLUS GROS
        const ringGeometry = new THREE.TorusGeometry(1.6, 0.2, 24, 64);
        const ringMaterial = new THREE.MeshPhongMaterial({
            color: 0x0d47a1,
            shininess: 120,
            metalness: 0.8,
            reflectivity: 0.7
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = Math.PI / 2;
        satellite.add(ring);

        // Antennes BEAUCOUP PLUS LONGUES
        const antennaGeometry = new THREE.CylinderGeometry(0.1, 0.1, 4.0, 16);
        const antennaMaterial = new THREE.MeshPhongMaterial({
            color: 0xdddddd,
            shininess: 110,
            metalness: 0.7
        });
        
        // Boules au bout des antennes (plus grosses)
        const antennaTipGeometry = new THREE.SphereGeometry(0.2, 24, 24);
        const antennaTipMaterial = new THREE.MeshPhongMaterial({
            color: 0xff5555,
            shininess: 140,
            emissive: 0xff0000,
            emissiveIntensity: 0.3
        });
        
        const antenna1 = new THREE.Mesh(antennaGeometry, antennaMaterial);
        antenna1.position.y = 4.0;
        satellite.add(antenna1);
        const tip1 = new THREE.Mesh(antennaTipGeometry, antennaTipMaterial);
        tip1.position.y = 6.0;
        satellite.add(tip1);

        const antenna2 = new THREE.Mesh(antennaGeometry, antennaMaterial);
        antenna2.position.set(1.2, 1.5, 0);
        antenna2.rotation.z = Math.PI / 4;
        satellite.add(antenna2);
        
        const antenna3 = new THREE.Mesh(antennaGeometry, antennaMaterial);
        antenna3.position.set(-1.2, 1.5, 0);
        antenna3.rotation.z = -Math.PI / 4;
        satellite.add(antenna3);

        // Panneaux solaires BEAUCOUP PLUS GRANDS (2)
        const createSolarPanel = (side) => {
            const panelGroup = new THREE.Group();
            
            // Structure principale arrondie - BEAUCOUP PLUS GRANDE
            const panelGeometry = new THREE.BoxGeometry(6, 0.12, 3, 32, 1, 32);
            
            // Arrondir les coins
            const panelMaterial = new THREE.MeshPhongMaterial({
                color: 0x1a237e,
                shininess: 70,
                emissive: 0x0d47a1,
                emissiveIntensity: 0.35,
                flatShading: false
            });
            const panel = new THREE.Mesh(panelGeometry, panelMaterial);
            panelGroup.add(panel);

            // Bord arrondi doré
            const borderGeometry = new THREE.BoxGeometry(3.1, 0.12, 1.6, 16, 1, 16);
            const borderMaterial = new THREE.MeshPhongMaterial({
                color: 0xd4af37,
                shininess: 100,
                emissive: 0x8b7500,
                emissiveIntensity: 0.2
            });
            const border = new THREE.Mesh(borderGeometry, borderMaterial);
            border.position.y = -0.05;
            panelGroup.add(border);

            // Cellules solaires (grille arrondie)
            const cellGeometry = new THREE.BoxGeometry(0.22, 0.12, 0.22, 4, 1, 4);
            const cellMaterial = new THREE.MeshPhongMaterial({
                color: 0x0d47a1,
                emissive: 0x1976d2,
                emissiveIntensity: 0.45,
                shininess: 80
            });

            for (let x = -1.2; x <= 1.2; x += 0.3) {
                for (let z = -0.6; z <= 0.6; z += 0.3) {
                    const cell = new THREE.Mesh(cellGeometry, cellMaterial);
                    cell.position.set(x, 0.1, z);
                    panelGroup.add(cell);
                }
            }

            panelGroup.position.x = side * 2.2;
            return panelGroup;
        };

        satellite.add(createSolarPanel(1));
        satellite.add(createSolarPanel(-1));

        return satellite;
    }

    // ========================================
    // CRÉATION DES ÉTOILES FILANTES
    // Étoiles filantes sporadiques
    // ========================================
    function addShootingStar() {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(6);
        
        const startX = (Math.random() - 0.5) * 300;
        const startY = (Math.random() * 100) + 80;
        const startZ = (Math.random() - 0.5) * 150;
        
        positions[0] = startX;
        positions[1] = startY;
        positions[2] = startZ;
        positions[3] = startX;
        positions[4] = startY;
        positions[5] = startZ;
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const material = new THREE.LineBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.9,
            linewidth: 2
        });
        
        const shootingStar = new THREE.Line(geometry, material);
        
        shootingStar.userData = {
            velocity: {
                x: (Math.random() - 0.5) * 0.8,
                y: -(Math.random() * 0.7 + 0.5),
                z: (Math.random() - 0.5) * 0.5
            },
            life: 0,
            maxLife: 80 + Math.random() * 80
        };
        
        shootingStars.push(shootingStar);
        scene.add(shootingStar);
    }

    // ========================================
    // LUMIÈRES
    // Configuration de l'éclairage ambiant
    // ========================================
    function createLighting() {
        // Lumière ambiante douce
        const ambientLight = new THREE.AmbientLight(0x404060, 1.2);
        scene.add(ambientLight);

        // Lumière directionnelle (simule lumière lointaine)
        const directionalLight = new THREE.DirectionalLight(0x8899ff, 0.6);
        directionalLight.position.set(50, 100, 50);
        scene.add(directionalLight);

        // Lumière d'appoint
        const fillLight = new THREE.DirectionalLight(0x4488ff, 0.3);
        fillLight.position.set(-50, -50, 50);
        scene.add(fillLight);
    }

    // ========================================
    // GESTION DES ÉVÉNEMENTS
    // ========================================
    function onMouseMove(event) {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // ========================================
    // BOUCLE D'ANIMATION PRINCIPALE
    // Animation fluide et immersive de tous les éléments
    // ========================================
    function animate() {
        animationId = requestAnimationFrame(animate);

        const time = Date.now() * 0.001;
        
        // Removed debug logs for better performance

        // Mouvement de caméra subtil avec la souris
        targetX += (mouseX * 5 - targetX) * 0.02;
        targetY += (mouseY * 5 - targetY) * 0.02;
        camera.position.x += (targetX - camera.position.x) * 0.03;
        camera.position.y += (targetY - camera.position.y) * 0.03;
        camera.lookAt(scene.position);

        // ========================================
        // ANIMATION DES ÉTOILES
        // Scintillement naturel avec variations
        // ========================================
        if (stars) {
            stars.rotation.y += 0.00003;
            
            const sizes = stars.geometry.attributes.size.array;
            for (let i = 0; i < sizes.length; i++) {
                const phase = stars.userData.twinklePhases[i];
                const twinkle = Math.sin(time * 1.5 + phase) * 0.4 + 0.8;
                sizes[i] = (Math.random() * 2 + 0.8) * twinkle;
            }
            stars.geometry.attributes.size.needsUpdate = true;
        }

        // ========================================
        // ANIMATION DES MICRO-PARTICULES
        // Mouvement lent et subtil
        // ========================================
        if (particleSystem) {
            particleSystem.rotation.y += 0.00005;
            particleSystem.rotation.x = Math.sin(time * 0.1) * 0.05;
        }

        // ========================================
        // ANIMATION DU SOLEIL
        // Rotation lente
        // ========================================
        if (sun) {
            sun.rotation.y += sun.userData.rotationSpeed;
            // Pulsation subtile du glow
            sun.children[1].scale.setScalar(1 + Math.sin(time * 0.5) * 0.05);
        }

        // ========================================
        // ANIMATION DES PLANÈTES
        // Rotation propre + mouvement orbital
        // ========================================
        planets.forEach(planet => {
            // Rotation sur elle-même
            planet.rotation.y += planet.userData.rotationSpeed;
            
            // Mouvement orbital
            planet.userData.orbitAngle += planet.userData.orbitSpeed;
            const orbitX = Math.cos(planet.userData.orbitAngle) * planet.userData.orbitRadius;
            const orbitZ = Math.sin(planet.userData.orbitAngle) * planet.userData.orbitRadius + planet.userData.initialZ;
            
            planet.position.x = orbitX;
            planet.position.z = orbitZ;
            
            // Légère oscillation verticale
            planet.position.y += Math.sin(time + planet.userData.orbitAngle) * 0.05;
        });

        // ========================================
        // ANIMATION DES FUSÉES
        // Trajectoires logiques et variées avec rotation sur elles-mêmes
        // ========================================
        rockets.forEach((rocket, index) => {
            if (!rocket.userData.active) {
                // Attendre avant la prochaine apparition
                rocket.userData.nextAppearance -= 16;
                if (rocket.userData.nextAppearance <= 0) {
                    rocket.userData.active = true;
                    rocket.position.copy(rocket.userData.initialPosition);
                    rocket.userData.travelDistance = 0;
                    rocket.userData.nextAppearance = Math.random() * 10000 + 6000;
                }
                return;
            }

            // Trajectoires logiques selon le type
            const trajectoryType = rocket.userData.trajectoryType;
            
            // Accélération progressive pour un mouvement plus fluide
            if (rocket.userData.speed < rocket.userData.maxSpeed) {
                rocket.userData.speed += rocket.userData.acceleration;
            }
            
            rocket.userData.travelDistance += rocket.userData.speed;

            if (trajectoryType.includes('curved') || trajectoryType === 'spiral-up') {
                // Trajectoires courbes et spirales
                if (trajectoryType === 'spiral-up') {
                    rocket.userData.spiralAngle += rocket.userData.curveData.speed;
                    const spiralRadius = rocket.userData.curveData.radius;
                    rocket.position.x = rocket.userData.initialPosition.x + 
                                       Math.cos(rocket.userData.spiralAngle) * spiralRadius;
                    rocket.position.z = rocket.userData.initialPosition.z + 
                                       Math.sin(rocket.userData.spiralAngle) * spiralRadius;
                    rocket.position.y += rocket.userData.speed;
                    
                    // Réorienter la fusée dans la direction du mouvement spiral
                    const tangent = new THREE.Vector3(
                        -Math.sin(rocket.userData.spiralAngle),
                        1,
                        Math.cos(rocket.userData.spiralAngle)
                    ).normalize();
                    
                    // Orientation de base vers la direction
                    const up = new THREE.Vector3(0, 1, 0);
                    const baseQuat = new THREE.Quaternion();
                    baseQuat.setFromUnitVectors(up, tangent);
                    
                    // Rotation de spin cumulée
                    rocket.userData.currentSpin += rocket.userData.spinSpeed;
                    const spinQuat = new THREE.Quaternion();
                    spinQuat.setFromAxisAngle(tangent, rocket.userData.currentSpin);
                    
                    // Combiner orientation + spin
                    rocket.quaternion.copy(baseQuat).multiply(spinQuat);
                } else {
                    // Trajectoire courbe simple
                    rocket.position.x += rocket.userData.direction.x * rocket.userData.speed;
                    rocket.position.y += rocket.userData.direction.y * rocket.userData.speed;
                    rocket.position.z += rocket.userData.direction.z * rocket.userData.speed;
                    
                    // Appliquer la courbure
                    if (rocket.userData.curveData) {
                        rocket.userData.direction.x += rocket.userData.curveData.strength;
                        rocket.userData.direction.normalize();
                    }
                    
                    // Orientation de base vers la direction
                    const up = new THREE.Vector3(0, 1, 0);
                    const baseQuat = new THREE.Quaternion();
                    baseQuat.setFromUnitVectors(up, rocket.userData.direction);
                    
                    // Rotation de spin cumulée
                    rocket.userData.currentSpin += rocket.userData.spinSpeed;
                    const spinQuat = new THREE.Quaternion();
                    spinQuat.setFromAxisAngle(rocket.userData.direction, rocket.userData.currentSpin);
                    
                    // Combiner orientation + spin
                    rocket.quaternion.copy(baseQuat).multiply(spinQuat);
                }
            } else {
                // Trajectoires linéaires (diagonale, verticale, horizontale)
                rocket.position.x += rocket.userData.direction.x * rocket.userData.speed;
                rocket.position.y += rocket.userData.direction.y * rocket.userData.speed;
                rocket.position.z += rocket.userData.direction.z * rocket.userData.speed;
                
                // Orientation de base vers la direction
                const up = new THREE.Vector3(0, 1, 0);
                const baseQuat = new THREE.Quaternion();
                baseQuat.setFromUnitVectors(up, rocket.userData.direction);
                
                // Rotation de spin cumulée sur l'axe de vol
                rocket.userData.currentSpin += rocket.userData.spinSpeed;
                const spinQuat = new THREE.Quaternion();
                spinQuat.setFromAxisAngle(rocket.userData.direction, rocket.userData.currentSpin);
                
                // Combiner orientation + spin
                rocket.quaternion.copy(baseQuat).multiply(spinQuat);
            }

            // Désactiver si hors limites
            if (Math.abs(rocket.position.x) > 280 || 
                Math.abs(rocket.position.y) > 250 ||
                rocket.position.z > 150) {
                rocket.userData.active = false;
            }

            // Animation des FLAMMES TRÈS DYNAMIQUES
            rocket.children.forEach(child => {
                if (child.userData.isFlame) {
                    // Pulsation verticale intense
                    child.scale.y = 1 + Math.sin(time * 12 + index * 2) * 0.5;
                    child.scale.x = 1 + Math.sin(time * 15 + index) * 0.3;
                    child.scale.z = 1 + Math.cos(time * 15 + index) * 0.3;
                    
                    // Rotation turbulente
                    child.rotation.y = time * 4;
                    
                    // Animation de chaque couche de flamme
                    child.children.forEach((flame, flameIndex) => {
                        // Skip la lumière (dernière enfant)
                        if (flame.type === 'PointLight') {
                            // Animation de l'intensité de la lumière
                            flame.intensity = 2 + Math.sin(time * 10 + index) * 1;
                            return;
                        }
                        
                        // Opacité pulsante selon la couche
                        const baseOpacity = [1.0, 0.9, 0.85, 0.7][flameIndex] || 0.7;
                        flame.material.opacity = baseOpacity + 
                                               Math.sin(time * 15 + index + flameIndex * 3) * 0.2;
                        
                        // Chaque couche pulse légèrement différemment
                        flame.scale.y = 1 + Math.sin(time * (10 + flameIndex * 2) + index) * 0.3;
                        flame.scale.x = 1 + Math.cos(time * (12 + flameIndex) + index) * 0.2;
                        flame.scale.z = 1 + Math.sin(time * (12 + flameIndex) + index) * 0.2;
                    });
                }
            });
        });

        // ========================================
        // ANIMATION DES SATELLITES
        // Rotation complexe sur eux-mêmes + mouvement orbital (comme dans l'espace)
        // ========================================
        satellites.forEach((satellite, index) => {
            // ROTATION SUR EUX-MÊMES (3 axes) - simulation réaliste de l'espace
            satellite.rotation.x += satellite.userData.selfRotation.x;
            satellite.rotation.y += satellite.userData.selfRotation.y;
            satellite.rotation.z += satellite.userData.selfRotation.z;
            
            // Tumbling (rotation complexe comme les vrais satellites)
            const tumbleAxis = new THREE.Vector3(
                Math.sin(time * satellite.userData.tumbleSpeed),
                Math.cos(time * satellite.userData.tumbleSpeed * 0.7),
                Math.sin(time * satellite.userData.tumbleSpeed * 0.5)
            ).normalize();
            satellite.rotateOnAxis(tumbleAxis, satellite.userData.tumbleSpeed * 0.5);

            // Mouvement orbital fluide avec inclinaison
            satellite.userData.orbitAngle += satellite.userData.orbitSpeed;
            
            const orbitX = Math.cos(satellite.userData.orbitAngle) * satellite.userData.orbitRadius;
            const orbitZ = Math.sin(satellite.userData.orbitAngle) * satellite.userData.orbitRadius - 80;
            
            satellite.position.x = orbitX;
            satellite.position.z = orbitZ;
            
            // Oscillation verticale avec inclinaison orbitale
            satellite.position.y = Math.sin(satellite.userData.orbitAngle * 0.5 + satellite.userData.orbitTilt) * 
                                   satellite.userData.floatAmplitude +
                                   Math.sin(time * satellite.userData.floatSpeed + index) * 3;
        });

        // ========================================
        // ÉTOILES FILANTES SPORADIQUES
        // Apparition aléatoire et naturelle
        // ========================================
        if (Math.random() < 0.004) {
            addShootingStar();
        }

        // Animation des étoiles filantes existantes
        for (let i = shootingStars.length - 1; i >= 0; i--) {
            const star = shootingStars[i];
            star.userData.life++;
            
            const positions = star.geometry.attributes.position.array;
            positions[0] = positions[3];
            positions[1] = positions[4];
            positions[2] = positions[5];
            
            positions[3] += star.userData.velocity.x;
            positions[4] += star.userData.velocity.y;
            positions[5] += star.userData.velocity.z;
            
            star.geometry.attributes.position.needsUpdate = true;
            star.material.opacity = 1 - (star.userData.life / star.userData.maxLife);
            
            if (star.userData.life >= star.userData.maxLife) {
                scene.remove(star);
                shootingStars.splice(i, 1);
            }
        }

        // Rendu final
        renderer.render(scene, camera);
    }

    // ========================================
    // NETTOYAGE
    // ========================================
    function cleanup() {
        console.log('🧹 Nettoyage du fond spatial');
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
        if (renderer && renderer.domElement && renderer.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement);
            renderer.dispose();
        }
        document.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', onWindowResize);
        isInitialized = false;
    }

    // ========================================
    // DÉMARRAGE - Forcer l'initialisation
    // ========================================
    console.log('🚀 SPACE-3D-BACKGROUND.JS CHARGÉ');
    
    function tryInit() {
        console.log('🔍 Tentative d\'initialisation...');
        const welcomeSection = document.getElementById('welcome');
        console.log('   Section #welcome:', welcomeSection);
        console.log('   THREE défini:', typeof THREE !== 'undefined');
        
        if (welcomeSection && typeof THREE !== 'undefined') {
            console.log('✅ CONDITIONS OK - Démarrage du fond spatial');
            init();
        } else {
            console.log('⏳ Attente... retry dans 200ms');
            setTimeout(tryInit, 200);
        }
    }

    // Démarrage immédiat + retry
    setTimeout(tryInit, 100);
    
    // Backup: aussi au DOMContentLoaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            console.log('📄 DOMContentLoaded déclenché');
            setTimeout(tryInit, 300);
        });
    }
    
    // Backup 2: aussi au load complet
    window.addEventListener('load', () => {
        console.log('🌐 Window load déclenché');
        setTimeout(tryInit, 500);
    });

    // Exposer les fonctions pour réinitialisation
    window.cleanupSpace3D = cleanup;
    window.initSpace3DBackground = tryInit;

})();
