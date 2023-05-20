<template>
  <header class="bg-white shadow-inner w-full fixed top-0 z-50">
    <div
      class="lg:container flex flex-row px-5 py-4 lg:px-0 justify-between lg:pt-[15px] lg:pl-[5px]"
    >
      <div @click="toHome()">
        <img
          class="w-[192.5px] h-[55px]"
          src="/images/header-logo.jpg"
          alt=""
        />
      </div>

      <div class="visible block lg:invisible">
        <button
          id="menu-toggle"
          class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div class="hidden lg:block">
        <ul class="flex flex-row gap-5 pt-4">
          <li
            class="text-[#444444] font-semibold tracking-normal hover:text-[#00A784] text-base block md:inline-block"
            v-for="(menu, id) in menus"
            :key="id"
          >
            <a @click.prevent="scrollToSection(menu.section_id)" href="#">{{
              menu.name
            }}</a>
          </li>

          <div class="relative">
            <a
              @click="onShowAbout()"
              class="flex items-center text-[#444444] hover:text-[#00A784] cursor-pointer font-semibold"
            >
              <span class="mr-1">Tentang TSW Travel</span>
              <svg
                class="w-5 h-5 text-[#444444] hover:text-[#00A784] font-semibold dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <div
              v-show="showAbout"
              class="absolute right-0 py-2 mt-2 bg-[#00A784] rounded-md shadow-xl w-44"
            >
              <a
                @click.prevent="toAbout()"
                class="block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100 cursor-pointer"
              >
                Tentang Kami
              </a>
              <a
                @click.prevent="toFooter()"
                class="block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100 cursor-pointer"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

          <div class="relative">
            <a
              @click="showPaket()"
              class="flex items-center text-[#444444] hover:text-[#00A784] cursor-pointer font-semibold"
            >
              <span class="mr-1">Paket TSW</span>
              <svg
                class="w-5 h-5 text-[#444444] hover:text-[#00A784] font-semibold dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <div
              v-show="show"
              class="absolute right-0 py-2 mt-2 bg-[#00A784] rounded-md shadow-xl w-44"
            >
              <a
                @click="toUmrah()"
                class="block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100 cursor-pointer"
              >
                Umrah
              </a>
              <a
                @click="toHaji()"
                class="block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100 cursor-pointer"
              >
                Haji
              </a>
              <a
                @click="toTour()"
                class="block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100 cursor-pointer"
              >
                Tour
              </a>
            </div>
            
          </div>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
// import { scrollTo } from '../utils/scroll';
import DropdownMenu from "@innologica/vue-dropdown-menu";
export default {
  components: {
    DropdownMenu,
  },
  data() {
    return {
      show: false,
      showAbout: false,
      menus: [
        {
          section_id: "beranda",
          name: "Beranda",
        },
        {
          section_id: "gellery",
          name: "Galleri & Travel",
        },
      ],
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    onShowAbout() {
      this.showAbout = !this.showAbout;
      this.show = false;
    },
    showPaket() {
      this.show = !this.show;
      this.showAbout = false;
    },
    handleScroll() {
      if (window.pageYOffset > 86) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
    scrollToSection(sectionId) {
      if (sectionId === "beranda") {
        this.$router.replace("/");
      } else {
        this.$router.replace({ path: "/", query: { section: sectionId } });
      }
    },
    toAbout() {
      this.$emit("toAbout");
      this.showAbout = !this.showAbout;
    },
    toFooter() {
      this.$emit("toFooter");
      this.showAbout = !this.showAbout;
    },
    toUmrah() {
      this.$emit("toUmrah");
      this.show = !this.show;
    },
    toHaji(){
      this.$emit("toHaji");
      this.show = !this.show;
    },

    toTour(){
      this.$emit("toTour");
      this.show = !this.show;
    },
    toHome(){
      this.$router.push('/')
    }
  },
};
</script>

<style lang="scss" scoped>
.bg-on-scroll {
  background-color: rgba(0, 167, 132, 0.5);
}


</style>