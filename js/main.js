// popup
$(document).ready(function(){
  function setCookie(name, value, expiredays){
    var todayDate = new Date();

    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + '=' + escape(value) + '; path=/; expires=' + todayDate.toGMTString() + ';';
  }

  $('html, body').css({'overflow': 'hidden', 'height': '100%'});

  $('.popup .close a').click(function(){
    $('.popup').fadeOut(0);
    $('html, body').css({'overflow': 'auto', 'height': '100%'});
  });

  $('.popup .never a').click(function(){
    $(this).addClass('active');

    if($(this).hasClass('active') == true){
      setCookie('exCookie','done',1);
    }

    $(this).parents('.popup').stop().fadeOut(0);
    $('html, body').css('overflow','visible');
  });

  var cookieData = document.cookie;

  if(cookieData.indexOf('exCookie=done') < 0){
      $('.popup').fadeIn(0);
      $('html, body').css('overflow','hidden');
  }else{
      $('.popup').fadeOut(0);
      $('html, body').css('overflow','visible');
  }
});

// scroll animation
$(document).ready(function(){
  $(window).scroll(function(){
    var top = $(window).scrollTop();
    var dev = $(window).innerHeight();

    if(dev > 812){ /* 아이패드 & 데스크탑 */
      if(top > 400 && top < 900){
        $('.introduce li:first-child').animate({'opacity':'1', 'margin-left':'0'}, 500);
        $('.introduce li:last-child').animate({'opacity':'1', 'margin-right':'0'}, 500);
      }else if( top > 900 && top < 1500){
        $('.wendelbo').animate({'opacity':'1', 'margin-top':'0'}, 500);
      }else if(top > 2700 && top < 3500){
        $('.artek').animate({'opacity':'1', 'margin-top':'0'}, 500);
      }else if(top > 3700 && top < 4700){
        $('.brands').animate({'opacity':'1', 'margin-bottom':'0'}, 500);
        $('.brands_mobile').animate({'opacity':'1', 'margin-bottom':'0'}, 500);
      }else if(top > 4700){
        $('.showroom').animate({'opacity':'1'}, 500);
      }
    }else if(dev > 569 && dev <= 812){ /* 일반 휴대폰 */
      if(top > 400 && top < 500){
        $('.introduce li:first-child').animate({'opacity':'1', 'margin-left':'0'}, 500);
        $('.introduce li:last-child').animate({'opacity':'1', 'margin-right':'0'}, 500);
      }else if( top > 900 && top < 1700){
        $('.wendelbo').animate({'opacity':'1', 'margin-top':'0'}, 500);
      }else if(top > 1700 && top < 2000){
        $('.artek').animate({'opacity':'1', 'margin-top':'0'}, 500);
      }else if(top > 2000 && top < 2700){
        $('.brands_mobile').animate({'opacity':'1', 'margin-bottom':'0'}, 500);
      }else if(top > 2700){
        $('.showroom').animate({'opacity':'1'}, 500);
      }
    }else{  /* 작은 휴대폰 */
      if(top > 10 && top < 100){
        $('.introduce li:first-child').animate({'opacity':'1', 'margin-left':'0'}, 500);
        $('.introduce li:last-child').animate({'opacity':'1', 'margin-right':'0'}, 500);
      }else if( top > 900 && top < 1500){
        $('.wendelbo').animate({'opacity':'1', 'margin-top':'0'}, 500);
      }else if(top > 1500 && top < 1800){
        $('.artek').animate({'opacity':'1', 'margin-top':'0'}, 500);
      }else if(top > 1800 && top < 2200){
        $('.brands_mobile').animate({'opacity':'1', 'margin-bottom':'0'}, 500);
      }else if(top > 2200){
        $('.showroom').animate({'opacity':'1'}, 500);
      }
    }
  });
});


// gnb
$(document).ready(function(){

  $('.gnb').hover(function(){
    $('.sub_nav, .gnbbg').stop().fadeIn(0);
    $('.gnb > li > a').css('color', '#000');
    $('.gnb_group h1').css('opacity', 0);
    $('.gnb_group .t_nav').css('opacity', 0);
    $('#search_box').css('border-color', '#000');
    $('#search_box').css('color', '#000');
  }, function(){
    $('.sub_nav, .gnbbg').stop().fadeOut(0);
    $('.gnb > li > a').css('color', '#fff');
    $('.gnb_group h1').css('opacity', 1);
    $('.gnb_group .t_nav').css('opacity', 1);
    $('#search_box').css('border-color', '#fff');
    $('#search_box').css('color', '#fff');
  });


  $('.t_nav .panel').click(function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    if($(this).hasClass('active') == true){
      $('.sub_nav, .gnbbg').stop().fadeIn(0);
      $('.gnb > li > a').css('color', '#000');
      $('.gnb_group h1').css('opacity', 0);
      $('.gnb_group .t_nav').css('opacity', 0);
    }else{
      $('.sub_nav, .gnbbg').stop().fadeOut(0);
      $('.gnb > li > a').css('color', '#fff');
      $('.gnb_group h1').css('opacity', 1);
      $('.gnb_group .t_nav').css('opacity', 1);
    }
  });
});


// gnb-mobile
$(document).ready(function(){
  $('.m_panel').click(function(){
    $('.open').fadeIn(0);
    $('.m_gnb_group > ul > li img').fadeOut(0);
  });
  $('.open_icon > ul > .m_panel').click(function(){
    $('.open').fadeOut(0);
    $('.m_gnb_group > ul > li img').fadeIn(0);
    $('.m_sub_nav').stop().slideUp('fast');
  });
});

$(document).ready(function(){
  $('.center > ul > li > a').click(function(e){
    e.preventDefault();

      var has = $(this).hasClass('active');
      if(has){
        $(this).removeClass('active');
        $(this).next().stop().slideUp(); 
      }else{
        $('.m_nain_nav').removeClass('active');
        $(this).addClass('active');
        $('.m_sub_nav').stop().slideUp('fast');
        $(this).next().stop().slideDown('fast');
      }
  });
});


// searchbox
$(document).ready(function(){
  $('.t_nav .icon').click(function(e){
    e.preventDefault();
    var dev = $(window).innerHeight();
    $(this).toggleClass('active');

    if($(dev) < 2000){
      if($(this).hasClass('active') == true){ $('#search_box').css('left', 0); }
      else{ $('#search_box').css('left', '25rem'); }}
    else{
      if($(this).hasClass('active') == true){ $('#search_box').css('left', 0);}
      else{ $('#search_box').css('left', '50rem'); }}
  });
});


// main slider
$(document).ready(function(){
   var swiper = new Swiper(".main .mySwiper", {
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
         el: ".main .swiper-pagination",
         clickable: true,
      },
      loop: true,
    });
});


// showroom slider
$(document).ready(function(){
  var swiper = new Swiper(".showroom .mySwiper", {
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
       el: ".showroom .swiper-pagination",
       clickable: true,
    },
    loop: true,
  });
});


// scrolltop
$(document).ready(function(){
  var btn = '.scroll_top a';
  var speed = 1200;
  var easing = 'easeOutQuart';

  $(window).scroll(function(){
    var top = $(window).scrollTop();
    if(top > 200){ $(btn).parent().fadeIn('slow'); }
    else{ $(btn).parent().fadeOut('slow'); }
  });

  $(btn).click(function(e){
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, speed, easing);
  });
});