(function($) {
    "use strict";
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    }

    //backToTop
    function backToTop() {
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 200) {
                $('#to_top').fadeIn();
                $('.tp1-topnav').addClass('sticky');
            } else {
                $('#to_top').fadeOut();
                $('.tp1-topnav').removeClass('sticky');
            }
        });


        $("#to_top").click(function() {
            $("html, body").animate({
                scrollTop: 0
            });
            return false;
        });
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 40) {
                $('.topnav ').addClass('sticky');
            } else {
                $('.topnav ').removeClass('sticky');
            }
        });
    }

    //onCLick
    function onCLick() {
        $(".dropdown").find(".dropbtn").click(function() {
            $(".dropdown").find('.dropdown-content').slideUp();
            if ($(this).next().css('display') == 'none') {
                $('.dropdown-content').slideUp();
                $(this).next().stop(true, true).slideDown();
                $('.dropdown').removeClass('active');
                $(this).parent().addClass('active');
                $(".form_suggest .input_search").focus();
            } else {
                $(this).parent().find('.dropdown-content').slideUp();
                $('.dropdown').removeClass('active');
            }
        });
        $(".dropdown-content").find("li").click(function() {
            var html = $(this).html();
            $(".dropbtn").html(html);
        });
        $(document).click(function() {
            $(".dropdown .dropbtn").removeClass('active');
            $(".dropdown").find('.dropdown-content').slideUp();
            $(".form-down").slideUp();
        });
        $(".dropdown .dropbtn").click(function(event) {
            event.stopPropagation();
        });

        $('#vibeji-ham').off('click').on('click', function() {
            $(this).toggleClass('open');
            $('.topnav__center').toggleClass('open');
        });

        $('.form-search input[name="keyword"]').on('keyup', (e) => {
            let query = $(e.currentTarget).val();
            if (query.length) {
                $(e.currentTarget).parents('.form-search').addClass('active');
                return;
            } else {
                $(e.currentTarget).parents('.form-search').removeClass('active');
                return;
            }
        });
        $('.form-search .btn_reset').click(function() {
            $('.form-search').removeClass("active");
        });


    }


    //slide Gallery
    function swiper() {
        var swiperslidedate = new Swiper(".slide-date .swiper-container", {
            slidesPerView: 5,
            spaceBetween: 4,
            navigation: {
                nextEl: ".slide-date .swiper-button-next",
                prevEl: ".slide-date .swiper-button-prev",
            },
            breakpoints: {
                991: {
                    slidesPerView: 3,
                },
                414: {
                    slidesPerView: 2,
                }
            }
        });
        var swiperslidebanner = new Swiper(".slide-banner .swiper-container", {
            slidesPerView: 3,
            spaceBetween: 12,
            navigation: {
                nextEl: ".slide-banner .swiper-button-next",
                prevEl: ".slide-banner .swiper-button-prev",
            },
            pagination: {
                el: ".slide-banner .swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                991: {
                    slidesPerView: 2,
                },
                414: {
                    slidesPerView: 1,
                }
            }
        });
        var swiperslidebannertour = new Swiper(".slide-banner-tour .swiper-container", {
            slidesPerView: 1,
            speed: 500,
            effect: 'fade',
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: ".slide-banner-tour .swiper-button-next",
                prevEl: ".slide-banner-tour .swiper-button-prev",
            },
            pagination: {
                el: ".slide-banner-tour .swiper-pagination",
                clickable: true,
            }
        });

        var swiperslidetourcountry = new Swiper(".tour-in-country .swiper-container", {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: ".tour-in-country .swiper-button-next",
                prevEl: ".tour-in-country .swiper-button-prev",
            },
            breakpoints: {
                991: {
                    slidesPerView: 2.5,
                },
                414: {
                    slidesPerView: 1.5,
                }
            }
        });
        var swiperslidetourinternational = new Swiper(".international-tour .swiper-container", {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: ".international-tour .swiper-button-next",
                prevEl: ".international-tour .swiper-button-prev",
            },
            breakpoints: {
                991: {
                    slidesPerView: 2.5,
                },
                414: {
                    slidesPerView: 1.5,
                }
            }
        });

        var swiperslidetourholiday = new Swiper(".holiday-tour .swiper-container", {
            slidesPerView: 3,
            spaceBetween: 20,
            navigation: {
                nextEl: ".holiday-tour .swiper-button-next",
                prevEl: ".holiday-tour .swiper-button-prev",
            },
            breakpoints: {
                991: {
                    slidesPerView: 2.5,
                },
                414: {
                    slidesPerView: 1.5,
                }
            }
        });

        var swiperslidetourcombo = new Swiper(".combo-tour .swiper-container", {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: ".combo-tour .swiper-button-next",
                prevEl: ".combo-tour .swiper-button-prev",
            },
            breakpoints: {
                991: {
                    slidesPerView: 2.5,
                },
                414: {
                    slidesPerView: 1.5,
                }
            }
        });


        var swiperslideflight = new Swiper(".slide-flight .swiper-container", {
            slidesPerView: 3,
            spaceBetween: 16,
            loop: true,
            navigation: {
                nextEl: ".slide-flight .swiper-button-next",
                prevEl: ".slide-flight .swiper-button-prev",
            },
            breakpoints: {
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 1,
                }
            }
        });

        var swiperPopular = new Swiper(".slide-popular .swiper-container", {
            slidesPerView: 4,
            spaceBetween: 16,
            navigation: {
                nextEl: ".slide-popular .swiper-button-next",
                prevEl: ".slide-popular .swiper-button-prev",
            },
            breakpoints: {
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                414: {
                    slidesPerView: 1,
                }
            }
        });
        var swiperTrademark = new Swiper(".slide-trademark .swiper-container", {
            slidesPerView: 5,
            spaceBetween: 16,
            navigation: {
                nextEl: ".slide-trademark .swiper-button-next",
                prevEl: ".slide-trademark .swiper-button-prev",
            },
            breakpoints: {
                991: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 2,
                },
                414: {
                    slidesPerView: 1,
                }
            }
        });

        var swiperDoitac = new Swiper(".slide-doitac .swiper-container", {
            slidesPerView: 5,
            slidesPerColumn: 2,
            spaceBetween: 16,
            loop: true,
            navigation: {
                nextEl: ".slide-doitac .swiper-button-next",
                prevEl: ".slide-doitac .swiper-button-prev",
            },
            breakpoints: {
                991: {
                    slidesPerView: 2,
                },
                414: {
                    slidesPerView: 1,
                }
            }
        });

        var swiperSlideCustomer = new Swiper(".slide-customer .swiper-container", {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: ".slide-customer .swiper-button-next",
                prevEl: ".slide-customer .swiper-button-prev",
            },
        });
        var swiperCalendar = new Swiper(".calendar-custom .swiper-container", {
            slidesPerView: 3,
            spaceBetween: 36,
            loop: true,
            navigation: {
                nextEl: ".calendar-custom .swiper-button-next",
                prevEl: ".calendar-custom .swiper-button-prev",
            },
            breakpoints: {
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 1,
                }
            }
        });

    }

    function onSelect2() {
        $(".select2").select2();
        var dataNumber = [{
                id: 1,
                text: "+84",
                src: "images/icons/viet-nam.png",
            },
            {
                id: 2,
                text: "+64",
                src: "images/icons/viet-nam.png",
            },
        ];
        $("#select-sort").select2({
            minimumResultsForSearch: -1,
            data: dataNumber,
            escapeMarkup: function(markup) {
                return markup;
            },
            templateResult: function(data) {
                return `<img src='${data.src}'></img><span>${data.text}</span>`;
            },
            templateSelection: function(data) {
                return `<img src='${data.src}'></img><span>${data.text}</span>`;
            },
        });

        var dataAddress = [{
                id: 1,
                use: '<use xlink:href="images/icons/icon.svg#address"></use>',
                text: '<div class="address-code">SGN (</div><div class="address-name name">Hồ Chí Minh</div>)',
                // src: '<div class="address">\n\t\t\t\t<div class="name">Hà Nội</div><div>HAN - Sân bay Nội Bài</div>\n\t\t\t</div>',
            },
            {
                id: 2,
                use: '<use xlink:href="images/icons/icon.svg#address"></use>',
                text: '<div class="address-code">HAN (</div><div class="address-name name">Hà Nội</div>)',
            },
            {
                id: 3,
                use: '<use xlink:href="images/icons/icon.svg#address"></use>',
                text: '<div class="address-code">HAN (</div><div class="address-name name">Hà Nội</div>)',
            },
            {
                id: 4,
                use: '<use xlink:href="images/icons/icon.svg#address"></use>',
                text: '<div class="address-code">HAN (</div><div class="address-name name">Hà Nội</div>)',
            },
            {
                id: 5,
                use: '<use xlink:href="images/icons/icon.svg#address"></use>',
                text: '<div class="address-code">SGN (</div><div class="address-name name">Hồ Chí Minh</div>)',
            },
            {
                id: 6,
                use: '<use xlink:href="images/icons/icon.svg#address"></use>',
                text: '<div class="address-code">SGN (</div><div class="address-name name">Hồ Chí Minh</div>)',
            },
        ];
        $("#select-address").select2({
            minimumResultsForSearch: 1,
            dropdownCssClass: "select-address-custom",
            data: dataAddress,
            escapeMarkup: function(markup) {
                return markup;
            },
            templateResult: function(data) {
                return `<div class="item-address"><svg class="icon-svg">${data.use}</svg><div class="address">${data.text}</div></div>`;
            },
        });
    }

    function myFunction() {
        /**MENU STICKY**/
        var top_start = $(".section-main").position().top - 8;
        if ($(window).scrollTop() >= top_start) {
            $('.wrap-search').addClass('sticky');
        } else if ($(window).scrollTop() <= top_start) {
            $('.wrap-search').removeClass('sticky');
        }
    }

    function datepicker() {
        $('input[name="birthday"]').daterangepicker({
            singleDatePicker: true,
            autoUpdateInput: false,
            locale: {
                cancelLabel: 'Clear'
            }
        });

        $('input[name="birthday"]').on('apply.daterangepicker', function(ev, picker) {
            $(this).val(picker.startDate.format('DD/MM/YYYY'));
            // $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
        });

        $('input[name="birthday"]').on('cancel.daterangepicker', function(ev, picker) {
            $(this).val('');
        });

        $('input[name="daterange"]').daterangepicker({
            autoUpdateInput: false,
            showDropdowns: true,
            drops: 'up',
            startDate: '01/01/2022',
            minDate: '01/01/2022',
            maxDate: '01/01/2024',
            locale: {
                "applyLabel": "Áp dụng",
                "cancelLabel": "Xóa",
                "daysOfWeek": [
                    "CN",
                    "T2",
                    "T3",
                    "T4",
                    "T5",
                    "T6",
                    "T7"
                ],
                "monthNames": [
                    "Tháng 1",
                    "Tháng 2",
                    "Tháng 3",
                    "Tháng 4",
                    "Tháng 5",
                    "Tháng 6",
                    "Tháng 7",
                    "Tháng 8",
                    "Tháng 9",
                    "Tháng 10",
                    "Tháng 11",
                    "Tháng 12"
                ],
                "firstDay": 1
            },
        }, function(start, end, label) {});
        //-- Event Binding
        $(".fromdate").daterangepicker({
            autoUpdateInput: false
        }).on('apply.daterangepicker', function(ev, picker) {
            $('.fromdate').val(picker.startDate.format('DD/MM/YYYY')).change();
            $('.todate').val(picker.endDate.format('DD/MM/YYYY')).change();

        }).on('cancel.daterangepicker', function(ev, picker) {
            $(this).val('');
        });
    }

    $(function() {
        backToTop();
        onCLick();
        swiper();
        onSelect2();
        datepicker();
    });
    window.onscroll = function() {
        myFunction()
    };

})(jQuery);