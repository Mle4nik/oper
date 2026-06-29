import React, { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const Top_Title = () => {

    // const [open, setOpen] = useState(false)

    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const handler = (e) => {
            if (e.ctrlKey && e.key === "k") {
                e.preventDefault();
                // setOpen(true);
                console.log('ladno');
                
            }
        };

        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, []);

    const optionsDate = {
        weekday: 'long',       // Понедельник
        day: 'numeric',        // 23
        month: 'long'          // июня
    };
    const dateString = now.toLocaleDateString('ru-RU', optionsDate);

    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const formattedTime = now.toLocaleTimeString('ru-RU', timeOptions);

    return (
        <div>
            <div className="max-w-[1480px] m-auto flex justify-between items-center text-[#2D77D6] text-3xl font-bold ml-3xl p-3">
                <h1 className="ml-[13px]">
                    <spam className="text-black">ОПЕРАТОР</spam> 1С
                </h1>
                <div className='flex mr-5'>
                    <div className='trasition-all duration-150 items-center text-black font-normal text-sm flex hover:-translate-y-[1px]'>
                        <spam className="ml-1.5 relative left-7">🔍</spam>
                        <input className={`focus:shadow-md trasition-all duration-150 hover:bg-gray-50 shadow-sm hover:shadow-md focus:border-[#2D77D6] focus:border-2 rounded-xl w-auto border-1 border-gray-300 focus:outline-none py-2 px-3 pl-8`} type="text" placeholder="Поиск по документации..." />
                    </div>
                    <div className='text-sm flex flex-col justify-end items-end'>
                        <div className='ml-16'>
                            <span>{dateString}</span>
                            <span className="font-mono text-[#2D77D6]"></span>
                        </div>
                        <span className='text-black'>{formattedTime}</span>
                    </div>
                </div>
            </div>
            <div className='border-b border-gray-300'></div>
        </div>
    );
};

export default Top_Title;