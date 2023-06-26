<template>
    
    <div class="flex px-7 lg:px-0 lg:flex-row flex-col justify-between">
                <div class="flex flex-row  gap-4">
                    <div class="flex lg:flex-row flex-col gap-3 pb-3">
                    <div class="lg:w-[200px] w-full">
                        <label for="">Company</label>
                        <Multiselect placeholder="Select company" :options="options" />
                    </div>
                    <div class="lg:w-[180px] w-full">
                        <label for="">Status</label>
                        <Multiselect v-model="status"  placeholder="Select status" :options="statusList" />
                    </div>
                    <div class="lg:w-[180px] w-full">
                        <label for="">Choose Date</label>
                        <VueDatePicker v-model="tanggal" placeholder="Select Date" ></VueDatePicker>
                    </div>
                    
                    <div class="mt-[25px]">
                        <button class="bg-green-500 py-2 px-8 rounded-md text-white"><i class="mdi mdi-filter"></i> Filter</button>
                    </div>

                    <div class="mt-[25px]">
                        <button @click="resetFilter()" class="bg-red-500 py-2 px-8 rounded-md text-white"><i class="mdi mdi-refresh"></i> Reset</button>
                    </div>
                    
                    </div>
                </div>

                <div class="mt-[25px]">
                    <input v-model="searchTerm" @change="onHandleSearch" class="border border-gray-500 focus:shadow-md rounded-md py-2 px-6" placeholder="Search..." type="text">
                </div>
    </div>

    <div class="w-[160px] flex flex-row gap-2 mt-7">
        <label class="mt-2" for="">Showing</label>
        <Multiselect @change="handleSelectionChange"  placeholder="10" :options="pageList" />
    </div>

        <div class="bg-white shadow-md rounded my-6 overflow-x-auto">
            

            <table class="w-full table-auto whitespace-no-wrap">
                <!-- table header -->
                <thead>
                    <tr class="bg-sky-700 text-white uppercase text-sm leading-normal">
                        <th class="py-3 px-6 text-left">No</th>
                        <th v-for="column in columns" :key="column.key" class="py-3 px-6 text-left">
                            <div class="flex items-center cursor-pointer gap-2" @click="sortRows(column.key)">
                                <span>{{ column.label }}</span>
                                <i class="mdi mdi-sort"></i>
                            </div>
                        </th>
                        <th class="py-3 px-6 text-left">Action</th>
                    </tr>
                </thead>
                <!-- table body -->
                <tbody class="text-gray-600 text-sm font-light">
                    <tr v-for="(row, index) in searchRows" :key="row.id" class="border-b border-gray-200 hover:bg-gray-100">
                        <td class="py-3 px-6 text-left">{{ index + 1 }}</td>
                        <td v-for="column in columns" :key="column.key" class="py-3 px-6 text-left whitespace-nowrap">{{
                            row[column.key] }}</td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                            <slot name="actions" :row="row" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    <!-- Pagination -->
    <div class="flex flex-row justify-between">
        <div>
            <div class="mr-2 text-gray-500">
                Showing {{ startData }} to {{ endData }} of {{ totalData }} entries
            </div>
        </div>
        <div class="flex flex-row justify-between">
      <!-- ...Kode pagination yang ada sebelumnya... -->
            <button :disabled="currentPage === 1" @click="currentPage--"
                class="mr-1 px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 focus:outline-none text-gray-700">
                Prev
            </button>
            <div class="flex items-center">
                <button v-for="pageNumber in visiblePageNumbers" :key="pageNumber"
                :class="[currentPage === pageNumber ? 'bg-sky-600 text-white' : 'bg-gray-200 text-gray-700', 'px-3 py-1 rounded-lg mx-1 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300']"
                @click="currentPage = pageNumber">
                {{ pageNumber }}
                </button>
            </div>
            <button :disabled="currentPage === totalPages || endData === totalData" @click="currentPage++"
                class="ml-1 px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 focus:outline-none text-gray-700">
                Next
            </button>
        </div>
    </div>
       
  
</template>
  
<script>
import Multiselect from '@vueform/multiselect'

export default {
    name: 'Table',
    components: {
        Multiselect
        
    // MultiselectDropdown
    },
    // data() {
    //     return {
    //         query: '',
            
    //     }
    // },
    props: {
        columns: {
            type: Array,
            required: true
        },
        rows: {
            type: Array,
            required: true
        },
        currentPage: {
            type: Number,
        },
        totalPages: {
            type: Number,
            required: true,
        },
        maxVisiblePages: {
            type: Number,
        },
        totalData: {
            type: Number,
            required: true,
        },
        perPage: {
            type: Number,
            required: true,
        },
        search: {
            type: String
        },

    },
    data() {
        return {
            sortBy: '',
            sortDirection: 'asc',
            statusList: [
                'Draft',
                'Waiting Approval',
            ],
            options: [
                'Batman',
                'Robin',
                'Joker',
            ],
            
            status: '',
            tanggal: '',
            pageList: [1,2,3,4,5,6,7,8,9,10],
            searchTerm: ''
        }
    },
    created() {
        // set default sorting column
        this.sortBy = this.columns[0].key
    },
    computed: {
        sortedRows() {
            // sort rows based on selected column and direction
            return this.rows.sort((a, b) => {
                const column = this.sortBy
                const direction = this.sortDirection === 'asc' ? 1 : -1
                if (a[column] > b[column]) {
                    return direction
                } else if (a[column] < b[column]) {
                    return -direction
                }
                return 0
            })
        },

        paginatedRows() {
            const startIndex = (this.currentPage - 1) * this.perPage;
            const endIndex = startIndex + this.perPage;
            return this.sortedRows.slice(startIndex, endIndex);
        },

        //   Paginate
        visiblePageNumbers() {
            const middleIndex = Math.ceil(this.maxVisiblePages / 2);
            const lastIndex = this.totalPages - this.maxVisiblePages + 1;
            const start =
                this.currentPage < middleIndex
                    ? 1
                    : Math.min(this.currentPage - middleIndex + 1, lastIndex);
            const end = Math.min(start + this.maxVisiblePages - 1, this.totalPages);
            return Array(end - start + 1)
                .fill()
                .map((_, i) => start + i);
        },
        startData() {
            return (this.currentPage - 1) * this.perPage + 1;
        },
        // endData() {
        //     const end = this.currentPage * this.perPage;
        //     return end > this.totalData ? this.totalData : end;
        // },

        
        tanggalFormatted() {
            const dateObject = new Date(this.tanggal);
            const day = String(dateObject.getDate()).padStart(2, '0');
            const month = String(dateObject.getMonth() + 1).padStart(2, '0');
            const year = dateObject.getFullYear();
            return `${day}-${month}-${year}`;
        },

        filteredData() {
            let filtered = this.paginatedRows;

            if (this.tanggal) {
                filtered = filtered.filter(item => item.date === this.tanggalFormatted);
            }

            if (this.status) {
                filtered = filtered.filter(item => item.status === this.status);
            }

            return filtered;
        },

        searchRows() {
            if (this.searchTerm) {
                return this.filteredData.filter(row =>
                row.document_no.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                row.date.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                row.created_by.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                row.item_count.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                row.status.toLowerCase().includes(this.searchTerm.toLowerCase())
                );
            } else {
                return this.filteredData;
            }
        },

        endData() {
            const end = this.currentPage * this.perPage;
            return Math.min(end, this.totalData);
        },
    },
    methods: {
        sortRows(column) {
            if (this.sortBy === column) {
                // toggle sort direction if the same column is clicked
                this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'
            } else {
                // set new sorting column and direction
                this.sortBy = column
                this.sortDirection = 'asc'
            }
        },

        onSearch() {
            this.$emit('inputSearch', this.query)
        },

        onHandleNonMed(){
            this.$emit('onHandleNonMed')
        },

        onHandleSearch() {
            this.$emit('searchChanged', this.searchTerm);
        },

        handlePageChanged(pageNumber) {
            this.currentPage = pageNumber;
        },
        resetFilter(){
            this.status = ''
            this.tanggal = ''
        },
        handleSelectionChange(newSelectedOptions) {
            this.$emit('select-pepage', newSelectedOptions);
        }
    }
}
</script>
<style scoped>
button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
}
</style>

<style src="@vueform/multiselect/themes/default.css"></style>