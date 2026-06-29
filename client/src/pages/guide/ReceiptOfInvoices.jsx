import React from 'react'

const ReceiptOfInvoices = () => {
  return (
    <div className="flex flex-col justify-between overflow">
      <div>
        <h1 className="text-5xl font-black mb-13">
          📦 Поступление накладных
        </h1>

        <div className='flex flex-col gap-6'>
          <div className=''>
            <h2 className="text-2xl mb-2 font-bold">Назначение</h2>
            <div className='flex'>
              <div className='border-l-2 border-gray-400 mr-4'></div>
              <div>
                <p className="py-1">Документ «Поступление товаров» используется для отражения факта приемки товара от поставщика.</p>
                <p className="py-1">После проведения документа товары появляются на остатках соответствующего склада.</p>
                <p className="py-1">Для начала работы с документом, необходимо перейти по следующему пути:</p><span className='bg-gray-200 px-2 py-1 rounded-md'>Документы → Поступление → Поступление товаров</span>
              </div>
            </div>
          </div>

          <div className="bg-[#cfe2fa] p-3 py-4 rounded-md">
            <span className="font-bold text-2xl">📝 Заполнение документа</span>
            <p className='my-2'>Необходимо указать:</p>
            <div className="flex pt-2">
              <div className="mx-4 h-auto border-1 border-gray-400"></div>
              <ul>
                <li>Время и дату приемки товара.</li>
                <li>Дату и номер входящего документа.</li>
                <li>Договор поставщика.</li>
                <li>Занести позиции, откорректировать цены и итоговую сумму.</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-200 rounded-md p-3 py-4">
            <h2 className="text-2xl font-bold">‼️ Работа с НДС</h2>
            <div className='flex pl-4 pt-2'>
              <div className="h-auto border-1 border-gray-400"></div>
              <p className='py-2 pl-5'>Если поставщик работает без НДС, то следует указать соотвествующее значение в столбце, в остальных случаях необходимо выбрать ставку, указанную в документах поставщика.</p>
            </div>
          </div>

          <p>После всех занесенных реквизитов, следует <b><i>Записать</i></b> и <b><i>Провести</i></b> документ.</p>

        </div>
      </div>
    </div>
  )
}

export default ReceiptOfInvoices