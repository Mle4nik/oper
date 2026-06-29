import React from 'react';
import { Outlet } from "react-router";
import './App.css';

import Sidebar from "../components/Sidebar";
import Top_Title from "../components/Top_Title";

function App() {
    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <Top_Title />

            <div className="flex flex-1 overflow-hidden max-w-[1480px] mx-auto w-full">
                <div className="w-[380px] shrink-0 flex flex-col">
                    {/* Скроллится только сайдбар */}
                    <aside className="flex-1 overflow-y-auto">
                        <Sidebar />
                    </aside>

                    {/* Всегда внизу колонки */}
                    <div className="text-xs px-4 py-4 border-t border-gray-200">
                        Обновлено:
                        <span className="text-[#2D77D6] ml-1">
                            25.06.2026г
                        </span>
                    </div>
                </div>

                <section className="flex-1 overflow-y-auto">
                    <div className="max-w-[1100px] px-8 py-6">
                        <Outlet />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;