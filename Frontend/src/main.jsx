import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layout/MainLayout.jsx'
import Dashboard from './routes/Dashboard.jsx'
import Settings from './routes/Settings.jsx'
import Calendar from './routes/Calendar.jsx'
import IntensityBar from './routes/IntensityBar.jsx'
import Pie from './routes/Pie.jsx'
import Invoice from './routes/Invoice.jsx'
import FAQ from './routes/FAQ.jsx'
import Contacts from './routes/Contacts.jsx'
import Filters from './components/Filters.jsx'
import RelevanceBar from './routes/RelevanceBar.jsx'
import LikelihoodBar from "./routes/LikelihoodBar.jsx"
import StartYearLine from "./routes/StartYearLine.jsx"
import EndYearLine from "./routes/EndYearLine.jsx"



const router = createBrowserRouter([
  {
    element:<MainLayout />,
    children:[
      {
        element:<Dashboard />,
        path:"/"
      }, 
      {
        element: <Settings />,
        path: "/settings"
      },
      {
        element: <Calendar />,
        path:"/calendar"
      },
      {
        element: <IntensityBar/>,
        path: "/intensity_bar"
      },
      {
        element: <StartYearLine />,
        path: "/start_year_line"
      },
      {
        element: <Invoice/>,
        path:"/invoice"
      },
      {
        element: <FAQ/>,
        path:"/faq"
      },
      // {
      //   element: <Contacts />,
      //   path:"/contacts"
      // },
      {
        element: <Filters />,
        path: "/filters"
      },
      {
        element:<RelevanceBar />,
        path: "/relevance_bar"
      },
      {
        element: <LikelihoodBar/>,
        path:"/likelihood_bar"
      },
      {
        element: <Pie />,
        path: "/topic_pie"
      },
      {
        element: <EndYearLine />,
        path: "/end_year_line"
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
