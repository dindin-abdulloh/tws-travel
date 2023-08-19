<template>
  <div>
    <Navbar />
    <div class="hero-parallax">
      <!-- <div class="hero-image"></div>
      <div class="hero-text">
        <h1 class="text-4xl font-bold text-white">Hero Parallax</h1>
        <p class="text-lg text-white mt-4">
          Example of a hero parallax with Tailwind and VueJS
        </p>
      </div> -->
      <div class="lg:container px-4 lg:px-[130px] mt-8">
        <h1 v-if="id == 1" class="text-white font-bold text-3xl lg:text-5xl">
          UMRAH REGULER AGUSTUS 2023
        </h1>
        <h1 v-else-if="id == 2" class="text-white font-bold text-3xl lg:text-5xl">
          Umrah Plus Turkey
        </h1>
        <h1 v-else class="text-white font-bold text-3xl lg:text-5xl">
          Umrah Regular 2023
        </h1>
        <div class="bg-[#00A784] h-2 w-28 mt-2 rounded-md"></div>
      </div>
    </div>
    <div class="py-4 border-b-[1px]">
      <div class="lg:container px-4 lg:px-[130px]">
        <a class="text-gray-700 text-lg font-normal">Deskripsi</a>
      </div>
    </div>
    <div class="lg:container lg:px-[130px] flex flex-col lg:flex-row gap-8 mt-16">
      <div class="lg:w-[60%] px-4 lg:px-0 w-full pb-8">
        <img v-if="id == 1" src="../assets/images/paket/umrah_agustus.jpeg" alt="" />
        <img v-else-if="id == 2" src="../assets/images/paket/turkey.png" alt="" />
        <img v-else src="../assets/images/paket/reguler.jpeg" alt="" />
        <div class="pt-6 text-[#555]">
          <h1 class="text-[#333] font-normal text-3xl">Deskripsi</h1>

          <!-- <div class="mt-6 text-[#555]">
            <p>"Umroh Sejarah Bangkitnya Islam"</p>
            <p>Umroh Plus Badr & Thaif</p>
          </div> -->

          <div v-if="id == 2">
            <h2 class="font-bold">
              Untuk Detail Paket Lebih Lanjut Silahkan Hubungi CS KAMI.
            </h2>
          </div>

          <div class="mt-6 text-[#555]">
            <h3 class="font-semibold">PROGRAM :</h3>
            <ul class="ml-6" v-if="id == 1">
              <li class="list-disc">Paket Umroh 2 Jumat</li>
              <li class="list-disc">PROGRAM 14 HARI PP</li>
            </ul>

            <ul class="ml-6" v-else-if="id == 2">
              <li class="list-disc">Paket Umroh Plus Tukey 2023</li>
            </ul>

            <ul class="ml-6" v-else>
              <li class="list-disc">Paket Umroh Bulan Oktober, November, Desember 2023</li>
            </ul>
          </div>

          <div class="mt-6 text-[#555]">
            <h3 class="font-semibold">PENERBANGAN :</h3>
            <ul class="ml-6" v-if="id == 2">
              <li class="list-disc">Hubungi Travel</li>
            </ul>
            <ul class="ml-6" v-else>
              <li class="list-disc">🛫 Garuda Indonesia (Direct Flight )</li>
            </ul>
          </div>

          <div class="mt-6 text-[#555]">
            <h3 class="font-semibold">HOTEL :</h3>
            <ul class="ml-6" v-if="id == 1">
              <li class="list-disc">🏨 Mekkah *4</li>
              <li class="list-disc">🏨 Madinah *3</li>
            </ul>

            <ul class="ml-6" v-else-if="id == 2">
              <li class="list-disc">🏨 Mekkah *3/*4/*5</li>
              <li class="list-disc">🏨 Madinah *3/*4/*5</li>
            </ul>

            <ul class="ml-6" v-else>
              <li class="list-disc">🏨 Mekkah *3/*4/*5</li>
              <li class="list-disc">🏨 Madinah *3/*4/*5</li>
            </ul>
          </div>

          <div class="mt-6 text-[#555]">
            <h3 class="font-semibold">BIAYA :</h3>
            <div v-if="id == 1">
              <div class="ml-3" >
              <p><span class="font-semibold">DP</span> hanya <span class="font-semibold">Rp.5.000.000</span> / per pax
                Harga paket 30, 33, 36 dan 39jt perbedaan nya <span class="font-semibold">hanya di Hotel saja</span>.
                Harga tersebut untuk <span class="font-semibold">sekamar berempat</span>
                </p>
            </div>

              <ul class="ml-3 mt-4">
                <li class="">Semua pembayaran hanya pada Rekening :</li>
                <li class="">Bank Syariah Indonesia</li>
                <li class="">An PT Thoiba Sejahtera Wisata</li>
                <li class="">7213160251</li>
              </ul>
            </div>

            <div v-else-if="id == 2">
              <div class="ml-3" >
                <p><span class="font-semibold">DP</span> hanya <span class="font-semibold">Rp.5.000.000</span> / per pax
                  Harga paket perbedaannya <span class="font-semibold">hanya di Hotel saja</span>.
                  Harga tersebut untuk <span class="font-semibold">sekamar berempat</span>
                  </p>
              </div>

              <ul class="ml-3 mt-4">
                <li class="">Semua pembayaran hanya pada Rekening :</li>
                <li class="">Bank Syariah Indonesia</li>
                <li class="">An PT Thoiba Sejahtera Wisata</li>
                <li class="">7213160251</li>
              </ul>
            </div>
      
            <div v-else>
              <div class="ml-3" >
                <p><span class="font-semibold">DP</span> hanya <span class="font-semibold">Rp.5.000.000</span> / per pax
                  Harga paket perbedaannya <span class="font-semibold">hanya di Hotel saja</span>.
                  Harga tersebut untuk <span class="font-semibold">sekamar berempat</span>
                  </p>
              </div>

              <ul class="ml-3 mt-4">
                <li class="">Semua pembayaran hanya pada Rekening :</li>
                <li class="">Bank Syariah Indonesia</li>
                <li class="">An PT Thoiba Sejahtera Wisata</li>
                <li class="">7213160251</li>
              </ul>
            </div>
          </div>

          <div class="mt-6 text-[#555]">
            <h3 class="font-semibold">PEMBIMBING JAMAAH :</h3>
            <ul class="ml-6">
              <li class="list-disc">H. Cecep Rahmat ( Pemilik TSW Travel)</li>
            </ul>
            <p>Bimbingan ibadah Umroh Insya Allah sesuai dengan Al-Qur'an dan As-Sunnah</p>
          </div>

          <div class="mt-6 text-[#555]">
            <h3 class="font-semibold">HARGA TERMASUK :</h3>
            <ul class="ml-6" v-if="id == 1">
              <li class="list-disc">☑️ Tiket Pesawat Ekonomi PP</li>
              <li class="list-disc">☑️ Visa Umrah dan Visa Negara Lain jika Umrah Plus</li>
              <li class="list-disc">☑️ Hotel di Mekkah dan Madinah (Sesuai Kesepakatan)</li>
               <li class="list-disc">☑️ Catering Fullboard 3x Sehari (Sesuai Kesepakatan)</li>
                <li class="list-disc">☑️ Asuransi Perjalanan</li>
                <li class="list-disc">☑️ Transportasi BUS di Saudi Full Ac (Umrah & Ziarah)</li>
                <li class="list-disc">☑️ Transportasi BUS di daerah Full Ac</li>
                <li class="list-disc">☑️ Handling Bandara+Airport Tax</li>
                <li class="list-disc">☑️ Tip untuk Guide/Sopir di Saudi Arabia</li>
                 <li class="list-disc">☑️ Air Zamzam 5lt</li>
                 <li class="list-disc">☑️ Manasik Umrah</li>
                  <li class="list-disc">☑️ Perlengkapan Umrah</li>
            </ul>

            <ul class="ml-6" v-else-if="id == 2">
              <li class="list-disc">☑️ Tiket Pesawat Ekonomi PP</li>
              <li class="list-disc">☑️ Visa Umrah dan Visa Negara Lain jika Umrah Plus</li>
              <li class="list-disc">☑️ Hotel di Mekkah dan Madinah (Sesuai Kesepakatan)</li>
               <li class="list-disc">☑️ Catering Fullboard 3x Sehari (Sesuai Kesepakatan)</li>
                <li class="list-disc">☑️ Asuransi Perjalanan</li>
                <li class="list-disc">☑️ Transportasi BUS di Saudi Full Ac (Umrah & Ziarah)</li>
                <li class="list-disc">☑️ Transportasi BUS di daerah Full Ac</li>
                <li class="list-disc">☑️ Handling Bandara+Airport Tax</li>
                <li class="list-disc">☑️ Tip untuk Guide/Sopir di Saudi Arabia</li>
                 <li class="list-disc">☑️ Air Zamzam 5lt</li>
                 <li class="list-disc">☑️ Manasik Umrah</li>
                  <li class="list-disc">☑️ Perlengkapan Umrah</li>
            </ul>

             <ul class="ml-6" v-else>
              <li class="list-disc">☑️ Tiket Pesawat Ekonomi PP</li>
              <li class="list-disc">☑️ Visa Umrah dan Visa Negara Lain jika Umrah Plus</li>
              <li class="list-disc">☑️ Hotel di Mekkah dan Madinah (Sesuai Kesepakatan)</li>
               <li class="list-disc">☑️ Catering Fullboard 3x Sehari (Sesuai Kesepakatan)</li>
                <li class="list-disc">☑️ Asuransi Perjalanan</li>
                <li class="list-disc">☑️ Transportasi BUS di Saudi Full Ac (Umrah & Ziarah)</li>
                <li class="list-disc">☑️ Transportasi BUS di daerah Full Ac</li>
                <li class="list-disc">☑️ Handling Bandara+Airport Tax</li>
                <li class="list-disc">☑️ Tip untuk Guide/Sopir di Saudi Arabia</li>
                 <li class="list-disc">☑️ Air Zamzam 5lt</li>
                 <li class="list-disc">☑️ Manasik Umrah</li>
                  <li class="list-disc">☑️ Perlengkapan Umrah</li>
            </ul>
          </div>
         
           <div class="mt-6 text-[#555]">
            <h3 class="font-semibold">Harga Tidak Termasuk :</h3>
            <ul class="ml-6">
              <li class="list-disc">⛔Pengeluaran pribadi Jemaah</li>
              <li class="list-disc">⛔Paspor & Kartu Kuning (Meningitis)</li>
              <li class="list-disc">⛔Upgrade tiket Business Class</li>
              <li class="list-disc">⛔Force majure</li>
            </ul>
          </div>

          <div class="mt-6 text-[#555]">
            <h3 class="font-semibold">Keunggulan/Kelebihan :</h3>
            <ul class="ml-6" v-if="id == 1">
              <li class="list-disc">Free menginap di Jakarta 1 Hari Sebelum keberangkatan</li>
              <li class="list-disc">Direct Flight </li>
              <li class="list-disc">Program 14 hari PP</li>
              <li class="list-disc">Bisa melaksanakan Shalat Jumat di Mekkah dan Madinah</li>
            </ul>

            <ul class="ml-6" v-else-if="id == 2">
              <li class="list-disc">Free menginap di Jakarta 1 Hari Sebelum keberangkatan</li>
            </ul>

            <ul class="ml-6" v-else>
              <li class="list-disc">Free menginap di Jakarta 1 Hari Sebelum keberangkatan</li>
              <li class="list-disc">Direct Flight </li>
            </ul>
          </div>

         
          <div class="mt-16">
            <div class="flex flex-row justify-center">
              <div class="bg-gray-300 w-6 h-[2px]"></div>
              <div class="bg-blue-600 w-14 h-[2px]"></div>
              <div class="bg-gray-300 w-6 h-[2px]"></div>
            </div>

            <div class="text-center mt-3">
              <h1 class="font-normal text-2xl">Hotel</h1>
              <p class="text-gray-500" v-if="id == 1">Hotel Paket Umrah Regular Agustus 2023</p>
              <p class="text-gray-500" v-else-if="id == 2">Hotel Paket Umrah Plus Turkey</p>
              <p class="text-gray-500" v-else>Hotel Umrah Regular 2023</p>
            </div>
            <!-- AIRLINES CARD -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
              <div class="shadow-lg">
                <div class="relative">
                  <div class="absolute left-3 top-3 bg-[rgba(0,0,0,0.6)] text-[#ccc] p-[3px] rounded-sm text-sm">MAKKAH</div>
                  <img src="../assets/images/hotel/hotel-mekah1.jpeg" alt="">
                </div>
                <div class="p-3">
                  <i class="mdi mdi-star text-[#ff7f3a]"></i>
                  <i class="mdi mdi-star text-[#ff7f3a]"></i>
                  <i class="mdi mdi-star text-[#ff7f3a]"></i>
                  <i class="mdi mdi-star text-[#ff7f3a]"></i>
                  <ul class="mt-5">
                    <li class="flex flex-row gap-2">
                      <p class="text-[#999] font-medium">Check In</p>
                      <p class="text-[#32a067] font-medium">Agustus 2023</p>
                    </li>
                    <li class="flex flex-row gap-2">
                      <p class="text-[#999] font-medium">Check Out</p>
                      <p class="text-[#32a067] font-medium">Agustus 2023</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="shadow-lg">
                <div class="relative">
                  <div class="absolute left-3 top-3 bg-[rgba(0,0,0,0.6)] text-[#ccc] p-[3px] rounded-sm text-sm">MEDINAH</div>
                  <img src="../assets/images/hotel/hotel-madinah.jpg" alt="">
                </div>
                
                <div class="p-3">
                      <i class="mdi mdi-star text-[#ff7f3a]"></i>
                    <i class="mdi mdi-star text-[#ff7f3a]"></i>
                    <i class="mdi mdi-star text-[#ff7f3a]"></i>
                  <ul class="mt-5">
                    <li class="flex flex-row gap-2">
                      <p class="text-[#999] font-medium">Check In</p>
                      <p class="text-[#32a067] font-medium">Agustus 2023</p>
                    </li>
                    <li class="flex flex-row gap-2">
                      <p class="text-[#999] font-medium">Check Out</p>
                      <p class="text-[#32a067] font-medium">Agustus 2023</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-16">
            <div class="flex flex-row justify-center">
              <div class="bg-gray-300 w-6 h-[2px]"></div>
              <div class="bg-blue-600 w-14 h-[2px]"></div>
              <div class="bg-gray-300 w-6 h-[2px]"></div>
            </div>

            <div class="text-center mt-3">
              <h1 class="font-normal text-2xl">Penerbangan</h1>
              <p class="text-gray-500" v-if="id == 1">Penerbangan Paket Umrah Regular Agustus 2023</p>
              <p class="text-gray-500" v-else-if="id == 2">Penerbangan Paket Umrah Plus Turkey</p>
              <p class="text-gray-500" v-else>Penerbangan Paket Umrah Regular 2023</p>
            </div>
            <!-- AIRLINES CARD -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
              <div class="shadow-lg">
                <div class="relative">
                  <div class="absolute left-3 top-3 bg-[rgba(0,0,0,0.6)] text-[#ccc] p-[3px] rounded-sm text-sm">Garuda Indonesia Airlines</div>
                  <img src="../assets/images/pesawat/pesawat.webp" alt="">
                </div>
                <div class="p-3">
                  <h2 class="font-semibold">CGK-JED</h2>
                  <ul class="mt-5">
                    <li class="flex flex-row gap-2">
                      <p class="text-[#999] font-medium">ETD at</p>
                      <p class="text-[#32a067] font-medium">Agustus 2023 </p>
                    </li>
                    <li class="flex flex-row gap-2">
                      <p class="text-[#999] font-medium">ETA at</p>
                      <p class="text-[#32a067] font-medium">Agustus 2023 </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="shadow-lg">
                <div class="relative">
                  <div class="absolute left-3 top-3 bg-[rgba(0,0,0,0.6)] text-[#ccc] p-[3px] rounded-sm text-sm">Garuda Indonesia Airlines</div>
                  <img src="../assets/images/pesawat/pesawat.webp" alt="">
                </div>
                
                <div class="p-3">
                  <h2 class="font-semibold">JED-CGK</h2>
                  
                  <ul class="mt-5">
                    <li class="flex flex-row gap-2">
                      <p class="text-[#999] font-medium">ETD at</p>
                      <p class="text-[#32a067] font-medium">Agustus 2023</p>
                    </li>
                    <li class="flex flex-row gap-2">
                      <p class="text-[#999] font-medium">ETA at</p>
                      <p class="text-[#32a067] font-medium">Agustus 2023</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-16">
            <div class="flex flex-row justify-center">
              <div class="bg-gray-300 w-6 h-[2px]"></div>
              <div class="bg-blue-600 w-14 h-[2px]"></div>
              <div class="bg-gray-300 w-6 h-[2px]"></div>
            </div>

            <div class="text-center mt-3">
              <h1 class="font-normal text-2xl">Transportasi</h1>
              <p class="text-gray-500" v-if="id == 1">Transportasi Paket Umrah Regular Agustus 20233</p>
              <p class="text-gray-500" v-else-if="id == 2">Transportasi Paket Umrah Plus Turkey</p>
               <p class="text-gray-500" v-else>Transportasi Paket Umrah Regular 2023</p>
            </div>
            <!-- Transportasi CARD -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
              <div class="shadow-lg">
                <div class="relative">
                  <div class="absolute left-3 top-3 bg-[rgba(0,0,0,0.6)] text-[#ccc] p-[3px] rounded-sm text-sm">Bus Full AC</div>
                  <img src="../assets/images/pesawat/bis.jpg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:w-[30%] w-full px-4 lg:px-0 flex flex-col">
        <div class="bg-[#f8f8f8] rounded-md border-[1px]">
          <h1 class="text-center text-3xl font-normal pt-4">Harga Paket</h1>
          <p v-if="id == 1"
            class="text-red-400 text-sm font-semibold text-normal text-center pt-2"
          >
            Sisa seat: 30 pax
          </p>
          <p v-else-if="id == 2"
            class="text-red-400 text-sm font-semibold text-normal text-center pt-2"
          >
            Sisa seat: 45 pax
          </p>
          <p v-else
            class="text-red-400 text-sm font-semibold text-normal text-center pt-2"
          >
            Sisa seat: 45 pax
          </p>
          <div class="bg-white rounded-md mx-6 mt-3">
            <h1 v-if="id == 1" class="text-center pt-3 text-blue-400 text-3xl">
              Rp. 33.000.000,-
            </h1>
            <h1 v-else-if="id == 2" class="text-center pt-3 text-blue-400 text-3xl">
              Rp. ,-
            </h1>
            <h1 v-else class="text-center pt-3 text-blue-400 text-3xl">
              Rp. 30.000.000 - 35.000.000,-
            </h1>
            <h5 class="text-center py-3 text-blue-400 text-lg">[QUAD]</h5>
          </div>
          <!-- <div class="bg-white rounded-md mx-6 mt-3">
            <h5 class="text-center py-3 text-blue-400 text-lg">Rp37.450.000,- [TRIPLE]</h5>
          </div>
          <div class="bg-white rounded-md mx-6 mt-3">
            <h5 class="text-center py-3 text-blue-400 text-lg">Rp39.450.000,- [DOUBLE]</h5>
          </div>
          <div class="bg-white rounded-md mx-6 mt-3">
            <h5 class="text-center py-3 text-blue-400 text-lg">Rp21.550.000,- [CHILD] ANAK USIA 2 - 8 TAHUN (TANPA PERLENGKAPAN)</h5>
          </div> -->

          <div class="mx-6 mt-3 flex flex-row justify-between">
            <a href="https://wa.me/62811212174" class="bg-[#218838] hover:bg-[#1e7e34] text-white text-sm font-normal px-5 py-2 rounded-md">
              <i class="mdi mdi-whatsapp"></i>
              Tanya CS
            </a>

            <button class="bg-[#138496] hover:bg-[#117a8b] text-white text-sm font-normal px-5 py-2 rounded-md">
              <i class="mdi mdi-printer"></i>
              Print Paket
            </button>
          </div>

          <div class="mx-6 mt-3 flex flex-row justify-between pb-5">
            <a href="https://form.jotform.com/tswtravel.hajjumra/formulir-pendaftaran-umrah-2022" class="bg-[#e0a800] hover:bg-[#d39e00] w-full text-gray-900 text-sm font-normal px-5 py-2 rounded-md">
              <i class="mdi mdi-airplane"></i>
              Daftar Secara Online
            </a>
          </div>
        </div>

        <div class="bg-[#f8f8f8] rounded-md border-[1px] mt-4">
          <h1 class="text-center text-3xl font-normal pt-4">Paket Lainnya</h1>
         
          <ul class="px-3 mt-3">
            <li class="flex flex-row justify-between gap-4 mb-3">
              <img class="w-[64px] h-[80px]" src="../assets/images/paket/umrah_agustus.jpeg" alt="">
              <div>
                <p class="text-[#999999] text-xs">Agustus 2023</p>
                <h5 class="">UMRAH REGULER AGUSTUS 2023</h5>
              </div>
            </li>

            <!-- <li class="flex flex-row justify-between gap-4 mb-3">
              <img class="w-[64px] h-[80px]" src="../assets/images/paket/turkey.png" alt="">
              <div>
                <p class="text-[#999999] text-xs">November 2023</p>
                <h5 class="">Umrah Plus Turkey</h5>
              </div>
            </li> -->
             <li class="flex flex-row gap-4 mb-3">
              <img class="w-[64px] h-[80px]" src="../assets/images/paket/turkey.png" alt="">
              <div>
                <p class="text-[#999999] text-xs">November 2023</p>
                <h5 class="">Umrah Plus Turkey</h5>
              </div>
            </li>

            <li class="flex flex-row justify-between gap-4 mb-3">
              <img class="w-[64px] h-[80px]" src="../assets/images/paket/reguler.jpeg" alt="">
              <div>
                <p class="text-[#999999] text-xs">Oktober, November, Desember 2023</p>
                <h5 class="">Umrah Regular 2023</h5>
              </div>
            </li>

            
          </ul>
        </div>

        <div class="bg-[#f8f8f8] rounded-md border-[1px] mt-4 py-4">
          <h1 class="text-center text-3xl font-normal">Artikel</h1>
         
        </div>

        <div class="mx-auto flex flex-col mt-6 mb-6">
          <button class=" border-[1px] border-blue-500 text-blue-500 rounded-full px-5 py-1">
            <i class="mdi mdi-facebook"></i>
            Share
          </button>

          <button class="mt-6 bg-[#0c7abf] text-white rounded-full px-5 py-1">
            <i class="mdi mdi-twitter"></i>
            Tweet
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Footer,
    Navbar,
  },

  data(){
    return {
      id: null
    }
  },

  mounted() {
    this.id = this.$route.params.id;
  },
};
</script>

<style>
.hero-parallax {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://storage.googleapis.com/muslimpergi/uploads/site/background2/11/Nabawi_TOP_1.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.hero-image {
  height: 80%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.hero-text {
  z-index: 1;
  /* text-align: center; */
}
</style>