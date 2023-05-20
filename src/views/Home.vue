<template>
  <div>
    <Navbar @toAbout="toAbout()" @toFooter="toFooter()" @toUmrah="toUmrah()" @toHaji="toHaji" @toTour="toTour" />
    <Hero />
    <Package :id="package_id" />
    <About :id="about_id" />
    <Question />
    <Gallery :id="gallery_id" />
    <Footer :id="footer_id" />
    <button
      @click="toWa"
      class="fixed bottom-10 left-10 bg-[#42e35f] hover:bg-[#26943a] w-[65px] h-[65px] text-white rounded-full hover:shadow-2xl"
    >
      <i class="mdi mdi-whatsapp text-4xl"></i>
    </button>
    <back-to-top>
      <button class="w-[65px] h-[65px] rounded-full to-top-btn shadow-2xl">
        <i
          class="mdi mdi-arrow-up-bold-circle-outline text-[#4f3a96] text-4xl"
        ></i>
      </button>
    </back-to-top>
  </div>
</template>

<script>
import Hero from "@/components/HomeComponents/Hero.vue";
import Package from "@/components/HomeComponents/Package.vue";
import About from "@/components/HomeComponents/About.vue";
import Question from "@/components/HomeComponents/Question.vue";
import Gallery from "@/components/HomeComponents/Gallery.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import { scrollTo } from "../utils/scroll";
import BackToTop from "vue-backtotop";

export default {
  components: {
    Footer,
    BackToTop,
    Hero,
    Package,
    About,
    Question,
    Gallery,
    Navbar,
  },

  data() {
    return {
      about_id: "about",
      package_id: "package",
      gallery_id: "gellery",
      footer_id: "footer",
    };
  },
  // beforeCreate() {
  //   const sectionId = this.$route.query.section;
  //   if (sectionId) {
  //     this.scrollToSection(sectionId);
  //   }
  // },
  watch: {
    "$route.query.section": {
      immediate: true,
      handler: function (newQuery, oldQuery) {
        this.scrollToSection(newQuery);
      },
    },
  },

  methods: {
    scrollToSection(sectionId) {
      scrollTo(sectionId);
    },
    toAbout() {
      scrollTo(this.about_id);
    },
    toFooter() {
      scrollTo(this.footer_id);
    },
    toUmrah() {
      scrollTo(this.package_id);
    },

    toHaji(){
      this.$router.push('/haji')
    },

    toTour(){
      this.$router.push('/tour')
    },
    toWa(){
      const phoneNumber = "+62811212174"; // Ganti dengan nomor telepon tujuan
      const url = `https://wa.me/${phoneNumber}`;
      window.location.href = url;
    }
  },
};
</script>

<style scoped>
.to-top-btn {
  background: linear-gradient(to right, #00a784 0%, #9b7e30 100%);
}
</style>