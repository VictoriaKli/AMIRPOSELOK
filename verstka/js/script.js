"use strict";

$(document).ready(function () {
  /* Константы
   ==========================================================================*/
  var body = $('body'),
      overlay = $('.js-overlay'),
      html = $('html'); // Хедер

  var search = $('.js-search-fixed'),
      searchDrop = $('.js-search-dropdown'),
      header = $('.js-header'),
      cartLink = $(".js-cart-link"),
      dropdownCartContainer = $(".js-fixed-cart"),
      cartItems = $(".js-fixed-cart-item"),
      personalLink = $('.js-header-personal-link'),
      personalDropdownContainer = $('.js-header-personal'),
      mobileBurgerLink = $('.js-mobile-burger'),
      mobileDropdown = $('.js-mobile-dropdown'); // =================================== //

  overlay.click(function () {
    $('.js-burger').removeClass('is-active');
    $('.js-header-catalog-new').removeClass('is-show');
    body.removeClass('dropdown-open');
  });

  function fixedHeader() {
    if ($(window).scrollTop() > header.height() && $(window).width() > 992) {
      body.addClass("is-fixed");
    } else {
      body.removeClass("is-fixed");
    }
  }

  fixedHeader();
  window.addEventListener("scroll", function () {
    fixedHeader();
  }, {
    passive: true
  });
  $('.js-burger').click(function () {
    $(this).removeClass('is-static');

    if (!$(this).hasClass('is-active')) {
      $(this).addClass('is-active');
      $(this).parents('.js-header').find('.js-header-catalog-new').addClass('is-show');
      body.addClass('dropdown-open');
    } else {
      $(this).removeClass('is-active');
      $(this).parents('.js-header').find('.js-header-catalog-new').removeClass('is-show');
      $(this).addClass('is-static');
      body.removeClass('dropdown-open');
    }
  });
  $('.js-burger-mob').click(function () {
    $(this).removeClass('is-static');

    if (!$(this).hasClass('is-active')) {
      $(this).addClass('is-active');
      $(this).parents('.js-header').find('.js-header-mobile').addClass('is-show');
      body.addClass('mobile-menu-open');
    } else {
      $(this).removeClass('is-active');
      $(this).parents('.js-header').find('.js-header-mobile').removeClass('is-show');
      body.removeClass('mobile-menu-open');
      $(this).addClass('is-static');
    }
  });

  function mobileMenuDropdown() {
    $('.js-mobile-menu-arrow').click(function () {
      var parent = $(this).parent(),
          dropdown = $(this).parents('.js-mobile-menu-item').find('.js-mobile-menu-list');

      if (!parent.hasClass('is-open')) {
        parent.addClass('is-open');
        dropdown.slideDown();
      } else {
        parent.removeClass('is-open');
        dropdown.slideUp();
      }
    });
  }

  mobileMenuDropdown();

  function resetHeader() {
    clearCatalog();
    clearSearch();
    headerBigCatalogClear();
    dropdownCartClear();
    dropdownPersonalClear();
    mobileMenuClear();
  }
  /* Слайдеры
  ==========================================================================*/


  var swiper = new Swiper('.js-homescreen-slider', {
    // grabCursor: true,
    effect: "creative",
    autoplay: {
      delay: 3000
    },
    loop: true,
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-10%", 0, -1]
      },
      next: {
        translate: ["100%", 0, 0]
      }
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        autoplay: {
          delay: 3000
        }
      }
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'swiper-pagination-bullet-custom',
      bulletActiveClass: 'swiper-pagination-bullet-custom--active',
      renderBullet: function renderBullet(index, className) {
        return "<div class=\"".concat(className, "\" data-index=\"").concat(index, "\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"37\" height=\"1\" viewBox=\"0 0 37 1\" fill=\"none\">\n            <rect x=\"1.30469\" width=\"36\" height=\"1\" fill=\"#FF0000\" fill-opacity=\"1\"/>\n          </svg>\n        </div>");
      }
    },
    // // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    on: {
      init: function init() {
        var _self = this;

        _self.el.style.setProperty('--delay', _self.params.autoplay.delay);

        _self.el.addEventListener('mouseenter', function () {
          // _self.el.classList.add('swiper--pause');
          _self.autoplay.stop();
        });

        _self.el.addEventListener('mouseleave', function () {
          // _self.el.classList.remove('swiper--pause');
          _self.autoplay.start();
        });
      }
    }
  });
  /* Главная страница анимации
  ==========================================================================*/

  var options = {
    root: null,
    rootMargin: '0px',
    threshold: .5
  };
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      var item = entry.target;

      if (entry.isIntersecting) {
        if (item.classList.contains('js-animation1')) {
          $('.js-animation1').addClass('is-animation');
        } else {}
      } // else {
      //   if ($('.js-animation1')) {
      //     $('.js-animation1').removeClass('is-animation');
      //   }
      // }

    });
  }, options); //

  var pageMap = document.querySelectorAll('.js-animation1');
  pageMap.forEach(function (i) {
    observer.observe(i);
  });
  var options2 = {
    root: null,
    rootMargin: '0px',
    threshold: .5
  };
  var observerHome = new IntersectionObserver(function (entries, observerHome) {
    entries.forEach(function (entry) {
      var item = entry.target;

      if (entry.isIntersecting) {
        if (item.classList.contains('js-homescreen')) {
          $('.js-header').removeClass('is-color');
        } else {}
      } else {
        if ($('.js-header')) {
          $('.js-header').addClass('is-color');
        }
      }
    });
  }, options2); //

  var homescreen = document.querySelectorAll('.js-homescreen');
  homescreen.forEach(function (i) {
    observerHome.observe(i);
  });
  var options3 = {
    root: null,
    rootMargin: '0px',
    threshold: .7
  };
  var observerImg = new IntersectionObserver(function (entries, observerImg) {
    entries.forEach(function (entry) {
      var item = entry.target;

      if (entry.isIntersecting) {
        if (item.classList.contains('js-animation2')) {
          $('.js-animation2').addClass('is-animation');
        } else {}
      } // else {
      //   if ($('.js-animation2')) {
      //     $('.js-animation2').removeClass('is-animation');
      //   }
      // }

    });
  }, options3); //

  var imgBlock = document.querySelectorAll('.js-animation2');
  imgBlock.forEach(function (i) {
    observerImg.observe(i);
  });
  /* Общее
  ==========================================================================*/

  $('.js-custom-scroll').mCustomScrollbar();

  function setPosition(parent, target) {
    var parentLeft = parent[0].getBoundingClientRect().left,
        parentWidth = parent.width();
    $(target).css('right', Math.round($(window).width() - (parentLeft + parentWidth)) + "px");
  }

  function withinBoundaries(selector, event) {
    return event.composedPath().includes(document.querySelector(selector));
  }

  function slickControlSlides(slickSelector) {
    var sliderSelector = $(slickSelector); // Объявляем селектор слайдера

    if (sliderSelector.hasClass("slick-initialized")) {
      // Проверяем наличие slick'а
      var paramSlides = sliderSelector.slick("slickGetOption", "slidesToShow"),
          // Получаем количество параметр количества слайдов
      slickSlides = sliderSelector.find(".slick-slide:not(.slick-cloned)"),
          // Получаем все сайлды кроме клонов
      slickArrows = sliderSelector.slick("slickGetOption", "arrows"),
          // Получаем количество параметр наличия стрелок
      slickInfinite = sliderSelector.slick("slickGetOption", "infinite"); // Проверяем наличие цикличности
      // Если слайдер не цикличный, то меняем состояние кнопок

      if (!slickInfinite) {
        // Устанавливаем селектор для навигации
        var nav = $(slickSelector).parent().find(".section__nav"); // Устанавливаем disabled по умолчанию для кнопки prev

        nav.find(".slider-prev").addClass("disabled");
        $(slickSelector).on("afterChange", function (event, slick, currentSlide, nextSlide) {
          // Снимаем класс для всех кнопок
          if (currentSlide >= 1) {
            nav.find(".slick-arrow").removeClass("disabled");
          } // Устанавливаем класс для кнопки prev


          if (currentSlide == 0) {
            nav.find(".slider-prev").addClass("disabled");
          } else {
            nav.find(".slider-prev").removeClass("disabled");
          } // Устанавливаем класс для кнопки next


          if (currentSlide == slickSlides.length - 1) {
            nav.find(".slider-next").addClass("disabled");
          } else {
            nav.find(".slider-next").removeClass("disabled");
          }
        });
      } // Отключаем трансформацию slick-track'а при недостатке слайдов


      paramSlides >= slickSlides.length ? sliderSelector.addClass("slick-no-transform") : sliderSelector.removeClass("slick-no-transform"); // Проверяем количество слайдов и отключаем стрелки

      if (paramSlides >= slickSlides.length) {
        $(slickSelector).parent().find(".section__nav").css('display', 'none');
      } else if (paramSlides === 1) {
        $(slickSelector).parent().find(".section__nav").css('display', 'none');
      } else {
        $(slickSelector).parent().find(".section__nav").css('display', 'flex');
      } // Убираем точки


      if (slickSlides.length == 1) {
        $(slickSelector).find(".slick-dots").css("opacity", "0");
      } // Устанавливаем прогрессбар для каждой точки


      if (slickSlides.length > 1 && $(slickSelector).find('.slick-dots').length && $(slickSelector).hasClass('is-progress') && !$(slickSelector).hasClass("has-progress")) {
        $(slickSelector).addClass("has-progress");
        $(_progressBarDotsSelector).find('svg').remove();

        var _progressBarDotsSelector = "".concat(slickSelector, " .slick-dots .slick-active button"),
            _progressBar = '',
            _dotsParams = {
          strokeWidth: 1,
          easing: 'linear',
          duration: 3000,
          color: '#FFFFFF',
          trailColor: '#ababac',
          trailWidth: 1,
          svgStyle: {
            width: '100%',
            height: '100%'
          }
        };

        if ($(slickSelector).hasClass("has-progress")) {
          _progressBar = new ProgressBar.Line(_progressBarDotsSelector, _dotsParams);

          _progressBar.animate(1);

          $(slickSelector).on('beforeChange', function (event, slick) {
            if (_progressBar !== '' && $(slickSelector).hasClass('slick-dotted')) {
              _progressBar.destroy();

              _progressBar = '';
            }
          });
          $(slickSelector).on('afterChange', function (event, slick) {
            if (_progressBar == '' && $(slickSelector).hasClass('slick-dotted')) {
              _progressBar = new ProgressBar.Line(_progressBarDotsSelector, _dotsParams);

              _progressBar.animate(1);
            } else {
              _progressBar = '';
            }
          });
        } else if (_progressBar !== '') {
          _progressBar.destroy();
        } else {
          _progressBar = '';
        }
      } // Устанавливаем обработчик события на ресайз


      if (!$(slickSelector).hasClass("observer")) {
        $(slickSelector).addClass("observer");
        window.addEventListener("resize", function () {
          slickControlSlides(slickSelector);
        }, {
          passive: true
        });
      }
    }
  } // Слайдеры


  $(".js-project-slider").on("init", function (event, slick) {
    $(".js-project-slider").css("opacity", "1");
  });
  $(".js-project-slider-nav").on("init", function (event, slick) {
    $(".js-project-slider-nav").css("opacity", "1");
  });
  slickControlSlides(".js-project-slider");
  slickControlSlides(".js-project-slider-nav");
  var slick_viewProj = document.querySelectorAll(".js-project-slider");
  var slick_navProj = document.querySelectorAll(".js-project-slider-nav");
  var slick_navProjCont = document.querySelectorAll(".js-project-arrows");

  for (var i = 0; i < slick_viewProj.length; i++) {
    $(slick_viewProj[i]).slick({
      dots: false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplaySpeed: 6000,
      speed: 300,
      swipe: true,
      pauseOnHover: false,
      pauseOnFocus: false,
      appendArrows: slick_navProjCont[i],
      prevArrow: '<button aria-label="Предыдущий слайд" class="slider-arrow slider-prev js-project-prev"><svg class="icon icon-arrow-prev"><use xlink:href="#icon-arrow-prev"></use></svg></button>',
      nextArrow: '<button aria-label="Следующий слайд" class="slider-arrow slider-next js-project-next"><svg class="icon icon-arrow-next"><use xlink:href="#icon-arrow-next"></use></svg></button>',
      asNavFor: slick_navProj[i],
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }]
    }).on('setPosition', function () {
      $(this).find('.slick-slide').height('auto');
      var slickTrack = $(this).find('.slick-track');
      var slickTrackHeight = $(slickTrack).height();
      $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
    });
    $(slick_navProj[i]).slick({
      dots: false,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      speed: 300,
      asNavFor: ".js-project-slider",
      focusOnSelect: true,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }]
    });
  }

  ;
  $(".js-product-detail").on("init", function (event, slick) {
    $(".js-product-detail").css("opacity", "1");
  });
  $(".js-product-detail").slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplaySpeed: 6000,
    speed: 300,
    swipe: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    appendArrows: $(".js-project-detail-arrows"),
    prevArrow: '<button aria-label="Предыдущий слайд" class="slider-arrow slider-prev js-project-prev"><svg class="icon icon-arrow-prev"><use xlink:href="#icon-arrow-prev"></use></svg></button>',
    nextArrow: '<button aria-label="Следующий слайд" class="slider-arrow slider-next js-project-next"><svg class="icon icon-arrow-next"><use xlink:href="#icon-arrow-next"></use></svg></button>',
    asNavFor: ".js-product-detail-nav",
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }]
  });
  slickControlSlides(".js-product-detail");
  $(".js-product-detail-nav").on("init", function (event, slick) {
    $(".js-product-detail-nav").css("opacity", "1");
  });
  $(".js-product-detail-nav").slick({
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 300,
    asNavFor: ".js-product-detail",
    focusOnSelect: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }]
  });
  slickControlSlides(".js-product-detail-nav");
  var slick_view = document.querySelectorAll(".js-project-plan-slider");
  var slick_nav = document.querySelectorAll(".js-plan-block .js-project-plan-slider-nav");
  $(".js-project-plan-slider").on("init", function (event, slick) {
    $(".js-project-plan-slider").css("opacity", "1");
  });

  for (var i = 0; i < slick_view.length; i++) {
    $(slick_view[i]).slick({
      dots: true,
      appendDots: slick_nav[i],
      customPaging: function customPaging(slider, i) {
        var thumb = jQuery(slider.$slides[i]).data();
        return '<a class="slider-nav__item">' + ('' + (i + 1)).slice(-2) + '</a>';
      },
      arrows: false,
      swipe: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 300,
      focusOnSelect: true
    });
  }

  slickControlSlides(".js-project-plan-slider"); //detail-plan

  $(".js-detail-plan").on("init", function (event, slick) {
    $(".js-detail-plan").css("opacity", "1");
  });
  $('.js-detail-plan').slick({
    dots: true,
    appendDots: $('.js-detail-plan-slider-nav'),
    customPaging: function customPaging(slider, t) {
      var thumb = jQuery(slider.$slides[t]).data();
      return '<a class="slider-nav__item">' + ('' + (t + 1)).slice(-2) + '</a>';
    },
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 900,
    cssEase: 'fade',
    focusOnSelect: true
  });
  slickControlSlides(".js-detail-plan");
  $(".js-news-slider").on("init", function (event, slick) {
    $(".js-news-slider").css("opacity", "1");
  });
  $(".js-news-slider").slick({
    dots: false,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplaySpeed: 2000,
    speed: 300,
    swipe: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    appendArrows: $(".js-news-slider-nav"),
    prevArrow: '<button aria-label="Предыдущий слайд" class="slider-arrow slider-prev js-project-prev"><svg class="icon icon-arrow-prev"><use xlink:href="#icon-arrow-prev"></use></svg></button>',
    nextArrow: '<button aria-label="Следующий слайд" class="slider-arrow slider-next js-project-next"><svg class="icon icon-arrow-next"><use xlink:href="#icon-arrow-next"></use></svg></button>',
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }]
  });
  slickControlSlides(".js-news-slider"); //

  $('.js-slider-change').click(function (e) {
    e.preventDefault();

    if ($('.js-catalog-photo').hasClass('is-active')) {
      $('.js-catalog-photo').removeClass('is-active');
      $('.js-plan-block').addClass('is-active');
    } else {
      if ($('.js-plan-block').hasClass('is-active')) {
        $('.js-catalog-photo').addClass('is-active');
        $('.js-plan-block').removeClass('is-active');
      }
    }
  });
  $('select').niceSelect();
  /* Инпуты в стиле материал
  ==========================================================================*/

  $(".js-material-input").each(function () {
    if ($(this).find("input,textarea").val()) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
  $(".js-material-input").find("input,textarea").focusin(function () {
    $(this).closest(".js-material-input").addClass("focus");
    if ($(window).width() < 992) $(this).parents(".modal").css("overflow-y", "hidden");
  });
  $(".js-material-input").find("input,textarea").focusout(function () {
    $(this).closest(".js-material-input").removeClass("focus");
    if ($(window).width() < 992) $(this).parents(".modal").css("overflow-y", "auto");
  });

  function onInput() {
    if ($(this).val()) {
      $(this).closest(".js-material-input").addClass("active");
    } else {
      $(this).closest(".js-material-input").removeClass("active");
    }
  }

  $("body").on("input", ".js-material-input input", onInput);
  $("body").on("input", ".js-material-input textarea", onInput);
  $(".modal").on("touchstart", function () {
    $(this).css("overflow-y", "auto");
  });
  $(".js-touchspin").TouchSpin();
  $(".js-touchspin-plus").click(function (e) {
    e.preventDefault();
    $(this).parent().find(".js-touchspin").trigger("touchspin.uponce");
  });
  $(".js-touchspin-minus").click(function (e) {
    e.preventDefault();
    $(this).parent().find(".js-touchspin").trigger("touchspin.downonce");
  });
  /* Маска для телефонов
  ==========================================================================*/

  var phones = document.getElementsByClassName("js-phone");

  for (var _i = 0; _i < phones.length; _i++) {
    var cleave = new Cleave(phones[_i], {
      numericOnly: true,
      delimiters: [" (", ") ", "-", "-"],
      blocks: [1, 3, 3, 2, 2]
    });
  }
});
$(window).on('load', function () {
  $('.js-preloader').addClass('is-hide');
});