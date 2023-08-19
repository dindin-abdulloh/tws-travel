<template>
  <section class="bg-[#35B197] pt-6 pb-10" :id="id">
    <div
      class="flex flex-col lg:flex-row px-5 gap-6 lg:container lg:px-[130px] mt-10 lg:mt-14"
    >
      <div class="flex flex-col gap-4 lg:w-1/3">
        <div>
          <h3 class="text-white font-medium text-xl">TWS Travel</h3>
          <p class="text-white font-normal pt-3">
            Perusahaan berdiri secara resmi dengan nama PT. Thoiba Sejahtera Wisaya. Kami adalah Perusahaan yang bergerak di bidang Jasa Umrah. Salah satu travel Umrah yang asli domisili Tasikmalaya dengan Akreditasi A. Telah melayani berbagai macam perjalanan Umrah Regular maupun Plus Negara lain seperti Turkey, Aqsa, Mesir, Oman dll.
          </p>
        </div>
        <img class="w-3/4" src="../assets/images/background/mitra.png" alt="" />
      </div>

      <div class="flex flex-col gap-6 lg:w-1/3">
        <div>
          <h3 class="text-white font-medium text-xl">
            KANTOR TWS Travel
          </h3>
          <div class="pt-2">
            <i class="mdi mdi-map-marker text-2xl text-[#9b7e30]"></i>
            <a class="text-white font-normal" href="https://www.google.com/maps/place/TSW+Tour+%26+Travel+-+Haji+%26+Umrah/@-7.3465464,108.1071766,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6f544317f3a669:0xb8e310a576f93c08!8m2!3d-7.3465464!4d108.1097515!16s%2Fg%2F11c2pw8p_q?entry=ttu">
              Jl. Raya Cikeleng No. 9, Singaparna, Kec. Singaparna, Kabupaten Tasikmalaya, Jawa Barat 46411</a
            >
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4 lg:flex-grow">
        <div>
          <h3 class="text-white font-medium text-xl">KONTAK INFO</h3>
          <ul class="mt-4">
            <li>
              <i class="mdi mdi-phone mr-4 text-xl text-[#9b7e30]"></i>
              <a class="text-gray-600 text-lg" href="https://wa.me/62811212174">0811212174</a>
            </li>
            <li>
              <i class="mdi mdi-phone mr-4 text-xl text-[#9b7e30]"></i>
              <a class="text-gray-600 text-lg" href="https://wa.me/628112018899">08112018899</a>
            </li>
            <li>
              <i class="mdi mdi-phone mr-4 text-xl text-[#9b7e30]"></i>
              <a class="text-gray-600 text-lg" href="https://wa.me/081320202174">081320202174</a>
            </li>
            <li>
              <i class="mdi mdi-email-multiple mr-4 text-xl text-[#9b7e30]"></i>
              <a class="text-gray-600 text-lg" href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=tswumrahajj@gmail.com"
                >tswumrahajj@gmail.com</a
              >
            </li>
            <li>
              <i class="mdi mdi-email-multiple mr-4 text-xl text-[#9b7e30]"></i>
              <a class="text-gray-600 text-lg" href=""
                >namiratourntravel@gmail.com</a
              >
            </li>
          </ul>
        </div>
        <div class="border-b-[2px] pb-4">
          <h3 class="text-white font-medium text-xl">PEMBAYARAN</h3>
          <h5 class="text-white font-medium text-lg">
            Rekening Bank Syariah Indonesia :
          </h5>
          <h6 class="text-white font-normal text-lg">
            <span class="font-thin">a.n</span> PT Thoiba Sejahtera Wisata
          </h6>
          <ul>
            <li>
              <h6 class="text-white font-normal text-lg">
                <span class="font-thin">IDR : No. Rek</span> 7213160251
              </h6>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="lg:container lg:px-[130px] mt-8 mb-4 invisible lg:visible">
      <hr class="h-[1px] bg-white" />
    </div>
    <div
      class="flex flex-col lg:flex-row lg:justify-between lg:container lg:px-[130px] px-4 mt-3"
    >
      <div>
        <h6 class="text-white font-normal text-center text-sm">
          Copyright © 2022-2023 PT. THOIBA SEJAHTERA WISATA
        </h6>
      </div>
      <div class="mt-4 lg:mt-0">
        <div class="flex flex-row justify-center gap-5">
          <div
            class="bg-gray-500 hover:bg-[#3b5998] w-[40px] h-[40px] px-2 py-1 rounded-full"
          >
            <a href="https://www.facebook.com/TSWTourTravel/"
              ><i class="mdi mdi-facebook text-2xl text-white"></i
            ></a>
          </div>
          <div
            class="bg-gray-500 hover:bg-[#e83e8c] w-[40px] h-[40px] px-2 py-1 rounded-full"
          >
            <a href="https://www.instagram.com/tswht_hajjumra/"
              ><i class="mdi mdi-instagram text-2xl text-white"></i
            ></a>
          </div>
          <div
            class="bg-gray-500 hover:bg-[#dc3545] w-[40px] h-[40px] px-2 py-1 rounded-full"
          >
            <a href=""><i class="mdi mdi-youtube text-2xl text-white"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["id"],
};
</script>

<style>
</style>