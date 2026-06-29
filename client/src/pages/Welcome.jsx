import React from "react";
import { IoIosArrowForward } from "react-icons/io";


const Welcome = () => {
    return (
        <div className="flex flex-col justify-between overflow">
            <div>
                <h1 className="text-5xl font-black mb-13">
                    👋 Добро пожаловать <span className="text-[#2D77D6]">в операторскую!</span>
                </h1>
                <div>
                    <h2 className="text-2xl font-bold">👩‍💻 Немного о проекте</h2>
                    <p className="px-2 py-2">Данный справочник предназначен для обучения и сопровождения операторов 1С.</p>
                    <p className="px-2 py-2">Основная задача ресурса — собрать в одном месте все основные процессы, с которыми оператор сталкивается в ежедневной работе.</p>
                    <p className="px-2 py-2">Справочник не заменяет обучение с наставником, но помогает быстро восстановить знания и найти необходимую информацию во время работы.</p>
                </div>
                <div className="bg-[#cfe2fa] my-4 py-5 p-3 rounded-md">
                    <span className="font-bold text-2xl">⁉️ Как пользоваться справочником</span>
                    <p className="py-2 pl-3">Материалы разделены на несколько категорий:</p>
                    <div className="pl-3 flex">
                        <div className="h-auto border-1 border-gray-600"></div>
                        <ul className="pl-6">
                            <p><b>Справочник</b> - содержит инструкции по оформлению документов и выполнению ежедневных операций.</p>
                            <p><b>Отчеты и контроль</b> - содержит информацию о формировании отчетов и проверке движения товаров.</p>
                            <p><b>Ресурсы</b> - дополнительные материалы, шаблоны и внутренние документы.</p>
                            <p><b>Сервисы</b> - раздел для проверки знаний, получения помощи и поиска ответов на часто задаваемые вопросы.</p>
                        </ul>
                    </div>
                </div>
                {/* <div className="bg-[#b5d3f9] my-4 p-3 rounded-md">
                    <span className="font-bold text-2xl">📚 Справочник предназначен для:</span>
                    <div className="flex pl-3.5 pt-2">
                        <div className="h-auto border-1 border-gray-600"></div>
                        <ul className="pl-6">
                            <li>Обучения новых сотрудников</li>
                            <li>Быстрого поиска инструкций</li>
                            <li>Повторения материала</li>
                            <li>Подготовки к экзаменации</li>
                        </ul>
                    </div>
                </div> */}
                <div className="bg-amber-100 rounded-md p-3 py-5 my-4">
                    <h2 className="text-2xl font-bold">💡 С чего начать</h2>
                    <div className="pl-3.5 flex pt-2">
                        <div className="h-auto border-1 border-gray-600"></div>
                        <div className="pl-6">
                            <p>Если вы только начинаете работу с системой, рекомендуется изучать разделы последовательно.</p>
                            <p>Для поиска конкретной информации используйте навигацию слева или воспользуйтесь поиском по документации.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 rounded-md p-3 py-5 my-4">
                    <h2 className="text-2xl font-bold">📝 Полезно знать</h2>
                    <div className="pl-3.5 flex pt-2">
                        <div className="h-auto border-1 border-gray-600"></div>
                        <div className="pl-6">
                            <p>Все инструкции будут переодически обновляться и дополняться.</p>
                            <p>Каждый раздел будет содержать в себе необходимую теорию, немного практики на основе типовых сценариев и тестирование для закрепления усвоенного материала.</p>
                            <p>Для помощи используйте раздел <b>"🙋 ПОДДЕРЖКА"</b>, либо же можете предварительно ознакомиться с разделом <b>"⁉️ ВОПРОСЫ И ОТВЕТЫ"</b>, дабы найти решение на возникшую проблему.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="border-b-6 border-l-4 active:border-0 active:-translate-x-1 active:translate-y-1.5 border-black flex justify-between opacity-75 bg-[#2D77D6] w-3xs text-white font-bold p-3 text-2xl rounded-md cursor-pointer mt-7 hover:opacity-100 transition-all duration-100"> */}
            {/* <p>ПРИСТУПИТЬ</p> */}
            {/* {IoIosArrowForward} */}
            {/* <p>➡️</p> */}
            {/* </div> */}
        </div>
    );
}

export default Welcome;