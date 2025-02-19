import React from 'react'

export default function Footer() {
    return (
        <div id='footer' className='w-full bg-black text-center p-5 flex items-center justify-center flex-col  gap-7'>
            <h1 className='text-center text-5xl sm:mt-10 mb-5  font-bold bg-gradient-to-r from-main via-main to-text bg-clip-text text-transparent' >Contacts</h1>
            <div className="grid sm:grid-cols-3 gap-x-10 gap-y-3 text-white ">
                <div className="flex items-center flex-col gap-1   ">
                    <div className=" flex items-center justify-center bg-main rounded-full w-20 h-20 sm:w-10 sm:h-10">
                        <i className="fa-solid fa-phone sm:text-2xl text-4xl text-black"></i>
                    </div>
                    <p className='text-xl font-medium '>phone</p>
                    <p className=''>+201154005640</p>
                </div>

                <div className="flex items-center flex-col gap-1 ">
                    <div className=" flex items-center justify-center bg-main rounded-full w-20 h-20 sm:w-10 sm:h-10">
                        <i className="fa-solid fa-location-dot sm:text-2xl text-4xl text-black"></i>
                    </div>
                    <p className='text-xl font-medium '>Address</p>
                    <p className=''>Cairo, Egypt</p>
                </div>

                <div className="flex items-center flex-col gap-1">
                    <div className=" flex items-center justify-center bg-main rounded-full w-20 h-20 sm:w-10 sm:h-10">
                        <i className="fa-solid fa-envelope  sm:text-2xl text-4xl text-black"></i>
                    </div>
                    <p className='text-xl font-medium '>Gamil</p>
                    <p className=''>ao741003@gmail.com</p>
                </div>

            </div>
            <div className="grid  grid-cols-4 gap-10">
                <a href='https://www.linkedin.com/in/ayman-osama-66a051248/' target='_blank' className=" flex items-center justify-center bg-main rounded-full w-10 h-10 hover:bg-black hover:text-main duration-250 text-black cursor-pointer ">
                    <i className="fa-brands fa-linkedin-in text-3xl "></i>
                </a>
                <a href='https://github.com/ayman1417' target='_blank' className=" flex items-center justify-center bg-main rounded-full w-10 h-10 hover:bg-black hover:text-main duration-250 text-black cursor-pointer ">
                    <i className="fa-brands fa-github text-3xl "></i>
                </a>
                <a href='https://www.instagram.com/aymanosama_14/' target='_blank' className=" flex items-center justify-center bg-main rounded-full w-10 h-10 hover:bg-black hover:text-main duration-250 text-black cursor-pointer ">
                    <i className="fa-brands fa-instagram text-3xl "></i>
                </a>
                <a href='https://www.facebook.com/ayman.khaled.315865' target='_blank' className=" flex items-center justify-center bg-main rounded-full w-10 h-10 hover:bg-black hover:text-main duration-250 text-black cursor-pointer ">
                    <i className="fa-brands fa-facebook text-3xl "></i>
                </a>
            </div>
        </div>
    )
}
