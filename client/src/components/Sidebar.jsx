import { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router";
import { IoIosArrowForward } from "react-icons/io";

const SidebarItem = ({ active, icon, text }) => {
    return (
        <div
            className={`
                border-l-1
                rounded-l-none
                transition-all
                duration-200
                pl-[8px]
                py-[8px]
                mt-[0px]
                cursor-pointer
                rounded-md
                hover:bg-gray-200
                hover:opacity-100
                w-[300px]
                hover:pl-3.5

                ${active
                    ? "border-l-3 border-[#2D77D6] rounded-l-none text-[#2D77D6] font-bold"
                    : "opacity-75 border-gray-400"
                }
            `}
        >
            <span className="mr-2">{icon}</span>
            {text}
        </div>
    );
};

const SidebarAccordion = ({ title, open, setOpen, children }) => {
    return (
        <>
            <div
                className="transition-all duration-200 flex justify-between items-center p-[8px] mt-[4px] cursor-pointer hover:bg-gray-200 rounded-md"
                onClick={() => setOpen(!open)}
            >
                <span>{title}</span>

                <IoIosArrowForward
                    size={17}
                    className={`transition-transform duration-100 ${open ? "rotate-90" : ""
                        }`}
                />
            </div>

            <div
                inert={!open}
                className={`pl-5 overflow-hidden transition-all duration-200
                    ${open
                        ? "max-h-[400px] opacity-100"
                        : "max-h-0 opacity-0"
                    }
                `}
            >
                {children}
            </div>
        </>
    );
};

const Sidebar = () => {
    const location = useLocation();
    const initialized = useRef(false);

    const [guide, setGuide] = useState(false);
    const [reports, setReports] = useState(false);
    const [resource, setResource] = useState(false);
    const [services, setServices] = useState(false);

    const guideItems = [
        { path: "/docs/reassessment", text: "Переоценка", icon: "🏷️" },
        { path: "/docs/labels-and-price", text: "Печать этикеток и ценников", icon: "🖨️" },
        { path: "/docs/receipt-of-invoices", text: "Поступление накладных", icon: "📦" },
        { path: "/docs/peretarkation-and-cutting", text: "Перетарка и разделка", icon: "🔪" },
        { path: "/docs/sale-of-goods", text: "Реализация товаров", icon: "🛒" },
        { path: "/docs/displacement-of-goods", text: "Перемещение товаров", icon: "🚛" },
        { path: "/docs/write-off-of-goods", text: "Списание товаров", icon: "🗑️" },
        { path: "/docs/product-release", text: "Выпуск продукции", icon: "🏭" },
        { path: "/docs/inventory-of-goods", text: "Инветаризация товаров", icon: "🧮" },
        { path: "/docs/cash-reports", text: "Zетка (кассы)", icon: "💰" },
    ];

    const reportItems = [
        { path: "/docs/product-report", text: "Товарный отчет", icon: "📋" },
        { path: "/docs/nomenclature", text: "Номенклатура ", icon: "📕" },
        { path: "/docs/remnants-goods", text: "Остатки товаров", icon: "🔍" },
        { path: "/docs/movements=goods", text: "Движение товаров", icon: "📈" },
        { path: "/docs/write-off-goods", text: "Отчет по списаниям", icon: "📊" },
        { path: "/docs/recipes", text: "Рецептуры", icon: "📄" }
    ];

    const resourceItems = [
        { path: "/docs/templates", text: "Шаблоны", icon: "✨" },
        { path: "/docs/instruction", text: "Должностная инструкция", icon: "📋" },
        { path: "/docs/tickets", text: "Реестр штрафов", icon: "💵" }
    ];

    const serviceItems = [
        { path: "/docs/exam", text: "Экзаменация", icon: "👨‍🎓" },
        { path: "/docs/faqs", text: "Вопросы и ответы", icon: "⁉️" },
        { path: "/docs/support", text: "Поддержка", icon: "🙋" }
    ];

    useEffect(() => {
        if (initialized.current) return;

        if (guideItems.some(item => item.path === location.pathname)) {
            setGuide(true);
        }

        if (reportItems.some(item => item.path === location.pathname)) {
            setReports(true);
        }

        if (resourceItems.some(item => item.path === location.pathname)) {
            setResource(true);
        }

        if (serviceItems.some(item => item.path === location.pathname)) {
            setServices(true);
        }

        initialized.current = true;

    }, []);

    const renderItems = (items) =>
        items.map((item) => (
            <NavLink key={item.path} to={item.path}>
                {({ isActive }) => (
                    <SidebarItem
                        active={isActive}
                        icon={item.icon}
                        text={item.text}
                    />
                )}
            </NavLink>
        ));

    return (
        <aside className="pl-4 py-2 flex flex-col justify-between w-[360px] shrink-0">
            <div>
                <NavLink to="/docs" end>
                    {({ isActive }) => (
                        <div
                            className={`
                                hover:ml-1
                                transition-all
                                duration-200
                                pl-[8px]
                                py-3
                                my-3
                                cursor-pointer
                                rounded-md
                                hover:bg-gray-200
                                hover:opacity-100
                                hover:pl-2
                                ${isActive
                                    ? "text-[#2D77D6] font-bold bg-gray-200"
                                    : "opacity-75 border-gray-400"
                                }`}
                        >
                            <span className="mr-2">👋</span>
                            Добро пожаловать!
                        </div>
                    )}
                </NavLink>

                <SidebarAccordion
                    title="СПРАВОЧНИК"
                    open={guide}
                    setOpen={setGuide}
                >
                    {renderItems(guideItems)}
                </SidebarAccordion>

                <SidebarAccordion
                    title="ОТЧЁТЫ И КОНТРОЛЬ"
                    open={reports}
                    setOpen={setReports}
                >
                    {renderItems(reportItems)}
                </SidebarAccordion>

                <SidebarAccordion
                    title="РЕСУРСЫ"
                    open={resource}
                    setOpen={setResource}
                >
                    {renderItems(resourceItems)}
                </SidebarAccordion>

                <SidebarAccordion
                    title="СЕРВИСЫ"
                    open={services}
                    setOpen={setServices}
                >
                    {renderItems(serviceItems)}
                </SidebarAccordion>

            </div>
        </aside>
    );
};

export default Sidebar;