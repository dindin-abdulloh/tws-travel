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
        "https://static.republika.co.id/uploads/images/inpicture_slide/iai-tazkia-memberangkatkan-16-karyawan-dan-2-mahasiswa-terbaik_220319062649-872.jpg",
        "https://percayaumroh.com/wp-content/uploads/2022/08/19-september-011.jpg",
        "http://sentosawisata.com/wp-content/uploads/2014/10/Umroh-reguler.jpg",
      ],
      // modules: [Pagination],
    };
  },
}
</script>

<style>

</style>