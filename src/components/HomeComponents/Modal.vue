<template>
    <transition name="modal">
      <div v-if="showModal" class="fixed z-40 inset-0">
        <div class="flex items-center justify-center min-h-screen">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="closeModal"></div>
  
          <div class="bg-white  w-full lg:w-auto mx-4 lg:mx-auto z-50">
            <div class="flex justify-between mb-4 bg-blue-800 p-4">
              <h2 class="text-lg text-white font-semibold">{{ title }}</h2>
              <button class="text-white bg-red-600 py-1 px-2 rounded-md text-lg hover:text-gray-800" @click="closeModal">×</button>
            </div>
            
            <div :class="(scroll ? 'max-h-96 overflow-y-auto' : '')">
              <!-- Modal content goes here -->
              <slot></slot>
            </div>
  
            <div>
              <slot name="form-btn"></slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </template>
  
  <script>
  
  export default {
    props: {
      showModal: {
        type: Boolean,
        required: true,
      },
      title: {
        type: String,
        default: '',
      },
  
      scroll: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      handleClickOutside(event) {
        if (event.target.classList.contains('fixed')) {
          this.closeModal();
        }
      },
    },
    mounted() {
      document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
      document.removeEventListener('click', this.handleClickOutside);
    },
  };
  </script>
  
  <style>
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.2s;
  }
  
  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
  }
  </style>