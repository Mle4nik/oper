import React from "react";


const Support = () => {

    return (
        <div className="max-w-auto flex flex-col justify-between">
            <h1 className="text-6xl font-bold">
                МОИ <span className="text-[#2D77D6]">КОНТАКТЫ</span>
            </h1>
            <div className="max-w-fit bg-gray-200 rounded-md px-3 py-4 my-7">
                <p>‼️Если у вас возникли вопросы или сложности,
                    обратитесь к наставнику.</p>
                <p className="font-bold">🕐 Время ответа: Пн-Пт, 09:00-18:00</p>
            </div>
            <div className="text-3xl flex">
                <div className="border-l-2 border-gray-300 mr-5"></div>
                <div className="flex flex-col gap-13">
                    <a href="tel:+79898822015"><div>
                        <p>📞 Телефон</p>
                        <p className="text-[#2D77D6]">+7 (989) 882-20-15</p>
                    </div></a>
                    <a href="https://t.me/@m1e4nik" target="_blank"><div>
                        <p>📱 Телеграм</p>
                        <p className="text-[#2D77D6]">t.me/@m1e4nik</p>
                    </div></a>
                    <a href="mailto:abdullaev2606@gmail.com"><div>
                        <p>📧 Почта</p>
                        <p className="text-[#2D77D6]">abdullaev2606@gmail.com</p>
                    </div></a>
                </div>
            </div>
        </div>
    );
}

export default Support;