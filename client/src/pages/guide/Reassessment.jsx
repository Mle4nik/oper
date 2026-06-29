import React from 'react'

const Reassessment = () => {
  return (
    <div className="flex flex-col justify-between overflow">
      <div>
        <h1 className="text-5xl font-black mb-13">
          🏷️ Переоценка
        </h1>

        <div className='flex flex-col gap-6'>
          <div className=''>
            <h2 className="text-2xl mb-2 font-bold">Назначение</h2>
            <div className='flex'>
              <div className='border-l-2 border-gray-400 mr-4'></div>
              <div>
                <p className="py-1">Документ «Переоценка товаров» используется для изменения стоимости товаров и последующей печати актуальных ценников.</p>
                <p className="py-1">Переоценка выполняется после получения соответствующих документов из офиса.</p>
                <p className="py-1">О проведении документа свидетельствует наличие зеленой галочки в самом левом столбце строки.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#cfe2fa] p-3 py-5 rounded-md">
            <span className="font-bold text-2xl">🖨️ Для печати необходимо:</span>
            <div className="flex pt-2">
              <div className="mx-4 h-auto border-1 border-gray-400"></div>
              <ul className='ml-1'>
                <li>1. Открыть документ «Переоценка товаров».</li>
                <li>2. Перейти в нужный документ.</li>
                <li>3. Нажать Печать.</li>
                <li>4. Выбрать склад магазина.</li>
                <li>5. Подтвердить действие.</li>
              </ul>
            </div>
          </div>

          <div>
            <span className="font-bold text-2xl">Печать скидок</span>
            <p className='my-2'>Дополнительно необходимо проверить документы назначения скидок.</p>
            <div className='flex items-center'>
              <p className='mr-2 font-bold'>Путь:</p><span className='bg-gray-200 px-2 rounded-md'>Документы → Ценообразование → Назначение скидок</span>
            </div>
            <p className='mt-2'>После открытия:</p>
            <div className="flex pt-2">
              <div className="h-auto border-1 border-gray-400"></div>
              <ul className="pl-5">
                <li>1. Отключить отбор.</li>
                <li>2. Найти документы с зеленой галочкой.</li>
                <li>3. Распечатать необходимые документы.</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-200 rounded-md p-3 py-5">
            <h2 className="text-2xl font-bold">🔍 Комментарии, требующие внимания</h2>
            <p className='py-2 pl-3.5'>При печати обращайте внимание на комментарии документа.</p>
            <p className='pl-3.5'>Наиболее распространенные:</p>
            <div className="flex pl-3.5 pt-2">
              <div className="h-auto border-1 border-gray-400"></div>
              <ul className="pl-5">
                <li>Уценка (с указание филиала).</li>
                <li>ФРОВ (Товар дня).</li>
                <li>Распродажа.</li>
                <li>Листовка паллета.</li>
                <li>Спроси у кассира / Товар кассира.</li>
                <li>Производство.</li>
              </ul>
            </div>
            <p className='pt-2 pl-3'>Если комментарий пуст или же документ относится к данным категориям, его необходимо распечатать.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reassessment