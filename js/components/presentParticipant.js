export default{
    template:`<div class="participant-attendance rounded-2xl h-auto bg-white  p-4">
                            <div class="flex justify-between">
                                <span>Present Participant</span>

                                <span class="py-1 px-3  bg-yellow-400 text-white rounded h-38">{{
                                    totalParticipants}}</span>
                            </div>
                            <div class="mt-2">
                                <input type="text" placeholder="search user" class="bg-gray-100 p-2 rounded w-full"
                                    v-model="search" @input="$emit('filterParticipants')">

                            </div>
                            <div class="grid lg:grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                                <div v-for="participant in participants">
                                    <div class="shadow-sm border py-2 border-gray-100 flex justify-between rounded-xl"
                                        :key="participant.id">
                                        <div class="flex ">
                                            <img class="w-10 h-10 mx-3"
                                                src="data:image/png;base64,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"
                                                alt="">
                                            <span class="py-2 px-1 flex justify-center">{{ participant.name }}</span> </div>

                                            <div class="grid place-items-center">
                                                <span class="px-4 hover:cursor-pointer hover:text-yellow-400"
                                                   @click="$emit('viewModal',participant.id)"
                                                    >View</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="flex justify-between" v-if="totalPages>1">
                                        <button @click="prevPage1" :disabled="currentPage === 1">Back</button>
                                        <div>
                                            <!-- Always show the first page button -->
                                            <button @click="gotoPage1(1)" class="mx-2"
                                                v-if="currentPage !== 1">1</button>

                                            <!-- Show '...' if currentPage is beyond page 3 -->
                                            <span v-if="currentPage > 3 && totalPages > 5"> ...
                                            </span>

                                            <!-- Show previous page button if currentPage is greater than 2 -->
                                            <button v-if="currentPage > 2"
                                                @click="gotoPage1(currentPage - 1)" class="mx-2">
                                                {{ currentPage - 1 }}
                                            </button>

                                            <!-- Show current page button -->
                                            <button class="mx-2" @click="gotoPage1(currentPage)">{{
                                                currentPage }}</button>

                                            <!-- Show next page button if currentPage is less than the total pages -->
                                            <button v-if="currentPage < totalPages"
                                                @click="gotoPage1(currentPage + 1)" class="mx-2">
                                                {{ currentPage + 1 }}
                                            </button>

                                            <!-- Show '...' if currentPage is not near the last two pages -->
                                            <span
                                                v-if="currentPage < totalPages - 2 && totalPages > 5">
                                                ... </span>

                                            <!-- Always show the last page button -->
                                            <button @click="gotoPage1(totalPages)" class="mx-2"
                                                v-if="currentPage !== totalPages && totalPages > 1">{{
                                                totalPages }}</button>

                                        </div>
                                        <button @click="nextPage1"
                                            :disabled="currentPage === totalPages">Next</button>
                                    </div>
                                </div>
                          
                            </div>`,


    props:{
        search:{
            type:String
        },
        view:{
            type:Boolean
        },
        currentPage:{
            type:Number
        },
        totalPages:{
            type:Number
        },
        totalParticipants:{
            type:Number
        },
        participants:{
            type:Object
        }
    },
    computed:{
        nextPage1() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }

        },
        prevPage1() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }

        },
        gotoPage1(page) {
            this.currentPage = page;
        },
    }
}