export default{
    template:`
          <div v-if="ref" class="fixed inset-0 flex items-center justify-center overflow-y-auto bg-gray-500 bg-opacity-75">
                            <div class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl w-80">
                              <div class="px-6 py-4 grid place-item-center">
                                <img src="https://t3.ftcdn.net/jpg/04/30/38/40/360_F_430384041_1G6UymaKYOJBE7wx5QmSHBeTJInkcQJT.jpg" alt="" class="w-32 h-32 m-auto">
                                <p class="text-gray-700 text-base text-center">Size {{description}} current out of stock</p>
                              </div>
                              <div class="px-6 py-4 bg-gray-100 text-right">
                                <button @click="ref = false" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                  Close
                                </button>
                              </div>
                            </div>
                            </div>
    `,
    props:{
        ref:{
            type:Boolean
        },
        description:{
            type:String
        }
    }
}