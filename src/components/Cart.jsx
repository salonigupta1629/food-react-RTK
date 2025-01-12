export default function Cart (){
    return(
        <div className="w-[300px] h-[630px] bg-white p-4 fixed right-0 top-0">
           <span className="flex justify-between items-center"> 
            <h1 className="font-semibold text-xl">My Order</h1>
           <p className="border-2 w-7 h-7 text-center rounded-md border-gray-400">x</p>
           </span>
        </div>
    )
}