export default function AboutHeros(){
    return(
        <div className="relative bg-[url('/assets/parkedCars.webp')] bg-no-repeat bg-center bg-cover w-full h-[40vh] flex items-center justify-center">
            <div  className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
            
            <div className="flex items-center justify-center backdrop-blur-md rounded-md border border-roti-500 relative z-20 px-4 py-6 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] ">
                <spa className="text-4xl text-gray-50 font-bold">About Us</spa>
            </div>
        </div>
    )
}