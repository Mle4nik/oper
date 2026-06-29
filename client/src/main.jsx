import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router';

import App from './pages/App.jsx';
import Login from './pages/Login.jsx';
import Welcome from './pages/Welcome.jsx';
import ProtectedRoute from './components/ProtectedRoute';

// Справочник
import CashReport from './pages/guide/CashReport.jsx';
import DisplacementOfGoods from './pages/guide/DisplacementOfGoods.jsx';
import InventoryOfGoods from './pages/guide/InventoryOfGoods.jsx';
import LabelsAndPrice from './pages/guide/LabelsAndPrice.jsx';
import PeretarkationAndCutting from './pages/guide/PeretarkationAndCutting.jsx';
import ProductRelease from './pages/guide/ProductRelease.jsx';
import Reassessment from './pages/guide/Reassessment.jsx';
import ReceiptOfInvoices from './pages/guide/ReceiptOfInvoices.jsx';
import SaleOfGoods from './pages/guide/SaleOfGoods.jsx';
import WriteOffOfGoods from './pages/guide/WriteOffOfGoods.jsx';

// Отчёты и контроль
import MovementsGoods from './pages/reports/MovementsGoods.jsx';
import Nomenclature from './pages/reports/Nomenclature.jsx';
import ProductReport from './pages/reports/ProductReport.jsx';
import Recipes from './pages/reports/Recipes.jsx';
import RemnantsGoods from './pages/reports/RemnantsGoods.jsx';
import WriteOffGoods from './pages/reports/WriteOffGoods.jsx';

// Ресурсы
import Templates from './pages/resources/Templates.jsx';
import Instruction from './pages/resources/Instruction.jsx';
import Tickets from './pages/resources/Tickets.jsx';

// Сервисы
import Exam from './pages/services/Exam.jsx';
import Faqs from './pages/services/Faqs.jsx';
import Support from './pages/services/Support.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },

  {
    path: '/docs',
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),

    children: [
      {
        index: true,
        element: <Welcome />
      },

      // СПРАВОЧНИК

      {
        path: "cash-reports",
        element: <CashReport />,
      },

      {
        path: "displacement-of-goods",
        element: <DisplacementOfGoods />,
      },

      {
        path: "inventory-of-goods",
        element: <InventoryOfGoods />,
      },

      {
        path: "labels-and-price",
        element: <LabelsAndPrice />,
      },

      {
        path: "peretarkation-and-cutting",
        element: <PeretarkationAndCutting />,
      },

      {
        path: "product-release",
        element: <ProductRelease />,
      },

      {
        path: "reassessment",
        element: <Reassessment />,
      },

      {
        path: "receipt-of-invoices",
        element: <ReceiptOfInvoices />,
      },

      {
        path: "sale-of-goods",
        element: <SaleOfGoods />,
      },

      {
        path: "write-off-of-goods",
        element: <WriteOffOfGoods />,
      },

      // ОТЧЁТЫ И КОНТРОЛЬ

      {
        path: 'movements=goods',
        element: <MovementsGoods />
      },
      {
        path: 'nomenclature',
        element: <Nomenclature />
      },
      {
        path: 'product-report',
        element: <ProductReport />
      },
      {
        path: 'recipes',
        element: <Recipes />
      },
      {
        path: 'remnants-goods',
        element: <RemnantsGoods />
      },
      {
        path: 'write-off-goods',
        element: <WriteOffGoods />
      },

      // РЕСУРСЫ

      {
        path: 'templates',
        element: <Templates />
      },
      {
        path: 'instruction',
        element: <Instruction />
      },
      {
        path: 'tickets',
        element: <Tickets />
      },

      // СЕРВИСЫ

      {
        path: 'exam',
        element: <Exam />
      },
      {
        path: 'faqs',
        element: <Faqs />
      },
      {
        path: 'support',
        element: <Support />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);