/**
 * ==========================================================================
 * ANTONIO GIL - PORTAFOLIO DE ARTISTA
 * Archivo Principal de JavaScript (Lógica e Interacción)
 * ==========================================================================
 * * ÍNDICE DE CONTENIDO:
 * 1. Base de Datos (Discografía)
 * 2. Selección de Elementos del DOM
 * 3. Animaciones Globales y Navegación
 * 4. Renderizado de Interfaz (Destacado y Cuadrícula)
 * 5. Lógica del Modal (Tarjeta Interactiva)
 * 6. Lógica del Reproductor de Audio Personalizado
 * 7. Eventos de Cierre
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. BASE DE DATOS (DISCOGRAFÍA)
       Aquí se almacena toda la información de los lanzamientos.
       ========================================================================== */
    const miDiscografia = [
        {
            id: 1,
            titulo: "En Adversidad",
            videoCover: "portadas/EnAdversidadCover.mp4", 
            portada: "portadas/EnAdversidad.jpg",            
            descripcion: "Este fue el primer EP que grabé. Experimenté mucho con el bajo y pasé semanas mezclando las guitarras para lograr un tono sucio pero claro. Total libertad creativa.",
            canciones: [
                { nombre: "01. Ruido Blanco", archivo: "canciones/Ruido Blanco.mp3" },
                { nombre: "02. En Adversidad", archivo: "canciones/En Adversidad.mp3"},
                { nombre: "03. Sin Seguridad", archivo: "canciones/Sin Seguridad.mp3" }
            ]
        },
        {
            id: 2,
            titulo: "To Leave And Go",
            videoCover: "portadas/ToLeaveAndGoCover1.mp4",
            portada: "portadas/ToLeaveAndGo.jpg",
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
            descripcion: "Agrega aquí la historia detrás de este lanzamiento...",
            canciones: [
                { nombre: "01. Todo Lo Que Ocurre Bien Está En El Exterior", archivo: "canciones/Todo Lo Que Ocurre Bien Está En El Exterior.mp3" }
            ],
            // IMPORTANTE: Recuerda cambiar este iframe por tu código Embed real de Spotify
            spotify_embed: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/album/3oyUi5XpOrz2xJCRtKzgPi?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
        }
    ];

    /* ==========================================================================
       2. SELECCIÓN DE ELEMENTOS DEL DOM
       Almacenamos en variables los elementos HTML que vamos a manipular.
       ========================================================================== */
    // Contenedores de la UI
    const releasesGrid = document.getElementById('releases-grid');
    const featuredReleaseContainer = document.getElementById('featured-release');
    
    // Elementos del Modal
    const modal = document.getElementById('release-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const modalCover = document.getElementById('modal-cover');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalTracklist = document.getElementById('modal-tracklist');


    /* ==========================================================================
       3. ANIMACIONES GLOBALES Y NAVEGACIÓN
       ========================================================================== */
    
    // 3.1 Observador para el efecto de aparición (Fade-In) al hacer Scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeElements.forEach(element => appearOnScroll.observe(element));

    // 3.2 Scroll suave para los enlaces del menú de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    /* ==========================================================================
       4. RENDERIZADO DE INTERFAZ
       Generación dinámica del contenido de música en la página principal.
       ========================================================================== */

    // 4.1 Inyectar el Último Lanzamiento (Destacado)
    const latestRelease = miDiscografia[miDiscografia.length - 1]; // Toma el último de la lista
    
    if (latestRelease && latestRelease.spotify_embed) {
        featuredReleaseContainer.innerHTML = `
            <div class="featured-badge">Último Lanzamiento</div>
            ${latestRelease.spotify_embed}
        `;
    } else {
        featuredReleaseContainer.style.display = 'none';
    }

    // 4.2 Generar la cuadrícula de portadas (Grid)
    miDiscografia.forEach(release => {
        const item = document.createElement('div');
        item.classList.add('release-item');
        
        // --- LÓGICA MEJORADA: Verificar si hay Video Cover ---
        // Generamos el HTML de la portada dinámicamente
        let coverHTML = '';
        if (release.videoCover) {
            // Si hay video, insertamos la etiqueta <video> configurada para web
            // playsinline, muted y autoplay son necesarios para que el navegador lo reproduzca solo
            coverHTML = `
                <video autoplay muted loop playsinline class="release-video-cover">
                    <source src="${release.videoCover}" type="video/mp4">
                    <img src="${release.portada}" alt="${release.titulo}">
                </video>
            `;
        } else {
            // Si no hay video, usamos la etiqueta <img> estándar
            coverHTML = `<img src="${release.portada}" alt="${release.titulo}">`;
        }
        // -----------------------------------------------------

        // Estructura HTML final de cada tarjeta (Inyectamos coverHTML)
        item.innerHTML = `
            ${coverHTML}
            <div class="release-title-overlay">
                <span class="release-title-text">${release.titulo}</span>
                <span class="release-click-hint"><i class="fas fa-play-circle"></i> Escuchar</span>
            </div>
        `;
        
        item.addEventListener('click', () => openModal(release));
        releasesGrid.appendChild(item);
    });


    /* ==========================================================================
       5. LÓGICA DEL MODAL (TARJETA INTERACTIVA)
       ========================================================================== */
    function openModal(release) {
        // Llenar información estática
        modalCover.src = release.portada;
        modalTitle.textContent = release.titulo;
        modalDesc.textContent = release.descripcion;
        
        // Limpiar la lista de canciones anterior
        modalTracklist.innerHTML = ''; 

        // Generar dinámicamente cada canción del lanzamiento
        release.canciones.forEach(cancion => {
            const trackDiv = document.createElement('div');
            trackDiv.classList.add('track-item');
            
            // HTML del reproductor personalizado
            trackDiv.innerHTML = `
                <div class="track-header">
                    <button class="play-btn"><i class="fas fa-play"></i></button>
                    <span class="track-name">${cancion.nombre}</span>
                </div>
                <div class="progress-bg"><div class="progress-fill"></div></div>
                <audio src="${cancion.archivo}" preload="none"></audio>
            `;
            
            modalTracklist.appendChild(trackDiv);

            // Inicializar la lógica interactiva para este reproductor específico
            initCustomAudioPlayer(trackDiv);
        });

        // Mostrar el modal y bloquear el scroll del fondo
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    }


    /* ==========================================================================
       6. LÓGICA DEL REPRODUCTOR DE AUDIO PERSONALIZADO
       Controla botones, barra de progreso y pausa automática.
       ========================================================================== */
    function initCustomAudioPlayer(trackDiv) {
        const audio = trackDiv.querySelector('audio');
        const playBtn = trackDiv.querySelector('.play-btn');
        const icon = playBtn.querySelector('i');
        const progressFill = trackDiv.querySelector('.progress-fill');
        const progressBg = trackDiv.querySelector('.progress-bg');

        // Evento: Clic en el botón Play/Pause
        playBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        });

        // Evento: Cuando la canción empieza a reproducirse
        audio.addEventListener('play', () => {
            // Cambiar estilos visuales al estado "Play"
            icon.classList.replace('fa-play', 'fa-pause');
            playBtn.style.borderColor = 'var(--accent-red)';
            playBtn.style.color = 'var(--accent-red)';

            // Pausar automáticamente cualquier otra canción que esté sonando
            const todosLosAudios = modalTracklist.querySelectorAll('audio');
            todosLosAudios.forEach(otroAudio => {
                if (otroAudio !== audio) otroAudio.pause();
            });
        });

        // Evento: Cuando la canción se pausa
        audio.addEventListener('pause', () => {
            // Cambiar estilos visuales al estado "Pause"
            icon.classList.replace('fa-pause', 'fa-play');
            playBtn.style.borderColor = 'var(--text-color)';
            playBtn.style.color = 'var(--text-color)';
        });

        // Evento: Actualizar barra de progreso según avanza el tiempo
        audio.addEventListener('timeupdate', () => {
            if (audio.duration) {
                const percent = (audio.currentTime / audio.duration) * 100;
                progressFill.style.width = `${percent}%`;
            }
        });

        // Evento: Adelantar/Atrasar canción al hacer clic en la barra
        progressBg.addEventListener('click', (e) => {
            const rect = progressBg.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const percent = clickX / rect.width;
            audio.currentTime = percent * audio.duration;
        });
    }

    /* ==========================================
       7. CARRUSEL AUDIOVISUAL (AUTO-SCROLL + PAGINACIÓN)
       Controla el movimiento automático, manual y los indicadores visuales.
       ========================================== */
    const videoTrack = document.getElementById('video-track');
    const videoPagination = document.getElementById('video-pagination'); // Nuevo contenedor
    const videoItems = videoTrack.querySelectorAll('.video-item'); // Obtenemos todos los videos
    let isVideoHovered = false;
    let currentVideoIndex = 0; // Trackeamos el índice actual

    if (videoTrack && videoPagination && videoItems.length > 0) {
        // --- A. Generar los Puntos de Paginación ---
        videoItems.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (index === 0) dot.classList.add('active'); // El primero empieza activo
            
            // --- B. Lógica de clic en el punto -> Mover Carrusel a ese video ---
            dot.addEventListener('click', () => {
                // Pausar auto-scroll temporalmente por interacción manual
                isVideoHovered = true;
                
                // Calculamos la posición exacta del video y centramos el carrusel
                const targetScrollLeft = videoItems[index].offsetLeft - (videoTrack.clientWidth / 2) + (videoItems[index].clientWidth / 2);
                videoTrack.scrollTo({
                    left: targetScrollLeft,
                    behavior: 'smooth'
                });
                
                // Reanudar el carrusel 3 segundos después del clic
                setTimeout(() => isVideoHovered = false, 3000); 
            });
            videoPagination.appendChild(dot);
        });

        // --- C. Detectar video visible al hacer scroll y actualizar puntos (Sincronización) ---
        function updateActiveDot() {
            // Calculamos el centro actual del viewport del carrusel
            const centerOfTrack = videoTrack.scrollLeft + (videoTrack.clientWidth / 2);
            let closestIndex = 0;
            let minDistance = Infinity;

            // Buscamos cuál video está más cerca del centro
            videoItems.forEach((video, index) => {
                const videoCenter = video.offsetLeft + (video.clientWidth / 2);
                const distance = Math.abs(centerOfTrack - videoCenter);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });

            // Si el índice cambió, actualizamos las clases visuales de los puntos
            if (currentVideoIndex !== closestIndex) {
                currentVideoIndex = closestIndex;
                const dots = videoPagination.querySelectorAll('.carousel-dot');
                dots.forEach((dot, index) => {
                    if (index === currentVideoIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }
        }

        // Escuchamos el evento 'scroll' nativo del carrusel para actualizar los puntos
        videoTrack.addEventListener('scroll', updateActiveDot);


        // --- D. Lógica de Auto-Scroll (Integrada con los puntos) ---
        // Pausar auto-scroll si interactúan (mouse/touch)
        videoTrack.addEventListener('mouseenter', () => isVideoHovered = true);
        videoTrack.addEventListener('mouseleave', () => isVideoHovered = false);
        videoTrack.addEventListener('touchstart', () => isVideoHovered = true);
        videoTrack.addEventListener('touchend', () => {
            setTimeout(() => isVideoHovered = false, 3000); 
        });

        // Intervalo: Mover el carrusel cada 4 segundos
        setInterval(() => {
            if (!isVideoHovered) {
                // El auto-scroll moverá el carrusel, y el evento 'scroll' de arriba actualizará el punto activo automáticamente.
                const scrollAmount = videoTrack.querySelector('.video-item').offsetWidth + 30; // 30 is gap from CSS
                const reachedEnd = videoTrack.scrollLeft + videoTrack.clientWidth >= videoTrack.scrollWidth - 10;

                if (reachedEnd) {
                    // Si llegó al final, regresa suavemente al primero
                    videoTrack.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    // Si no, avanza un video hacia la derecha
                    videoTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }
        }, 4000); // 4 segundos de pausa
    }
    /* ==========================================================================
       8. EVENTOS DE CIERRE (MODAL)
       ========================================================================== */
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restaurar scroll de la página
        
        // Pausar absolutamente toda la música al cerrar la ventana
        const audios = modalTracklist.querySelectorAll('audio');
        audios.forEach(audio => audio.pause());
    }

    // Cerrar al hacer clic en el botón (X)
    closeModalBtn.addEventListener('click', closeModal);

    // Cerrar al hacer clic afuera de la tarjeta (en el área oscura)
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

});