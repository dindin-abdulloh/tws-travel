<template>
  <section class="gallery-bg" :id="id">
    <div class="container pb-10">
      <div class="text-center pt-20">
        <h1 class="text-[26px] lg:text-[32px] font-bold text-gray-800">
          Galeri Photo TWS Tour
        </h1>
        <div class="pt-2">
          <p class="text-gray-500 text-[18px] lg:text-[24px]">
            Kumpulan photo kegiatan.
          </p>
        </div>
      </div>
      <div
        class="grid grid-cols-1 pt-16 pb-10 lg:grid-cols-4 justify-center lg:container lg:px-[130px]"
      >
        <div v-for="(val, id) in galleries" :key="id" class="box">
          <img :src="val.img" />
          <div @click="toDetail(id)" class="content cursor-pointer">
            <div class="content-overlay">
              <p class="text-center">
                {{ val.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center lg:justify-end container px-0">
        <button
          class="hover:bg-[#9b7e30] bg-[#00A784] px-5 py-3 rounded-lg text-white font-normal transition ease-in-out delay-150 duration-300"
        >
          Tampilkan Semua
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      galleries: [
        {
          img: "https://thumb.viva.co.id/media/frontend/thumbs3/2022/06/29/62bb7f4d919b3-gelandang-liverpool-naby-keita-menjalankan-ibadah-haji_1265_711.jpg",
          text: "CITY TOUR KE KEBUN KURMA - JAMA'AH UMROH 7 JANUARI 2023",
        },
        {
          img: "https://maluku.kemenag.go.id/upload/posting/medium_06-08-2018-04-21-23-6096.jpg",
          text: "ZIARAH KE JABAL UHUD - JAMAAH UMROH 7 JANUARI 2023",
        },
        {
          img: "https://hajiumrahziarah.files.wordpress.com/2007/11/p1030443.jpg",
          text: "JAMAAH 7 JANUARI 2023 SEUSAI MELAKSANAKAN RANGKAIAN IBADAH UMROH",
        },
        {
          img: "https://cdn.libur.com.my/2022/11/u-1.jpeg",
          text: "ROMBONGAN 10 SEPTEMBER 2022 SAAT DI TEMPAT MIQAT MADINAH",
        },
      ],
    };
  },

  methods: {
    toDetail(id){
      if(id == 0){
        this.$router.push('/galeri-1')
      }else if(id == 1){
        this.$router.push('/galeri-2')
      }
      else if(id == 2){
        this.$router.push('/galeri-3')
      }
      else if(id == 3){
        this.$router.push('/galeri-4')
      }
    }
  }
};
</script>

<style scoped>
.gallery-bg {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  background-image: url(https://storage.googleapis.com/muslimpergi/uploads/gallery/pict/842/bg-gallery.png);
}

.box {
  position: relative;
  display: inline-block;
  margin: 10px;
  /* width: calc((100% / 3) - 25px); */
  height: 250px;
  background: #262626;
  overflow: hidden;
}
.box img {
  position: relative;
  width: 100%;
  height: 100%;
  transition: 5s;
}
.box:hover img {
  transform: scale(1.1);
}

.box::before,
.box::after {
  content: "";
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  transition: 1s;
  z-index: 2;
}
.box::before {
  transform: scale(1, 0);
  /* border-left: 1px solid #fff;
  border-right: 1px solid #fff; */
}
.box::after {
  transform: scale(0, 1);
  /* border-top: 1px solid #fff;
  border-bottom: 1px solid #fff; */
}
.box:hover::before,
.box:hover::after {
  transform: scale(1, 1);
}

.box .content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;
}
.box:hover .content {
  background: rgba(0, 167, 132, 0.5);
}
.box .content .content-overlay {
  box-sizing: border-box;
  padding: 20px;
  color: #fff;
  z-index: 3;
}
.box .content .content-overlay h1 {
  position: relative;
  font-size: 20px;
  margin-bottom: 10px;
  transform: translateY(-80px);
  opacity: 0;
  transition: 1s;
}
.box:hover .content .content-overlay h1 {
  transform: translateY(0);
  opacity: 1;
}
.box .content .content-overlay p {
  position: relative;
  font-size: 15px;
  transform: translateY(170px);
  opacity: 0;
  transition: 0.5s;
}
.box:hover .content .content-overlay p {
  transform: translateY(0px);
  opacity: 1;
}
</style>