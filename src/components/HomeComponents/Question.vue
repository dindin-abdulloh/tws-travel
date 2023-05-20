<template>
  <div class="lg:container lg:px-[130px] mt-24">
    <div class="text-center lg:text-left mb-10">
      <h1 class="text-[26px] lg:text-[32px] text-[#333333] font-bold">
        Mengapa Memilih Kami?
      </h1>
      <div class="mt-3 lg:w-1/2">
        <p class="text-base text-[#555555]">
          Membantu saudara muslim sebanyak-banyaknya untuk bisa berangkat Umrah
          & Haji dengan mudah dan nyaman.
        </p>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 px-3 lg:px-0">
      <div
        v-for="(q, id) in questionList"
        :key="id"
        class="bg-[#f8f8f8] lg:h-[283.66px] custom-card rounded-xl flex flex-col justify-center transition ease-in-out delay-200 hover:shadow-2xl hover:bg-[#00A784] duration-500 transform pb-8"
      >
        <div class="mt-8">
          <div
            class="text-center text-[60px] text-[#4e4e4e]"
            v-html="q.icon"
          ></div>
        </div>
        <div class="text-center mt-1 px-4">
          <h2 class="text-lg font-semibold text-[#4e4e4e]">{{ q.title }}</h2>
        </div>
        <div class="mt-1 mb-2 text-center px-4">
          <p class="text-sm text-[#a4a4a4]">
            {{ q.text }}
          </p>
          <a class="text-blue-300" v-if="id == 0" href="https://umrahcerdas.kemenag.go.id/home/detail/489">No 535 th.2020</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questionList: [
        {
          icon: '<i class="mdi mdi-certificate-outline"></i>',
          title: "Terpercaya",
          text: "Resmi terdaftar menjadi PPIU di Kementrian Agama Republik Indonesia dengan izin Umrah ",
        },
        {
          icon: '<i class="mdi mdi-mosque-outline"></i>',
          title: "Sesuai Syariat Islam",
          text: "Semua kegiatan yang dilakukan mulai dari Manasik hingga Ibadah Umrah atau Haji InsyaAllah sesuai Al-Quran dan As-sunnah",
        },
        {
          icon: '<i class="mdi mdi-charity"></i>',
          title: "Manasik Full Materi dan Praktek",
          text: "Pembekalan materi dan praktek ibadah umrah selalu dilaksanakan. Tujuannya supaya jemaah mengerti dan paham akan hukum serta tata cara beribadah umrah.",
        },
        // {
        //   icon: '<i class="mdi mdi-check-decagram-outline"></i>',
        //   title:
        //     "Muthawif dan Tim Lapangan di Saudi adalah Orang Indonesia yang berizin tinggal resmi di Saudi",
        //   text: "Pembimbing Muthawif yang keilmuannya InsyaAllah sesuai dengan Al-Quran dan As-sunnah",
        // },
        {
          icon: '<i class="mdi mdi-account-star-outline"></i>',
          title: "Pembimbing Umrah Profesional & Pengalaman",
          text: "InsyaAllah dibimbing oleh pembimbing yang berkompeten dan berpengalaman dibidang ini selama betahun-tahun. Selain itu tentunya sesuai dengan Sunnah dan Amanah. Sejauh ini Alhamdulillah selalu dibimbing langsung oleh pemilik TSW",
        },
        {
          icon: '<i class="mdi mdi-city-variant-outline"></i>',
          title: "Fasilitas Nyaman dan Baik",
          text: "Menggunakan Fasilitas yang terbaik, penerbangan berstandar IATA, Transfortasi BUS Full AC, Hotel berbintang yang dekat dengan Masjidil Haram & Masjid Nabawi",
        },
        // {
        //   icon: '<i class="mdi mdi-map-check-outline"></i>',
        //   title:
        //     "Team LA Lapangan di Saudi berizin resmi di Kementrian Haji & Umrah Saudi",
        //   text: "Bekerjasama dengan Muasasah yang berizin Resmi di Kementrian (Haji & Umrah) di Saudi sebagai Penyedia Jasa LA (Land Arrangement)",
        // },
      ],
    };
  },
};
</script>

<style>
.custom-card:hover * {
  color: #ffff;
}
.card * {
  transition: 0.2s ease-in-out;
}
</style>