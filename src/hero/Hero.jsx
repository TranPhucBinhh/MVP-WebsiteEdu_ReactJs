import React from 'react'
import TPB from '../assets/TPB.png'
const Hero = () => {
    return (
        <div className='w-full md:h-screen h-auto bg-gradient-to-tr
        from-indigo-500/20 via-sky700/20 via-20% to-green-700/30 flex
        items-end justify-center md:px-16 sn:px-10 px-4 md:pt-0 md:pb-0
        pt-[10ch] pb-6'>

            <div className='w-full flex-1 flex items-center justify-between
            md:gap-16 gap-4 md:flex-nowrap flex-wrap md:flex-row flex-col-reverse'>
            </div>
            {/* Noi dung */}
            <div className="md:w-[45%] w-full h-auto md:space-y-8 space-y-6">
                <div className="space-y-2">
                    <p className="text-lg md:text-2xl font-medium text-neutral-600">
                        Khóa Học 1-1 Với Đội Ngũ Giảng Viên Chất Lượng
                    </p>
                    <h1
                        className="md:text-[5rem] text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r   from-indigo-500   via-sky-700  to-purple-700 leading-[1.35]">
                        TPB Education
                    </h1>
                </div>

                <p className="text-lg font-nomal text-neutral-800 md:pr-16 pr-0">
                    Chào mừng bạn đến với TPB Education, nơi chúng tôi cung cấp những khóa học chất lượng cao và đội ngũ giáo viên tận tâm.
                </p>
                <div className="w-full flex items-center justify-center gap-6">
                    {/* Nút Get Started */}
                    <button
                        className="md:w-fit w-1/2 bg-gradient-to-tr from-indigo-500 via-sky-700 to-purple-700 
               cursor-pointer py-3 px-8 text-neutral-50 rounded-full font-semibold 
               ease-in-out duration-300"
                    >
                        Bắt đầu </button>

                </div>
                <div className='w-full flex items-center gap-6'></div>
            </div>

            {/*Image */}
            <div className='md:w- w-full aspect-square flex items-end justify-end'>
                <img className='w-200 h-150 object-contain' src={TPB} alt="TPB" />
            </div>
        </div>
    )
}

export default Hero