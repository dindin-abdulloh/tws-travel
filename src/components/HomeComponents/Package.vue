<template>
  <div class="md:container px-3 mobile_container mt-12 mb-12" :id="id">
    <div class="flex flex-row justify-center">
      <h1 class="text-[45px] font-bold text-gray-800">Paket Terkini</h1>
    </div>
    <div class="flex flex-row justify-center gap-2 mt-2">
      <div class="h-3 w-14 border-y-2 border-[#00A784] my-auto"></div>
      <img
        class="w-[30px] h-[30px] my-auto animate-spin"
        src="../../assets/icons/world.svg"
        alt=""
      />
      <div class="h-3 w-14 border-y-2 border-[#00A784] my-auto"></div>
    </div>
    <div class="mt-4">
      <h4 class="text-center text-xl font-semibold text-gray-500">
        Haji, Umrah dan Tour
      </h4>
    </div>

    <!-- Card -->
    <div class="flex flex-col lg:flex-row justify-center gap-8 mt-[170px]">
      <div
        class="flex flex-col justify-center bg-[#f3f3f3] rounded-xl border-[1px] border-[#e2e2e2] xl:w-[350px] px-6 lg:px-3 mb-[120px] lg:mb-7 transition ease-in-out delay-150 hover:shadow-2xl duration-300"
      >
        <div
          class="bg-cover rounded-2xl h-[230px] mt-[-116px] relative"
          :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
        >
          <div class="bg-[rgba(0,0,0,0.45)] h-full rounded-2xl">
            <div class="absolute bottom-2 left-2">
              <h1 class="text-white font-bold text-[20px]">Rp. 30.000.000</h1>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <h1 class="text-[#4e4e4e] font-bold leading-5 text-lg">
            UMRAH REGULER AGUSTUS 2023
          </h1>
        </div>

        <div class="flex flex-row justify-between mt-4">
          <div class="flex flex-col">
            <div class="flex gap-1 mb-3">
              <i class="mdi mdi-calendar-month-outline"></i>
              <p>Jadwal Keberangkatan</p>
            </div>
            <div class="flex gap-1 mb-3">
              <i class="mdi mdi-clock-time-eight-outline"></i>
              <p>Durasi Paket</p>
            </div>
            <div class="flex gap-1 mb-3">
              <i class="mdi mdi-office-building-marker-outline"></i>
              <p>Hotel</p>
            </div>
            <div class="flex gap-1 mb-3">
              <i class="mdi mdi-account"></i>
              <p>Total Seat</p>
            </div>
            <div class="flex gap-1 mb-3">
              <i class="mdi mdi-account"></i>
              <p class="font-bold">Availabel Seat</p>
            </div>
            <div class="flex gap-1 mb-3">
              <i class="mdi mdi-map-marker"></i>
              <p>Berangkat Dari</p>
            </div>
            <div class="flex gap-1 mb-3">
              <i class="mdi mdi-airplane-takeoff"></i>
              <p>Maskapai</p>
            </div>
          </div>

          <div class="flex flex-col">
            <div class="flex gap-1 mb-3">
              <p>23 Agustus 2023</p>
            </div>
            <div class="flex gap-1 mb-3">
              <p>14 Hari</p>
            </div>
            <div class="flex gap-1 mb-3">
              <i class="mdi mdi-star text-[#ff7f3a]"></i>
              <i class="mdi mdi-star text-[#ff7f3a]"></i>
              <i class="mdi mdi-star text-[#ff7f3a]"></i>
              <!-- <i class="mdi mdi-star text-[#ff7f3a]"></i> -->
            </div>
            <div class="flex gap-1 mb-3">
              <p>90 pax</p>
            </div>
            <div class="flex gap-1 mb-3">
              <p class="font-bold">50 pax</p>
            </div>
            <div class="flex gap-1 mb-3">
              <p class="text-right">Tasikmalaya</p>
            </div>
            <div class="flex gap-1 mb-3">
              <p class="text-right">Garuda Airlines</p>
            </div>
          </div>
        </div>

        <div class="mt-4 mb-5 mx-auto">
          <button
            @click="packageDetail()"
            class="px-7 py-3 bg-[#00A784] hover:bg-[#997A28] rounded-lg text-white font-normal"
          >
            Selengkapnya
          </button>
        </div>
      </div>

      <div
        class="flex flex-col justify-center bg-[#f3f3f3] rounded-xl border-[1px] border-[#e2e2e2] xl:w-[350px] px-6 lg:px-3 mb-[120px] lg:mb-7 transition ease-in-out delay-150 hover:shadow-2xl duration-300"
      >
        <div
          class="bg-cover rounded-2xl h-[230px] mt-[-116px] relative"
          :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
        >
          <div class="bg-[rgba(0,0,0,0.45)] h-full rounded-2xl">
            <div class="absolute bottom-2 left-2">
              <h1 class="text-white font-bold text-[20px]">Rp. 39.000.000</h1>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <h1 class="text-[#4e4e4e] font-bold leading-5 text-lg">
            UMRAH REGULER AGUSTUS 2023
          </h1>
        </div>

        <div class="flex flex-row justify-between mt-4">
          <div class="flex flex-col">
            <div class="flex gap-1 mb-3">
              <i class="mdi mdi-calendar-month-outline"></i>
              <p>Jadwal Keberangkatan</p>
            </div>
            <div class="flex gap-1 mb-3">
              <i class="mdi mdi-clock-time-eight-outline"></i>
              <p>Durasi Paket</p>
            </div>
            <div class="flex gap-1 mb-3">
              <i class="mdi mdi-office-building-marker-outline"></i>
              <p>Hotel</p>
            </div>
            <div class="flex gap-1 mb-3">
              <i class="mdi mdi-account"></i>
              <p>Total Seat</p>
            </div>
            <div class="flex gap-1 mb-3">
              <i class="mdi mdi-account"></i>
              <p class="font-bold">Availabel Seat</p>
            </div>
            <div class="flex gap-1 mb-3">
              <i class="mdi mdi-map-marker"></i>
              <p>Berangkat Dari</p>
            </div>
            <div class="flex gap-1 mb-3">
              <i class="mdi mdi-airplane-takeoff"></i>
              <p>Maskapai</p>
            </div>
          </div>

          <div class="flex flex-col">
            <div class="flex gap-1 mb-3">
              <p>23 Agustus 2023</p>
            </div>
            <div class="flex gap-1 mb-3">
              <p>14 Hari</p>
            </div>
            <div class="flex gap-1 mb-3">
              <i class="mdi mdi-star text-[#ff7f3a]"></i>
              <i class="mdi mdi-star text-[#ff7f3a]"></i>
              <i class="mdi mdi-star text-[#ff7f3a]"></i>
              <i class="mdi mdi-star text-[#ff7f3a]"></i>
              <i class="mdi mdi-star text-[#ff7f3a]"></i>
            </div>
            <div class="flex gap-1 mb-3">
              <p>90 pax</p>
            </div>
            <div class="flex gap-1 mb-3">
              <p class="font-bold">50 pax</p>
            </div>
            <div class="flex gap-1 mb-3">
              <p class="text-right">Tasikmalaya</p>
            </div>
            <div class="flex gap-1 mb-3">
              <p class="text-right">Garuda Airlines</p>
            </div>
          </div>
        </div>

        <div class="mt-4 mb-5 mx-auto">
          <button
            @click="packageDetail()"
            class="px-7 py-3 bg-[#00A784] hover:bg-[#997A28] rounded-lg text-white font-normal"
          >
            Selengkapnya
          </button>
        </div>
      </div>

      <div
        class="flex flex-col justify-center bg-[#f3f3f3] rounded-xl border-[1px] border-[#e2e2e2] xl:w-[350px] px-6 lg:px-3 mb-[120px] lg:mb-7 transition ease-in-out delay-150 hover:shadow-2xl duration-300"
      >
        <div
          class="bg-cover rounded-2xl h-[230px] mt-[-116px] relative"
          :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
        >
          <div class="bg-[rgba(0,0,0,0.45)] h-full rounded-2xl">
            <div class="absolute bottom-2 left-2">
              <h1 class="text-white font-bold text-[20px]">Rp. 41.925.000</h1>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <h1 class="text-[#4e4e4e] font-bold leading-5 text-lg">
            UMRAH REGULER SYAWAL 1444H
          </h1>
        </div>

        <div class="flex flex-row justify-between mt-4">
          <div class="flex flex-col">
            <div class="flex gap-1 mb-3">
              <i class="mdi mdi-calendar-month-outline"></i>
              <p>Jadwal Keberangkatan</p>
            </div>
            <div class="flex gap-1 mb-3">
              <i class="mdi mdi-clock-time-eight-outline"></i>
              <p>Durasi Paket</p>
            </div>
            <div class="flex gap-1 mb-3">
              <i class="mdi mdi-office-building-marker-outline"></i>
              <p>Hotel</p>
            </div>
            <div class="flex gap-1 mb-3">
              <i class="mdi mdi-account"></i>
              <p>Total Seat</p>
            </div>
            <div class="flex gap-1 mb-3">
              <i class="mdi mdi-account"></i>
              <p class="font-bold">Availabel Seat</p>
            </div>
            <div class="flex gap-1 mb-3">
              <i class="mdi mdi-map-marker"></i>
              <p>Berangkat Dari</p>
            </div>
            <div class="flex gap-1 mb-3">
              <i class="mdi mdi-airplane-takeoff"></i>
              <p>Maskapai</p>
            </div>
          </div>

          <div class="flex flex-col">
            <div class="flex gap-1 mb-3">
              <p>09 Mei 2023</p>
            </div>
            <div class="flex gap-1 mb-3">
              <p>12 Hari</p>
            </div>
            <div class="flex gap-1 mb-3">
              <i class="mdi mdi-star text-[#ff7f3a]"></i>
              <i class="mdi mdi-star text-[#ff7f3a]"></i>
              <i class="mdi mdi-star text-[#ff7f3a]"></i>
              <i class="mdi mdi-star text-[#ff7f3a]"></i>
              <i class="mdi mdi-star text-[#ff7f3a]"></i>
            </div>
            <div class="flex gap-1 mb-3">
              <p>29 pax</p>
            </div>
            <div class="flex gap-1 mb-3">
              <p class="font-bold">0 pax</p>
            </div>
            <div class="flex gap-1 mb-3">
              <p class="text-right ">Tasikmalaya</p>
            </div>
            <div class="flex gap-1 mb-3">
              <p class="text-right">Garuda Airlines</p>
            </div>
          </div>
        </div>

        <div class="mt-4 mb-5 mx-auto">
          <button
           @click="packageDetail()"
            class="px-7 py-3 bg-[#00A784] hover:bg-[#997A28] rounded-lg text-white font-normal"
          >
            Selengkapnya
          </button>
        </div>
      </div>
    </div>

    <div
      class="flex justify-center lg:justify-end container px-0 lg:max-w-[1113px]"
    >
      <button
        @click="packageList()"
        class="hover:bg-[#997A28] bg-[#00A784] px-14 py-3 rounded-lg text-white font-normal transition ease-in-out delay-150 all-package duration-300"
      >
        Lihat Semua Paket
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      imageUrl:
        "https://storage.googleapis.com/muslimpergi/uploads/listing/pict/2248/medium_WhatsApp_Image_2023-03-02_at_10.38.43_AM.jpeg",
    };
  },
  methods: {
    packageDetail() {
      const id = "1";
      this.$router.push(`/package/${id}`);
    },
    packageList() {
      const id = "1";
      this.$router.push(`/package-list`);
    },
  },
};
</script>

<style scoped>
.animate-spin {
  animation: spin 4s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotate(-360deg);
  }
}
.all-package:hover {
  background: #c5a242;
}
</style>