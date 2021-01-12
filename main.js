document.addEventListener('DOMContentLoaded', function() {
  
  // const btn_next     = document.querySelector('#btn-next'),
  //       btn_prev     = document.querySelector('#btn-prev'),
  //       slider_wrap  = document.querySelector('.slider__wrap'),
  //       slider_items = document.querySelectorAll('.slider__item');

  // let step_width = slider_items[0].offsetWidth;
  // let step = step_width;
  // let slider_wrap_width = step_width * slider_items.length;

  // console.log(step);
  // console.log(slider_items.length);
  // console.log(slider_wrap_width);

  // btn_next.addEventListener('click', function() { 
  //   if ( step < slider_wrap_width ) {
  //     for (const slide of slider_items) {
  //       slide.style.transform = "translateX(-" + step + "px)";
  //     }
  //     step += step_width;
  //   }
  //   if ( step == slider_wrap_width ) {
  //     for (const slide of slider_items) {
  //       slide.style.transform = "translateX(0px)";
  //     }
  //     step = step_width;
  //   }
  //   console.log(step);
  // });

  // btn_prev.addEventListener('click', function() { 
  //   if ( step < slider_wrap_width ) {
  //     for (const slide of slider_items) {
  //       slide.style.transform = "translateX(" + step + "px)";
  //     }
  //     step -= step_width;
  //   }
  //   if ( step == 0 ) {
  //     for (const slide of slider_items) {
  //       slide.style.transform = "translateX(-" + (slider_items[0].offsetWidth * (slider_items.length - 2)) + "px)";
  //     }
  //     step = step_width;
  //   }
  //   console.log(step);
  // });


  let s_imgs = [
    '<img src="https://i.pinimg.com/originals/83/7f/9f/837f9f1f2e4d15c7e6d0d6c109ab9a0a.jpg" alt="">', 
    '<img src="https://oboi.ws/wallpapers/17_12401_oboi_zelenyj_firewatch_1920x1080.jpg" alt="">', 
    '<img src="https://images.wallpaperscraft.ru/image/les_doroga_tuman_196824_1920x1080.jpg" alt="">',
    '<img src="https://images.wallpaperscraft.ru/image/podarki_korobki_pakety_196818_1920x1080.jpg" alt="">',
    '<img src="https://images.wallpaperscraft.ru/image/derevia_podsvetka_neon_196815_1920x1080.jpg" alt="">',
    '<img src="https://images.wallpaperscraft.ru/image/piatna_kraska_steklo_196814_1920x1080.jpg" alt="">',
    '<img src="https://images.wallpaperscraft.ru/image/razvody_kraska_zhidkost_196845_1920x1080.jpg" alt="">',
    '<img src="https://images.wallpaperscraft.ru/image/bengalskie_ogni_iskry_svecha_196831_1920x1080.jpg" alt="">',
    '<img src="https://images.wallpaperscraft.ru/image/tsitata_vyskazyvanie_fraza_196821_1920x1080.jpg" alt="">',
    '<img src="https://images.wallpaperscraft.ru/image/ozero_gory_led_196827_1920x1080.jpg" alt="">',
    '<img src="https://images.wallpaperscraft.ru/image/les_reka_sneg_196812_1920x1080.jpg" alt="">'
  ];

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  let count_imgs = [];
  let img_num = 6;

  for (let i = 0; i < img_num; i++) {
    let used_num = getRandomInt(s_imgs.length);
    for (let j = 0; j < count_imgs.length; j++) {
      while (used_num == count_imgs[j]) {
        used_num = getRandomInt(i);
      }
    }
    count_imgs.push(used_num);
  }

  console.log(count_imgs);

  var img_wrap = document.querySelector('.img');
  for (i of count_imgs) {
    img_wrap.insertAdjacentHTML('beforeend', s_imgs[i]);
  }

  var imgs = document.querySelectorAll('.img img');
  imgs[0].classList.add('active-img');
  let offset = 0;

  // console.log(imgs.length);
  img_wrap.onclick = function() {
    console.log(offset);
    if (offset < imgs.length) {
      imgs[offset].classList.remove('active-img');
    }
    offset++;
    if (offset < imgs.length) {
      imgs[offset].classList.add('active-img');
    }
    if (offset == imgs.length) {
      offset = 0;
      imgs[offset].classList.add('active-img');
      imgs[imgs.length].classList.remove('active-img');
    }
  }

  // let past_num = [];

  // img_wrap.onclick = function() {
  //   let used_num = getRandomInt(s_imgs.length);
  //   while (used_num == past_num[past_num.length-1]) {
  //     used_num = getRandomInt(s_imgs.length);
  //   }
  //   past_num.push(used_num);
    
  //   console.log(used_num);
  //   console.log(past_num);
    
  //   img_wrap.innerHTML = s_imgs[past_num[past_num.length-1]];

  // }

});