<template>
  <section class="bg-[#35B197] pt-6 pb-10" :id="id">
    <div
      class="flex flex-col lg:flex-row px-5 gap-6 lg:container lg:px-[130px] mt-10 lg:mt-14"
    >
      <div class="flex flex-col gap-4 lg:w-1/3">
        <div>
          <h3 class="text-white font-medium text-xl">TWS TRAVEL</h3>
          <p class="text-white font-normal pt-3">
            Perusahaan berdiri secara resmi pada Tahun 2000 dengan nama PT.
            Namira. Kami adalah Perusahaan yang bergerak di bidang Jasa Umrah &
            Haji, Jasa Land Arrangement Saudi, Provider Visa Umrah & Haji
            Furoda, Paket Umrah Plus, Paket Haji Furoda dan Paket Haji Khusus.
            Sebuah perusahaan travel yang berkepentingan di Negara yang berpusat
            di Kingdom of Saudi Arabia. Telah Melayani kurang lebih 20 Travel
            Umrah & Haji di Indonesia.
          </p>
        </div>
        <img class="w-3/4" src="../assets/images/background/mitra.png" alt="" />
      </div>

      <div class="flex flex-col gap-6 lg:w-1/3">
        <div>
          <h3 class="text-white font-medium text-xl">
            KANTOR REPRESENTATIVE NAMIRA TRAVEL
          </h3>
          <div class="pt-2">
            <i class="mdi mdi-map-marker text-2xl text-[#9b7e30]"></i>
            <a class="text-white font-normal" href="">
              Jl. Raya Radar Auri No. 12-14 (Patokan Pombensin Kec. Cimanggis),
              Mekarsari, Cimanggis, Depok</a
            >
          </div>
        </div>
        <div>
          <div>
            <h3 class="text-white font-medium text-xl">
              KANTOR IZIN PUSAT NAMIRA TRAVEL SK - PPIU & PIHK
            </h3>
            <div class="pt-2">
              <i class="mdi mdi-map-marker text-2xl text-[#9b7e30]"></i>
              <a class="text-white font-normal" href="">
                Jl. Profesor Doktor Soeharso No. 13, RT. 001 RW. 004, Kelurahan
                Jajar, Kecamatan Laweyan, Kota Surakarta, Provinsi Jawa
                Tengah</a
              >
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4 lg:flex-grow">
        <div>
          <h3 class="text-white font-medium text-xl">KONTAK INFO</h3>
          <ul class="mt-4">
            <li>
              <i class="mdi mdi-phone mr-4 text-xl text-[#9b7e30]"></i>
              <a class="text-gray-600 text-lg" href="">0817141529</a>
            </li>
            <li>
              <i class="mdi mdi-phone mr-4 text-xl text-[#9b7e30]"></i>
              <a class="text-gray-600 text-lg" href="">0817141529</a>
            </li>
            <li>
              <i class="mdi mdi-phone mr-4 text-xl text-[#9b7e30]"></i>
              <a class="text-gray-600 text-lg" href="">0817141529</a>
            </li>
            <li>
              <i class="mdi mdi-email-multiple mr-4 text-xl text-[#9b7e30]"></i>
              <a class="text-gray-600 text-lg" href=""
                >namiratourntravel@gmail.com</a
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
            Rekening Bank Mandiri :
          </h5>
          <h6 class="text-white font-normal text-lg">
            <span class="font-thin">a.n</span> PT NAMIRA
          </h6>
          <ul>
            <li>
              <h6 class="text-white font-normal text-lg">
                <span class="font-thin">IDR : No. Rek</span> 156 001 902 312 8
              </h6>
            </li>
            <li>
              <h6 class="text-white font-normal text-lg">
                <span class="font-thin">USD : No. Rek</span> 156 001 902 312 8
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