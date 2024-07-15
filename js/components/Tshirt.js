export default{
    template:`
      <div class="Tshirt mt-5 rounded-2xl h-auto bg-white  p-4">
                            <div class="flex justify-between">
                                <span>Total Tshirt</span>
                                <span class="py-1 px-3 bg-green-400 text-white rounded h-38">{{ total }}</span>
                            </div>
                            <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-5">                              
                                    <div v-for="shirt in shirts" :key="shirt.id" :class="{'col-span-3': shirt.quantity == 0}"> 
                                        <div class="border shadow-sm flex justify-between rounded" v-if="shirt.quantity > 0">
                                            <span class="bg-green-400 h-38 w-12 text-white rounded py-2 px-1 text-center">{{ shirt.size }}</span>
                                            <span class="p-2">{{ shirt.quantity }}</span>
                                        </div>
                                         <div class="border shadow-sm flex justify-center rounded bg-red-400" v-else>
                                            <span class="p-2 text-white">Size {{shirt.size}} out of stock</span>
                                        </div>
                                       
                                    </div>
                            </div>
     </div>
    `,
   props:{
        total:{
            type:Number,
        },
        shirts:{
            type:Array,
        }
   }
}