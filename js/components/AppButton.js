export default{
    template:
    `
     <button 
     :class="{
        'border rounded px-5 py-2 disable:cursor-not-allow':true,
        'bg-grey-200 hover:bg-grey:400':type==='muted',
        'bg-blue-200 hover:bg-blue:400':type==='primary',
        'loader':processing===true
        }"
     :disabled="processing"
     
     >
    <slot/>

    </button>
    `,
    props:{
        type:{
            type:String,
            default:'primary'
        },
        processing:{
            tyype:Boolean,
            default:false
        }
    },
    data() {
        return {
            
        }
    },
}