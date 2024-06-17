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
        $('#vibeji-ham').off('click').on('click', function() {
            $(this).toggleClass('open');
            $('.topnav__center').toggleClass('open');
        });
        $('.form-search .btn_reset').click(function() {
            $('.form-search').removeClass("active");
        });
    }


    //slide Gallery
    function swiper() {
        var swiperslidedate = new Swiper(".slide-date .swiper-container", {
            slidesPerView: 4,
            spaceBetween: 4,
        });
        var swiperslidebanner = new Swiper(".slide-banner .swiper-container", {
            slidesPerView: 1,
            spaceBetween: 12,
            pagination: {
                el: ".slide-banner .swiper-pagination",
                clickable: true,
            },
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
            $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
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