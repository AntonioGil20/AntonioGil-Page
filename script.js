/**
 * ==========================================================================
 * ANTONIO GIL - PORTAFOLIO DE ARTISTA
 * Archivo Principal de JavaScript (Versión Final Corregida)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. BASE DE DATOS (DISCOGRAFÍA)
       ========================================================================== */
    const miDiscografia = [
        {
            id: 1,
            titulo: "En Adversidad",
            videoCover: "portadas/EnAdversidadCover.mp4", 
            portada: "portadas/EnAdversidad.jpg",            
            url: "en-adversidad.html",
        },
        {
            id: 2,
            titulo: "To Leave And Go",
            videoCover: "portadas/ToLeaveAndGoCover.mp4",
            portada: "portadas/ToLeaveAndGo.jpg",
            url: "to-leave-and-go.html",
            descripcion: "Una canción sobre la monotonía. Decidí hacer el video yo mismo usando luces de neón en mi cuarto.",
            canciones: [
                { nombre: "01. Love At The Start", archivo: "canciones/Love At The Start.mp3" },
                { nombre: "02. Growing Wounds", archivo: "canciones/Growing Wounds.mp3"},
                { nombre: "03. Paralysis Days", archivo: "canciones/Paralysis Days.mp3" },
                { nombre: "04. OUT FOREVER", archivo: "canciones/OUT FOREVER.mp3" }
            ]
        },
        {
            id: 3,
            titulo: "Abrevadero",
            videoCover: "portadas/AbrevaderoCover.mp4",
            portada: "portadas/Abrevadero.jpg",
            url: "abrevadero.html",
            descripcion: "Agrega aquí la historia detrás de este lanzamiento...",
            canciones: [
                { nombre: "01. Abrevadero", archivo: "canciones/Abrevadero.mp3" }
            ]
        },
        {
            id: 4,
            titulo: "Esto Es Un Musical",
            videoCover: "portadas/EstoEsUnMusicalCover.mp4",
            portada: "portadas/EstoEsUnMusical.jpg",
            url: "esto-es-un-musical.html",
            descripcion: "Agrega aquí la historia detrás de este lanzamiento...",
            canciones: [
                { nombre: "01. Bajo Los Pies", archivo: "canciones/Bajo Los Pies.mp3" },
                { nombre: "02. El Anochecer De Quien", archivo: "canciones/El Anochecer De Quien.mp3" },
                { nombre: "03. Musical Finale (S+3)", archivo: "canciones/Esto Es Un Musical.mp3" }
            ]
        },
        {
            id: 5,
            titulo: "Have You Ever Seen The Rain",
            videoCover: "portadas/HaveYouEverSeenTheRainCover.mp4",
            portada: "portadas/HaveYouEverSeenTheRain.jpg",
            url: "have-you-ever-seen-the-rain.html",
            descripcion: "Mi propia versión de este clásico. Un tributo con mi estilo de producción.",
            canciones: [
                { nombre: "01. Have You Ever Seen The Rain", archivo: "canciones/HaveYouEverSeenTheRain.mp3" }
            ]
        },
        {
            id: 6,
            titulo: "No Tears Only Rain",
            videoCover: "portadas/NoTearsOnlyRainCover.mp4",
            portada: "portadas/NoTearsOnlyRain.jpg",
            url: "no-tears-only-rain.html",
            descripcion: "Agrega aquí la historia detrás de este lanzamiento...",
            canciones: [
                { nombre: "01. Horses & Trains", archivo: "canciones/Horses & Trains.mp3" },
                { nombre: "02. Plastic Demons", archivo: "canciones/Plastic Demons.mp3" },
                { nombre: "03. The Night Is Young, Walk On Girl", archivo: "canciones/The Night Is Young, Walk On Girl.mp3" },
                { nombre: "04. Bizarre Guests", archivo: "canciones/Bizarre Guests.mp3" },
                { nombre: "05. Alien Dust", archivo: "canciones/Alien Dust.mp3" },
                { nombre: "06. A Message To The Past", archivo: "canciones/A Message To The Past.mp3" },
                { nombre: "07. Playing The Game", archivo: "canciones/Playing The Game.mp3" },
                { nombre: "08. London Bridge Is Falling Down", archivo: "canciones/London Bridge Is Falling Down.mp3" },
                { nombre: "09. The Shepherd Man", archivo: "canciones/The Shepherd Man.mp3" },
                { nombre: "10. Can We Shower In The Rain?", archivo: "canciones/Can We Shower In The Rain.mp3" },
                { nombre: "11. DOING DETOX", archivo: "canciones/DOING DETOX.mp3" }
            ]
        },
        {
            id: 7,
            titulo: "Conmoción",
            videoCover: "portadas/ConmociónCover.mp4",
            portada: "portadas/Conmoción.jpg",
            url: "conmocion.html",
            descripcion: "Agrega aquí la historia detrás de este lanzamiento...",
            canciones: [
                { nombre: "01. Conmoción", archivo: "canciones/Conmoción.mp3" },
                { nombre: "02. Maquiavelo", archivo: "canciones/Maquiavelo.mp3" },
                { nombre: "03. La Vuelta", archivo: "canciones/La Vuelta.mp3" }
            ]
        },
        {
            id: 8,
            titulo: "ÍCARO",
            videoCover: "portadas/IcaroCover.mp4",
            portada: "portadas/Icaro.jpg",
            url: "icaro.html",
            descripcion: "Agrega aquí la historia detrás de este lanzamiento...",
            canciones: [
                { nombre: "01. ÍCARO", archivo: "canciones/ÍCARO.mp3" }
            ]
        },
        {
            id: 9,
            titulo: "Amor Crimen",
            videoCover: "portadas/AmorCrimenCover.mp4",
            portada: "portadas/AmorCrimen.jpg",
            url: "amor-crimen.html",
            descripcion: "Agrega aquí la historia detrás de este lanzamiento...",
            canciones: [
                { nombre: "01. amor crimen", archivo: "canciones/amor crimen.mp3" }
            ]
        },
        {
            id: 10,
            titulo: "Donde No Llega La Sangre",
            videoCover: "portadas/DondeNoLLegaLaSangreCover.mp4",
            portada: "portadas/DondeNoLLegaLaSangre.jpg",
            url: "donde-no-llega-la-sangre.html",
            descripcion: "Agrega aquí la historia detrás de este lanzamiento...",
            canciones: [
                { nombre: "01. Donde No Llega La Sangre", archivo: "canciones/Donde No LLega La Sangre.mp3" }
            ]
        },
        {
            id: 11,
            titulo: "parece que es normal",
            videoCover: "portadas/PareceQueEsNormalCover.mp4",
            portada: "portadas/PareceQueEsNormal.png",
            url: "parece-que-es-normal.html",
            descripcion: "Agrega aquí la historia detrás de este lanzamiento...",
            canciones: [
                { nombre: "01. 9 De 10 Soy Terco", archivo: "canciones/9 De 10 Soy Terco.mp3" },
                { nombre: "02. Parece Que Es Normal", archivo: "canciones/parece que es normal.mp3" },
            ]
        },
        {
            id: 12,
            titulo: "Todo Lo Que Ocurre Bien Está En El Exterior",
            videoCover: "portadas/TodoLoQueOcurreBienEstaEnElExteriorCover.mp4",
            portada: "portadas/TodoLoQueOcurreBienEstaEnElExterior.png",
            url: "todo-lo-que-ocurre.html",
            descripcion: "Agrega aquí la historia detrás de este lanzamiento...",
            canciones: [
                { nombre: "01. Todo Lo Que Ocurre Bien Está En El Exterior", archivo: "canciones/Todo Lo Que Ocurre Bien Está En El Exterior.mp3" }
            ],
            spotify_embed: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/album/3oyUi5XpOrz2xJCRtKzgPi?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
        }
    ];

    /* ==========================================================================
       2. SELECCIÓN DE ELEMENTOS DEL DOM
       ========================================================================== */
    const releasesGrid = document.getElementById('releases-grid');
    const featuredReleaseContainer = document.getElementById('featured-release');

    /* ==========================================================================
       3. ANIMACIONES GLOBALES
       ========================================================================== */
    const fadeElements = document.querySelectorAll('.fade-in');
    const appearOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeElements.forEach(element => appearOnScroll.observe(element));

    /* ==========================================================================
       4. RENDERIZADO DE INTERFAZ Y NAVEGACIÓN (TRANSICIONES)
       ========================================================================== */
    const overlay = document.getElementById('page-overlay');

    // Función universal para salir de la página con efecto Fade-Out
    const navigateWithTransition = (url) => {
        if (overlay) {
            overlay.classList.add('active');
            setTimeout(() => {
                window.location.href = url;
            }, 500); // 500ms coincide con la transición del CSS
        } else {
            window.location.href = url;
        }
    };

    if (releasesGrid && featuredReleaseContainer) {
        // Renderizar el Spotify Embed del último lanzamiento
        const latestRelease = miDiscografia[miDiscografia.length - 1]; 
        if (latestRelease && latestRelease.spotify_embed) {
            featuredReleaseContainer.innerHTML = `<div class="featured-badge">Último Lanzamiento</div>${latestRelease.spotify_embed}`;
        }

        // Renderizar la cuadrícula de discos
        miDiscografia.forEach(release => {
            const item = document.createElement('div');
            item.classList.add('release-item');
            
            let coverHTML = release.videoCover 
                ? `<video autoplay muted loop playsinline class="release-video-cover"><source src="${release.videoCover}" type="video/mp4"><img src="${release.portada}" alt="${release.titulo}"></video>` 
                : `<img src="${release.portada}" alt="${release.titulo}">`;

            item.innerHTML = `
                ${coverHTML}
                <div class="release-title-overlay">
                    <span class="release-title-text">${release.titulo}</span>
                    <span class="release-click-hint"><i class="fas fa-play-circle"></i> Ver Detalles</span>
                </div>`;

            // EVENTO DE CLIC CON TRANSICIÓN
            item.addEventListener('click', (e) => {
                e.preventDefault();
                navigateWithTransition(release.url);
            });

            releasesGrid.appendChild(item);
        });
    }

    // Aplicar transición a botones de "Siguiente" y "Volver" en páginas de detalle
    const navButtons = document.querySelectorAll('.nav-btn-back, .nav-btn-next');
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const url = btn.getAttribute('href');
            // Solo aplicamos la transición si el link NO es un ancla interna (#)
            if (url && !url.startsWith('#')) {
                e.preventDefault();
                navigateWithTransition(url);
            }
        });
    });

    /* ==========================================================================
       5. CARRUSEL AUDIOVISUAL
       ========================================================================== */
    const videoTrack = document.getElementById('video-track');
    const videoPagination = document.getElementById('video-pagination'); 
    const videoItems = videoTrack ? videoTrack.querySelectorAll('.video-item') : []; 
    let isVideoHovered = false;
    let currentVideoIndex = 0;

    if (videoTrack && videoPagination && videoItems.length > 0) {
        videoItems.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (index === 0) dot.classList.add('active'); 
            dot.addEventListener('click', () => {
                isVideoHovered = true;
                const targetScrollLeft = videoItems[index].offsetLeft - (videoTrack.clientWidth / 2) + (videoItems[index].clientWidth / 2);
                videoTrack.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
                setTimeout(() => isVideoHovered = false, 3000); 
            });
            videoPagination.appendChild(dot);
        });

        videoTrack.addEventListener('scroll', () => {
            const centerOfTrack = videoTrack.scrollLeft + (videoTrack.clientWidth / 2);
            let closestIndex = 0;
            let minDistance = Infinity;
            videoItems.forEach((video, index) => {
                const videoCenter = video.offsetLeft + (video.clientWidth / 2);
                const distance = Math.abs(centerOfTrack - videoCenter);
                if (distance < minDistance) { minDistance = distance; closestIndex = index; }
            });
            if (currentVideoIndex !== closestIndex) {
                currentVideoIndex = closestIndex;
                const dots = videoPagination.querySelectorAll('.carousel-dot');
                dots.forEach((dot, index) => dot.classList.toggle('active', index === currentVideoIndex));
            }
        });

        setInterval(() => {
            if (!isVideoHovered) {
                const scrollAmount = videoTrack.querySelector('.video-item').offsetWidth + 30; 
                if (videoTrack.scrollLeft + videoTrack.clientWidth >= videoTrack.scrollWidth - 10) videoTrack.scrollTo({ left: 0, behavior: 'smooth' });
                else videoTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }, 4000); 
    }

    /* ==========================================================================
       6. FUNCIONALIDADES DETALLE (AUDIO & LIGHTBOX) - CORREGIDO
       ========================================================================== */

    const trackContainers = document.querySelectorAll('.track-item');
    const wavesurfers = []; // Array para controlar todas las instancias

if (trackContainers.length > 0) { // <--- AÑADE ESTO
    const wavesurfers = []; 
    trackContainers.forEach((container, index) => {        const waveformDiv = container.querySelector('.waveform');
        const playBtn = container.querySelector('.play-btn');
        const icon = playBtn.querySelector('i');
        const volumeSlider = container.querySelector('.volume-slider');
        const audioSrc = container.getAttribute('data-src');

        // Inicializar WaveSurfer para esta pista
        const ws = WaveSurfer.create({
            container: waveformDiv,
            waveColor: '#444',
            progressColor: '#73263d', // var(--accent-red)
            cursorColor: '#296858',   // var(--accent-green)
            barWidth: 2,
            barGap: 3,
            responsive: true,
            height: 60,
            url: audioSrc,
        });

        wavesurfers.push(ws);

        // Control de Play/Pause
        playBtn.addEventListener('click', () => {
            if (ws.isPlaying()) {
                ws.pause();
            } else {
                // Detener todos los demás antes de tocar
                wavesurfers.forEach(otherWs => {
                    if (otherWs !== ws) otherWs.pause();
                });
                ws.play();
            }
        });

        // Cambiar iconos y estilos al reproducir
        ws.on('play', () => {
            icon.classList.replace('fa-play', 'fa-pause');
            playBtn.style.color = 'var(--accent-red)';
            playBtn.style.borderColor = 'var(--accent-red)';
        });

        ws.on('pause', () => {
            icon.classList.replace('fa-pause', 'fa-play');
            playBtn.style.color = 'var(--text-color)';
            playBtn.style.borderColor = 'var(--text-color)';
        });

        // --- CONTINUIDAD AUTOMÁTICA ---
        ws.on('finish', () => {
            const nextIndex = index + 1;
            if (nextIndex < wavesurfers.length) {
                wavesurfers[nextIndex].play();
                // Opcional: Hacer scroll suave hacia la siguiente canción
                trackContainers[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });

        // --- CONTROL DE VOLUMEN ---
        if (volumeSlider) {
            volumeSlider.addEventListener('input', (e) => {
                ws.setVolume(e.target.value);
            });
        }
    });
} // <--- CIERRE DE ESTE BLOQUE

    // --- GALERÍA LIGHTBOX ---
    const galleryImages = document.querySelectorAll('.process-gallery img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('close-lightbox');
    const prevBtn = document.getElementById('prev-lightbox');
    const nextBtn = document.getElementById('next-lightbox');

    if (galleryImages.length > 0 && lightbox) {
        let lightBoxIndex = 0;

        galleryImages.forEach((img, index) => {
            img.style.cursor = 'pointer'; 
            img.addEventListener('click', () => {
                lightBoxIndex = index;
                lightboxImg.src = img.src;
                lightbox.style.display = 'flex';
            });
        });

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                lightBoxIndex = (lightBoxIndex + 1) % galleryImages.length;
                lightboxImg.src = galleryImages[lightBoxIndex].src;
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                lightBoxIndex = (lightBoxIndex - 1 + galleryImages.length) % galleryImages.length;
                lightboxImg.src = galleryImages[lightBoxIndex].src;
            });
        }

        const closeFunc = (e) => {
            if (e.target === lightbox || e.target === closeBtn || e.target.closest('#close-lightbox') || e.key === 'Escape') {
                lightbox.style.display = 'none';
            }
        };

        lightbox.addEventListener('click', closeFunc);
        document.addEventListener('keydown', closeFunc);
    }

// --- ScrollSpy: Indicador de sección activa (Solo en Index) ---
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id], header[id]');

    // Solo ejecutamos si hay secciones en la página actual (evita errores en páginas de detalle)
    if (sections.length > 0 && document.getElementById('inicio')) {
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= (sectionTop - 250)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                // Verificamos si el href del link coincide exactamente con el ID actual
                if (link.getAttribute('href') === `#${current}` || link.getAttribute('href').includes(`#${current}`)) {
                    link.classList.add('active');
                }
            });
        });
    } else {
        // Si estamos en una página de detalle, simplemente removemos cualquier clase active
        navLinks.forEach(link => link.classList.remove('active'));
    }

    // --- Lógica del Botón Volver Arriba ---
    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

}); // CIERRE ÚNICO DE DOMCONTENTLOADED