const Navbar = () => {
    return(
       <nav>
        <div className="flex flex-1 justify-between items-center p-3">
       <span >
       <p className="font-bold text-lg text-gray-600 mt-3">{new Date().toUTCString().slice(0,16)}</p>
       <p className="text-2xl font-bold mt-1">FoodCart</p>
       </span>
            <span>
            <input type="text" className="px-8 py-2 rounded-l-lg outline-none border-gray-400 border-2" placeholder="Search here"/>
            <button className="px-3 py-2 bg-yellow-500 hover:bg-black hover:text-white hover:border-black rounded-r-lg border-gray-400 border-2">Search</button>
            </span>
        </div>
       </nav>
    )
}
export default Navbar;