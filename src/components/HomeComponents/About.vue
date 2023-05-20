<template>
  <div class="bg-[#f8f8f8]" :id="id">
    <div class="text-center pt-10">
      <h1 class="text-[26px] lg:text-[32px] font-bold text-gray-800">
        Tentang TWS Tour
      </h1>
      <div class="pt-2">
        <p class="text-gray-500 text-[18px] lg:text-[24px]">
          Mengenal Lebih Dalam Teman Perjalanan Anda
        </p>
      </div>
    </div>

    <div class="lg:container lg:px-[130px] py-14">
      <div class="flex flex-col lg:flex-row gap-5">
        <div class="lg:w-1/2">
          <swiper
            :grabCursor="true"
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
                  class="rounded-xl h-auto w-full opacity-90"
                  :src="slide"
                  alt=""
                />
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="px-4">
          <div class="mb-3">
            <p class="text-sm lg:text-lg text-gray-600">
              Perusahaan berdiri secara resmi pdata Tahun 2020 dengan nama PT Thoiba Sejahtera Wisata. Kami adalah perusahaan yang bergerak di bidang Jasa Umrah & Haji. Thoiba Sejahtera Wisata (TWS) melayani Jemaah dalam melaksanakan ibadah Umrah dimulai sejak tahun 2007. Alhamdulillah dalam setiap tahun telah berhasil memberangkatkan ribuan Jemaah. Kami berkomitmen sebagai pelayan terbaik untuk masyarakat dalam beribadah Haji dan Umrah, dengan memberikan pelayanan yang berkualitas dengan Harga yang kompetitif. Para pembimbing yang profesional dan berpengalaman, berdedikasi dan bersertifikat. Hotel dan maskapi penerbangan yang digunakan adalah yang terbaik di kelasnya agar Jamaah mendapatkan kenyamanan dalam beribadah.
            </p>
          </div>
          <div class="mb-3">
            <p class="text-sm lg:text-lg text-gray-600">
              Dalam Industri penerbangan kami memiliki peran penting sebagai charter flight dalam Haji dan Umroh Series atau Umrah Insentif serta block seat untuk grup insentif dari golongan korporasi (perusahaan). selalu berusaha maksimal untuk memberi kemudahan kepada Pelanggan yang akan melakukan perjalanan wisata atau ibadah dengan menyediakan semua kebutuhan Pelanggan, Mulai dari Tiket Pesawat, Reservasi Hotel, Paket Tour Domestik maupun Internasional, Pengurusan Paspor, visa sampai Penukaran Mata Uang Asing.
            </p>
          </div>
          <div class="mb-3">
            <p class="text-sm lg:text-lg text-gray-600">
              Sebagai bukti dedikasi dalam industri haji dan umrah, TSW Tour and Travel telah menjadi anggota dari Asosiasi KESTHURI.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// import { Pagination } from "swiper";
export default {
  props: ["id"],
  components: {
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
};
</script>

<style>
</style>