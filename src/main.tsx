import React from 'react'
import ReactDOM from 'react-dom/client'
import './components/css/bootstrap-grid.css';
import './index.css'
import './components/css/Spinner.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  createBrowserRouter,
  // redirect,
  RouterProvider,
} from "react-router-dom";
// import { Webinar } from './components/Webinar/Webinar.tsx';
import { ErrorPage } from './components/ErrorPage.tsx';
// import { loader as loaderWebinar } from './components/Webinar/Webinar.tsx';
// import { loginAction, loginLoader, LoginPage } from './components/Webinar/LoginPage.tsx';
// import { protectedLoader, ProtectedPage } from './components/Webinar/Protected.tsx';
// import { fakeAuthProvider } from './api/api.ts';
import { Workshop } from './components/Event/workshop/Workshop.tsx';
import { loader as workshopLoader, action as workshopAction } from './components/Event/workshop/Workshop.tsx';
import { Preview } from './components/Event/workshop/Preview.tsx';
import { loader as previewLoader } from "./components/Event/workshop/Preview.tsx";
import { Home, loader as loaderHome } from './components/Home.tsx';
import { AboutTeamAndCompany } from './components/Team.tsx';
import { CaseStudies } from './components/CaseStudies.tsx';
import { Services } from './components/Services.tsx';
import { Index } from './components/Index.tsx';
import { Blog } from './components/Blog.tsx';
import { Contact } from './components/Contact.tsx';
import { BookAppointment, loader as BookAppointmentLoader, action as BookAppointmentAction } from './components/Event/Calendar/BasicCalendar.tsx';
import { Publication, loader as publicationLoader } from './components/Event/Publication/Publication.tsx';
import { FreeResources } from './components/FreeResources.tsx';
import { FreeWorkshops } from './components/FreeWorkshops.tsx';

const router = createBrowserRouter([
  {
    id: "home-element",
    path: "/",
    element: <Home />,
    loader: loaderHome,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: loaderHome
      },
      {
        path: "/company",
        element: <AboutTeamAndCompany />,
        loader: loaderHome
      },
      {
        path: "/casestudies",
        element: <CaseStudies />,
        loader: loaderHome
      },
      {
        path: "/services",
        element: <Services />,
        loader: loaderHome
      },
      {
        path: "/blog",
        element: <Blog />,
        loader: loaderHome
      },
      {
        path: "/free-resources",
        element: <FreeResources />,
        loader: loaderHome
      },
      {
        path:"/publication/:publicationId",
        element: <Publication />,
        loader: publicationLoader
      },
      {
        path: "/workshops",
        element: <FreeWorkshops />,
        loader: loaderHome
      },    
      {
        path: "/contact",
        element: <Contact />,
        loader: loaderHome
      }
    ]
  },

  {
    path: "/workshop/:landingId",
    loader: workshopLoader,
    action: workshopAction,
    element: <Workshop />,
    errorElement: <ErrorPage />
  },
  {
    path: "/preview/:token/:eventId",
    loader: previewLoader,
    element: <Preview />,
    errorElement: <ErrorPage />

  }
  ,
  {
    path: "/book",
    element: <BookAppointment />,
    loader: BookAppointmentLoader,
    action: BookAppointmentAction
  }

]);


ReactDOM.createRoot(
  document.getElementById("root") as Element).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>);
