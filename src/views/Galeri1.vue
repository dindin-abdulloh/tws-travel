<template>
  <section>
    <Navbar/>
    <div class="mt-28 container px-60 mb-6">
      <swiper
            :grabCursor="false"
            :loop="true"
            :effect="'creative'"
            :creativeEffect="{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }"
            class="mySwiper"
          >
            <swiper-slide v-for="(slide, id) in slides" :key="id">
              <div class="px-3">
                <img
                  class="h-auto w-full opacity-90"
                  :src="slide"
                  alt=""
                />
              </div>
            </swiper-slide>
          </swiper>
    </div>
    <Footer/>
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import satu from '@/assets/images/galeri/mesir/mesir1.jpeg';
import dua from '@/assets/images/galeri/mesir/mesir2.jpeg';
import tiga from '@/assets/images/galeri/mesir/mesir3.jpeg';
import empat from '@/assets/images/galeri/mesir/mesir4.jpeg';
import lima from '@/assets/images/galeri/mesir/mesir5.jpeg';
import enam from '@/assets/images/galeri/mesir/mesir6.jpeg';

export default {
  components: {
    Navbar,
    Footer,
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      slides: [
        satu,
        dua,
        tiga,
        empat,
        lima,
        enam
      ],
      // modules: [Pagination],
    };
  },
}
</script>

<style>

</style>