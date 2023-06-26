<template>
 
  <div class="container mt-10">
    <div class="flex flex-row justify-between">
      <div>
        ATK Request
      </div>

      <div class="flex flex-row gap-2">
        <div>
          <button class="px-2 py-1 rounded-md border border-1"><i class="mdi mdi-cog"></i></button>
        </div>
        <div>
          <button @click="onHandleMed()" class="px-2 py-1 rounded-md border border-1 bg-green-500 text-white">+Add Item</button>
        </div>
        <div>
          <button class="px-2 py-1 rounded-md border border-1"><i class="mdi mdi-file-download-outline text-green-500"></i></button>
        </div>
      </div>
    </div>

   

    <Table @select-pepage="handlePerPage($event)" @onHandleNonMed="onHandleNonMed()" :columns="tableColumns" :rows="displayedRows"
     :current-page="currentPage" :total-pages="totalPages" :max-visible-pages="maxVisiblePages"
    :total-data="totalRows" :per-page="perPage" @page-changed="handlePageChanged">
    <template #actions="{ row }">
      <div class="flex flex-row gap-2">
        <button class="bg-sky-100 px-1 py-[1px] rounded-md border focus:border-purple-600" @click="onHandleMed(row)">
          <i class="mdi mdi-lead-pencil text-sky-600"></i>
        </button>
        <button class="bg-red-100 px-1 py-[1px] rounded-md border focus:border-green-600"
          @click="onHandleReg(row)"><i class="mdi mdi-delete text-red-600"></i></button>
      </div>
    </template>
  </Table>


  <Modal :scroll="true" :show-modal="showModalMed" @close="closeModalMed" title="Atk Request">
    <div class="px-6" >
      <div class="flex flex-row gap-2">
        <i class="mdi mdi-sticker-alert-outline text-red-300"></i>
        <h4>Atk Request Info </h4>
        
      </div>
      <hr>
      <form class=" mt-4" action="" @submit.prevent="submitForm">
       <div  class="flex flex-row justify-between gap-4">
        <div class="lg:w-[400px]">
            <div class="pb-3">
            <label class="text-sm font-semibold text-gray-500" for="" >Warehouse <span v-html="wajib"></span></label>
            <Multiselect placeholder="Warehouse" :searchable="true" v-model="data.warehouse" :options="options" />
            <span v-if="errors.warehouse" class="text-red-500">{{ errors.warehouse }}</span>
            </div>
            <div class="flex flex-col pb-3">
              <label class="text-sm font-semibold text-gray-500" for="" >UOM <span v-html="wajib"></span></label>
              <Multiselect placeholder="UOM" :searchable="true" v-model="data.uom" :options="options" />
              <span v-if="errors.uom" class="text-red-500">{{ errors.uom }}</span>
            </div>

            <div class="flex flex-col pb-3">
              <label class="text-sm font-semibold text-gray-500" for="">Brand <span v-html="wajib"></span></label>
              <Multiselect placeholder="Brand" :searchable="true" v-model="data.brand" :options="options" />
              <span v-if="errors.brand" class="text-red-500">{{ errors.brand }}</span>
            </div>
        </div>

        <div class="mt-1">
          <div class="flex flex-col pb-3">
              <label class="text-sm font-semibold text-gray-500" for="" >Item Name <span v-html="wajib"></span></label>
              <Multiselect placeholder="Item Name" :searchable="true" v-model="data.item_name" :options="options" />
              <span v-if="errors.item_name" class="text-red-500">{{ errors.item_name }}</span>
            </div>

            <div class="flex flex-col pb-4">
              <label class="text-sm font-semibold text-gray-500" for="">Quantity <span v-html="wajib"></span></label>
              <input v-model="data.quantity" placeholder="Quantity" class="rounded-md h-10 border focus:ring focus:ring-green-100 focus:outline-none px-4 lg:w-[400px]"
                type="text">
                <span v-if="errors.quantity" class="text-red-500">{{ errors.quantity }}</span>
            </div>

            <div class="flex flex-col pb-3">
              <label class="text-sm font-semibold text-gray-500" for="">Remarks </label>
              <input v-model="data.remarks" placeholder="Remarks" class="rounded-md h-10 border focus:ring focus:ring-green-100 focus:outline-none px-4 lg:w-[400px]"
                type="text">
            </div>
        </div>
       </div>

       <div class="flex justify-center mt-4">
        <button class="bg-blue-900 text-white py-1 px-8 rounded-md font-semibold">Add</button>
       </div>
      </form>

      <table class="w-full table-auto whitespace-no-wrap mt-4 mb-5">
                <!-- table header -->
                <thead>
                    <tr class="bg-sky-700  text-white uppercase text-sm leading-normal">
                        <th v-for="(data, id) in headers" :key="id" class="py-3 px-6 text-left">{{ data }}</th>
                    </tr>
                </thead>
                <!-- table body -->
                <div v-if="!datas.length">
                   <p >Data is empty...</p>
                </div>
                <tbody v-else class="text-gray-600 text-sm font-light">
                      
                    <tr  v-for="(dt, id) in datas" :key="id" class="border-b border-gray-200 hover:bg-gray-100">
                      
                        <td class="py-3 px-2 text-left whitespace-nowrap">{{ id+1 }}</td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">{{ dt.warehouse }}</td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">{{ dt.item_name }}</td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">{{ dt.quantity }}</td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">{{ dt.brand }}</td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">{{ dt.brand }}</td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">{{ dt.remarks }}</td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                          <button class="bg-red-100 px-1 py-[1px] rounded-md border focus:border-green-600"
          @click="deleteRow(id)"><i class="mdi mdi-delete text-red-600"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="flex justify-center mb-5">
              <button @click="onSaveData()" class="bg-green-500 py-1 px-8 text-white font-semibold rounded-md">Save</button>
            </div>
    </div>
  </Modal>


  <Modal :scroll="true" :show-modal="showModalSave" @close="closeModalSave" title="DATA">
    <div class="p-6 w-[500px]">
      {{ datas }}
    </div>
  </Modal>
  </div>
</template>

<script>
import Table from "@/components/HomeComponents/Table.vue";
import Multiselect from '@vueform/multiselect'
import Modal from '@/components/HomeComponents/Modal.vue';
export default {
  components: {
    Table,
    Multiselect,
    Modal,
  },

  data() {
    return {
      data: {
        warehouse: '',
        uom: '',
        item_name: '',
        quantity: '',
        brand: '',
        remarks: ''
      },
      errors: {},

      showModalNonMed: false,
      wajib: '<span class="text-red-500">*</span>',
      tableColumns: [
        { key: 'document_no', label: 'Document No' },
        { key: 'date', label: 'Date' },
        { key: 'created_by', label: 'Created By' },
        { key: 'item_count', label: 'Item Count' },
        { key: 'status', label: 'Status' },
      ],
      tableRows: [
        { document_no: 'REQ/123213', date: '14-06-2023', created_by: 'Admin', item_count: '2', status: 'Draft' },
        { document_no: 'REQ/123213', date: '15-06-2023', created_by: 'User', item_count: '5', status: 'Waiting Approval' },
        { document_no: 'REQ/123214', date: '16-06-2023', created_by: 'User', item_count: '6', status: 'Waiting Approval' },
        { document_no: 'REQ/123215', date: '16-06-2023', created_by: 'User', item_count: '6', status: 'Waiting Approval' },
        { document_no: 'REQ/123216', date: '15-06-2023', created_by: 'User', item_count: '6', status: 'Waiting Approval' },
        { document_no: 'REQ/123216', date: '15-06-2023', created_by: 'User', item_count: '6', status: 'Waiting Approval' },
        { document_no: 'REQ/123216', date: '15-06-2023', created_by: 'User', item_count: '6', status: 'Waiting Approval' },
        { document_no: 'REQ/123216', date: '15-06-2023', created_by: 'User', item_count: '6', status: 'Waiting Approval' },
        { document_no: 'REQ/123216', date: '15-06-2023', created_by: 'User', item_count: '6', status: 'Waiting Approval' },
        { document_no: 'REQ/123216', date: '15-06-2023', created_by: 'User', item_count: '6', status: 'Waiting Approval' },
        { document_no: 'REQ/123216', date: '15-06-2023', created_by: 'User', item_count: '6', status: 'Waiting Approval' },
        { document_no: 'REQ/123216', date: '15-06-2023', created_by: 'User', item_count: '6', status: 'Waiting Approval' }
      ],
      perPage: 10, // Jumlah data per halaman
      currentPage: 1, 
      options: [
        'Nama Warehouse',
        'Nama Item',
        'Nama UOM',
        'Nama Brand',
      ],
      showModalMed: false,
      showModalSave: false,

      headers: [
        'No',
        'Warehouse',
        'Item Name',
        'Quantity',
        'Brand',
        'UOM',
        'Remarks',
        'Actions',
      ],
      datas: []
    };
  },
  // beforeCreate() {
  //   const sectionId = this.$route.query.section;
  //   if (sectionId) {
  //     this.scrollToSection(sectionId);
  //   }
  // },
  computed: {
    totalRows() {
      return this.tableRows.length; // Jumlah total data baris
    },
    totalPages() {
      return Math.ceil(this.totalRows / this.perPage); // Jumlah total halaman
    },
    displayedRows() {
      // Menghitung data yang ditampilkan pada halaman saat ini
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.tableRows.slice(startIndex, endIndex);
    },
    maxVisiblePages() {
      return 1; // Jumlah maksimum halaman yang ditampilkan pada pagination
    },
  },

  methods: {
    onHandleNonMed() {
      this.showModalNonMed = true
    },

    onHandleSearch(evt) {
      console.log(evt);
    },

    onHandleMed() {
      this.showModalMed = true
    },

    closeModalMed() {
      this.showModalMed = false;
    },

     submitForm() {
      this.errors = {};


      if (!this.data.warehouse) {
        this.errors.warehouse = 'Warehouse is required.';
      }

      if (!this.data.uom) {
        this.errors.uom = 'UOM is required.';
      }

      // Lakukan validasi form lainnya sesuai kebutuhan
      // Contoh:
      if (!this.data.item_name) {
        this.errors.item_name = 'Item Name is required.';
      }

      if (!this.data.quantity) {
        this.errors.quantity = 'Quantity is required.';
      }

      if (!this.data.brand) {
        this.errors.brand = 'Brand is required.';
      }

      if (Object.keys(this.errors).length === 0) {
        this.datas.push(this.data)
        this.data = {
          warehouse: '',
          uom: '',
          item_name: '',
          quantity: '',
          brand: '',
          remarks: ''
        }
      } else {
        // Form tidak valid, beri peringatan atau lakukan tindakan lainnya
        console.log('Form tidak valid');
      }
    },

    deleteRow(id){
      // console.log(id);
      this.datas.splice(id, 1);

    },

    onSaveData(){
      this.showModalSave = true
    },

     closeModalSave() {
      this.showModalSave = false;
    },

    handlePageChanged(pageNumber) {
      this.currentPage = pageNumber;
    },
    handlePerPage(evt){
      this.perPage = evt
    }
  },
};
</script>

<style scoped>
.to-top-btn {
  background: linear-gradient(to right, #00a784 0%, #9b7e30 100%);
}
</style>
<style src="@vueform/multiselect/themes/default.css"></style>