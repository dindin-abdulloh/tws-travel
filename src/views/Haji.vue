<template>
    <section>
      <Navbar />
      <div class="hero-parallax pt-[80px]">
        <div class="lg:container px-4 lg:px-[130px] mt-6">
          <h1 class="text-white font-bold text-3xl lg:text-5xl">HAJI</h1>
          <div class="bg-[#00A784] h-2 w-28 mt-2 rounded-md"></div>
        </div>
      </div>
      <div class="m-6">
        <h1>PAKET BELUM TERSEDIA</h1>
      </div>
      <!-- <div class="flex flex-row gap-3 mt-6 lg:container px-16 mb-5 ">
        <div class="w-1/4 border invisible lg:visible hidden lg:block">
          <div class="flex flex-row justify-between border-b pb-6 pt-4 px-4">
            <div class="flex" @click="toggleAccordion">
              <i class="mdi mdi-magnify text-3xl font-bold"></i>
              <h5 class="text-lg font-semibold">Filters</h5>
            </div>
            <div>
              <i
                @click="toggleAccordion"
                class="mdi mdi-filter-variant text-3xl font-bold"
              ></i>
            </div>
          </div>
  
          <transition  name="accordion">
            <div v-if="isAccordionOpen" class="accordion-body bg-white py-2 ">
              <div class="px-3">
                <span class="text-sm font-semibold">Kategori</span>
                <div class="flex flex-row justify-between mt-2">
                  <div class="text-sm">UMROH (10)</div>
                  <div>
                    <div
                      class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
                    >
                      <input
                        type="checkbox"
                        name="toggle"
                        id="toggle"
                        class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                      />
                      <label
                        for="toggle"
                        class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      ></label>
                    </div>
                  </div>
                </div>
                <hr class="mt-3" />
              </div>
  
              <div class="px-3 mt-3">
                <span class="text-sm font-semibold">Tanggal Keberangkatan</span>
                <div class="flex flex-row justify-between pb-1 mt-2">
                  <div class="text-sm">Sep (2023) (10)</div>
                  <div>
                    <div
                      class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
                    >
                      <input
                        type="checkbox"
                        name="toggle"
                        id="toggle"
                        class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                      />
                      <label
                        for="toggle"
                        class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      ></label>
                    </div>
                  </div>
                </div>
                <div class="flex flex-row justify-between pb-1">
                  <div class="text-sm">Aug (2023) (10)</div>
                  <div>
                    <div
                      class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
                    >
                      <input
                        type="checkbox"
                        name="toggle"
                        id="toggle"
                        class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                      />
                      <label
                        for="toggle"
                        class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      ></label>
                    </div>
                  </div>
                </div>
                <div class="flex flex-row justify-between pb-1">
                  <div class="text-sm">May (2023) (10)</div>
                  <div>
                    <div
                      class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
                    >
                      <input
                        type="checkbox"
                        name="toggle"
                        id="toggle"
                        class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                      />
                      <label
                        for="toggle"
                        class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      ></label>
                    </div>
                  </div>
                </div>
                <hr class="mt-3" />
              </div>
  
              <div class="px-3 mt-3">
                <span class="text-sm font-semibold">Bandara Keberangkatan</span>
                <div class="flex flex-row justify-between pb-1 mt-2">
                  <div class="text-sm">JAKARTA (10)</div>
                  <div>
                    <div
                      class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
                    >
                      <input
                        type="checkbox"
                        name="toggle"
                        id="toggle"
                        class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                      />
                      <label
                        for="toggle"
                        class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      ></label>
                    </div>
                  </div>
                </div>
                <hr class="mt-3" />
              </div>
  
              <div class="px-3 mt-3">
                <span class="text-sm font-semibold">HOTEL</span>
                <div class="flex flex-row justify-between pb-1 mt-2">
                  <div class="text-sm">
                    <i class="mdi mdi-star text-orange-400 text-lg"></i>
                    <i class="mdi mdi-star text-orange-400 text-lg"></i>
                    <i class="mdi mdi-star text-orange-400 text-lg"></i>
                    <i class="mdi mdi-star text-orange-400 text-lg"></i>
                    <i class="mdi mdi-star text-orange-400 text-lg"></i>
                    (10)
                  </div>
                  <div>
                    <div
                      class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
                    >
                      <input
                        type="checkbox"
                        name="toggle"
                        id="toggle"
                        class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                      />
                      <label
                        for="toggle"
                        class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      ></label>
                    </div>
                  </div>
                </div>
                <div class="flex flex-row justify-between pb-1 mt-2">
                  <div class="text-sm">
                    <i class="mdi mdi-star text-orange-400 text-lg"></i>
                    <i class="mdi mdi-star text-orange-400 text-lg"></i>
                    <i class="mdi mdi-star text-orange-400 text-lg"></i>
                    <i class="mdi mdi-star text-orange-400 text-lg"></i>
                    (10)
                  </div>
                  <div>
                    <div
                      class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
                    >
                      <input
                        type="checkbox"
                        name="toggle"
                        id="toggle"
                        class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                      />
                      <label
                        for="toggle"
                        class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      ></label>
                    </div>
                  </div>
                </div>
                <div class="flex flex-row justify-between pb-1 mt-2">
                  <div class="text-sm">
                    <i class="mdi mdi-star text-orange-400 text-lg"></i>
                    <i class="mdi mdi-star text-orange-400 text-lg"></i>
                    <i class="mdi mdi-star text-orange-400 text-lg"></i>
                    (10)
                  </div>
                  <div>
                    <div
                      class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
                    >
                      <input
                        type="checkbox"
                        name="toggle"
                        id="toggle"
                        class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                      />
                      <label
                        for="toggle"
                        class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      ></label>
                    </div>
                  </div>
                </div>
                <hr class="mt-3" />
              </div>
  
              <div class="px-3 mt-3">
                <span class="text-sm font-semibold">Starting Harga</span>
                <div class="flex flex-row justify-between pb-1 mt-2">
                  <div class="text-sm">32jt - 34jt (3)</div>
                  <div>
                    <div
                      class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
                    >
                      <input
                        type="checkbox"
                        name="toggle"
                        id="toggle"
                        class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                      />
                      <label
                        for="toggle"
                        class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      ></label>
                    </div>
                  </div>
                </div>
                <div class="flex flex-row justify-between pb-1">
                  <div class="text-sm">34jt - 41jt (7)</div>
                  <div>
                    <div
                      class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
                    >
                      <input
                        type="checkbox"
                        name="toggle"
                        id="toggle"
                        class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                      />
                      <label
                        for="toggle"
                        class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      ></label>
                    </div>
                  </div>
                </div>
                <hr class="mt-3" />
              </div>
  
              <div class="px-3 mt-3">
                <span class="text-sm font-semibold">Duration</span>
                <div class="flex flex-row justify-between pb-1 mt-2">
                  <div class="text-sm">9 hari (9)</div>
                  <div>
                    <div
                      class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
                    >
                      <input
                        type="checkbox"
                        name="toggle"
                        id="toggle"
                        class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                      />
                      <label
                        for="toggle"
                        class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      ></label>
                    </div>
                  </div>
                </div>
                <div class="flex flex-row justify-between pb-1">
                  <div class="text-sm">10 hari (1)</div>
                  <div>
                    <div
                      class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
                    >
                      <input
                        type="checkbox"
                        name="toggle"
                        id="toggle"
                        class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                      />
                      <label
                        for="toggle"
                        class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      ></label>
                    </div>
                  </div>
                </div>
                <hr class="mt-3" />
              </div>
  
              <div class="flex justify-center flex-col mt-3">
                <button class="w-full">Search</button>
                <button class="w-full">Reset</button>
              </div>
            </div>
          </transition>
        </div>
        <div class="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-3">
  
         <div class="bg-white  h-1/2">
          <img class="object-center h-60 w-full" src="https://storage.googleapis.com/muslimpergi/uploads/listing/pict/2424/medium_3._SLIDE-PAKET-NAMIRA-TRAVEL-2023-MUSIM-BARU_03.jpg" alt="">
          <div class="p-4 border">
            <h1 class="text-blue-900 text-2xl font-normal">Paket Umroh Awal September 2023</h1>
  
            <div class="mt-4">
              <p class="text-xl">Start from <span class="text-green-500">32.9 jt</span> /per person</p>
              <p class="text-green-500 text-xl">Available seats: 40 pax</p>
            </div>
          </div>
         </div>
  
         <div class="bg-white  h-1/2">
          <img class="object-center h-60 w-full" src="https://storage.googleapis.com/muslimpergi/uploads/listing/pict/2424/medium_3._SLIDE-PAKET-NAMIRA-TRAVEL-2023-MUSIM-BARU_03.jpg" alt="">
          <div class="p-4 border">
            <h1 class="text-blue-900 text-2xl font-normal">Paket Umroh Awal September 2023</h1>
  
            <div class="mt-4">
              <p class="text-xl">Start from <span class="text-green-500">32.9 jt</span> /per person</p>
              <p class="text-green-500 text-xl">Available seats: 40 pax</p>
            </div>
          </div>
         </div>
  
         <div class="bg-gray-500  h-1/2">
          <img class="object-center h-60 w-full" src="https://storage.googleapis.com/muslimpergi/uploads/listing/pict/2424/medium_3._SLIDE-PAKET-NAMIRA-TRAVEL-2023-MUSIM-BARU_03.jpg" alt="">
          <div class="p-4 border">
            <h1 class="text-blue-900 text-2xl font-normal">Paket Umroh Awal September 2023</h1>
  
            <div class="mt-4">
              <p class="text-xl">Start from <span class="text-green-500">32.9 jt</span> /per person</p>
              <p class="text-green-500 text-xl">Available seats: 40 pax</p>
            </div>
          </div>
         </div>
  
        </div>
      </div> -->
      <Footer/>
    </section>
  </template>
  
  <script>
  import Navbar from "../components/Navbar.vue";
  import Footer from "../components/Footer.vue";
  export default {
    components: {
      Navbar,
      Footer
    },
  
    data() {
      return {
        isAccordionOpen: true,
      };
    },
  
    methods: {
      toggleAccordion() {
        this.isAccordionOpen = !this.isAccordionOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  .accordion-body {
    overflow: hidden;
    transition: height 0.3s ease-out;
  }
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
  
  .toggle-checkbox:checked {
    @apply: right-0 border-green-400;
    right: 0;
    border-color: #68d391;
  }
  .toggle-checkbox:checked + .toggle-label {
    @apply: bg-green-400;
    background-color: #68d391;
  }
  
  /* Package card */
  .box_grid {
      background-color: #fff;
      display: block;
      position: relative;
      margin-bottom: 30px;
      box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.1);
  }
  
  .box_grid figure {
      margin-bottom: 0;
      overflow: hidden;
      position: relative;
      height: 210px;
  }
  
  figure {
      margin: 0 0 1rem;
      display: block;
  }
  
  .box_grid figure small {
      position: absolute;
      background-color: black;
      background-color: rgba(0,0,0,0.6);
      left: 20px;
      top: 22px;
      text-transform: uppercase;
      color: #ccc;
      font-weight: 600;
      border-radius: 3px;
      padding: 7px 10px 4px 10px;
      line-height: 1;
  }
  
  /* .box_grid figure a img :hover {
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%) scale(1.1);
      transform: translate(-50%, -50%) scale(1.1);
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      width: 100%;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
  } */
  
  .img-fluid {
      max-width: 100%;
      height: auto;
  }
  
  .box_grid figure .read_more {
      position: absolute;
      top: 50%;
      left: 0;
      margin-top: -12px;
      -webkit-transform: translateY(10px);
      transform: translateY(10px);
      text-align: center;
      opacity: 0;
      visibility: hidden;
      width: 100%;
      -webkit-transition: all 0.6s;
      transition: all 0.6s;
      z-index: 2;
  }
  
  .box_grid figure .read_more span {
      /* background-color: #fcfcfc; */
      background-color: rgba(255,255,255,0.8);
      border-radius: 20px;
      display: inline-block;
      color: #222;
      /* font-size: 12px; */
      font-size: 0.75rem;
      padding: 5px 10px;
  }
  
  .box_grid figure .read_more {
      position: absolute;
      top: 50%;
      left: 0;
      margin-top: -12px;
      -webkit-transform: translateY(10px);
      transform: translateY(10px);
      text-align: center;
      opacity: 0;
      visibility: hidden;
      width: 100%;
      -webkit-transition: all 0.6s;
      transition: all 0.6s;
      z-index: 2;
  }
  </style>