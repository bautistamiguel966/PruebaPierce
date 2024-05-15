Vue.createApp({
    data() {
        return {
            productos: [],
            menuOpen: false,
            mostrarFlechas: false,
            mostrarPaginacion: false,
            mostrarLarge: window.innerWidth > 900,
            mostrarFooterLarge: window.innerWidth > 788,
            swiperMasVendidas: null,
            swiperTendencias: null,
        };
    },
    methods: {
        async obtenerProductos() {
            try {
                // const response = await axios.get("https://fakestoreapi.com/products");
                const response = await axios.get("./assets/products.json");
                this.productos = response.data;
                this.inicializarSwiper();
            } catch (error) {
                console.log("Hubo un error al obtener los productos.");
            }
        },
        inicializarSwiper() {
            // Destruir instancias anteriores de Swiper si existen
            if (this.swiperMasVendidas) {
                this.swiperMasVendidas.destroy(true, true);
            }
            if (this.swiperTendencias) {
                this.swiperTendencias.destroy(true, true);
            }
            this.swiperMasVendidas = new Swiper(".mySwiperMasVendidas", {
                slidesPerView: 'auto',
                spaceBetween: 20, // Espacio entre las diapositivas
                // slidesPerGroup: 5,
                // centeredSlides: true,
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next-mas-vendidas',
                    prevEl: '.swiper-button-prev-mas-vendidas',
                },
                breakpoints: {
                    250: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 1,
                    },
                    350: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    400: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    600: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    700: {
                        slidesPerView: 2,
                        spaceBetween: 90,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        pagination: false,
                    },
                    800: {
                        slidesPerView: 2,
                        spaceBetween: 200,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        pagination: false,
                    },
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 70,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 60,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                    },
                    1370: {
                        slidesPerView: 4,
                        spaceBetween: 80,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                    },
                    1390: {
                        slidesPerView: 4,
                        spaceBetween: 100,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                    },
                    1440: {
                        slidesPerView: 5,
                        spaceBetween: 37,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                    }
                }
            });
            this.swiperTendencias = new Swiper(".mySwiper", {
                slidesPerView: 'auto',
                spaceBetween: 20, // Espacio entre las diapositivas
                // slidesPerGroup: 5,
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    250: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    350: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    400: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    600: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    700: {
                        slidesPerView: 2,
                        spaceBetween: 90,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        pagination: false,
                    },
                    800: {
                        slidesPerView: 2,
                        spaceBetween: 200,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        pagination: false,
                    },
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 70,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 60,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                    },
                    1370: {
                        slidesPerView: 4,
                        spaceBetween: 80,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                    },
                    1390: {
                        slidesPerView: 4,
                        spaceBetween: 100,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                    },
                    1440: {
                        slidesPerView: 5,
                        spaceBetween: 37,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                    }
                }
            });
        },


        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        actualizarVisibilidad() {
            this.mostrarFlechas = window.innerWidth >= 688;
            this.mostrarPaginacion = window.innerWidth < 688;
            this.mostrarLarge = window.innerWidth > 900;
            this.mostrarFooterLarge = window.innerWidth > 788;
            this.inicializarSwiper();

        }
    },
    mounted() {
        this.obtenerProductos();
        this.actualizarVisibilidad();
        window.addEventListener('resize', this.actualizarVisibilidad);
    },
}).mount("#app");