import { map } from "lodash";
import { Routes, Route } from "react-router-dom";

// Layouts
import DashboardLayout from 'src/layouts/Dashboard';
import DefaultLayout from 'src/layouts/Default';

// Pages
import Contact from "src/pages/Contact";
import FAQs from "src/pages/FAQs";
import Gitfts from "src/pages/Gifts";
import Properties from "src/pages/Properties";
import Property from "src/pages/Properties/Property";
import Documents from "src/pages/Documents";
import Warranty from "src/pages/Warranty";
import Notifications from "src/pages/Notifications";
import MyProfile from "src/pages/Profile";
import ChangePassword from "src/pages/Profile/ChangePassword";
import Appointments from "src/pages/Appointments";
import Payments from "src/pages/Payments";
import Tickets from "src/pages/Tickets";
import Dashboard from "src/pages/Dashboard";

export const RoutesHOC = (routes: any) => {
  return () => {
    return (
      <Routes>
        {routes.map( ({layout: Layout, routes}: any, i: number) => (
          
          <Route key={i} element={<Layout />}>
          {map(routes, route => {
            return (
              <Route
                key={route.name}
                path={`${route.path}`}
                element={route.component}
              />
            );
          })}
        </Route>
        ))}
        {/* <Route element={<DashboardLayout />}>
          {map(routes, route => {
            return (
              <Route
                key={route.name}
                path={`${route.path}`}
                element={route.component}
              />
            );
          })}
        </Route> */}
      </Routes>
    );
  };
};


export const EssentialsRoutes = {
  DASHBOARD: {
    name: 'Dashboard',
    path: `/dashboard`,
    iconClass: 'nav-dashboard-icon',
    component: <Dashboard />,
  },
  PROPERTIES: {
    name: 'Properties',
    path: `/properties/`,
    iconClass: 'nav-properties-icon',
    component: <Properties />,
  },
  PAYMENTS: {
    name: 'Payments',
    path: `/payments`,
    iconClass: 'nav-payments-icon',
    component: <Payments />,
  },
  DOCUMENTS: {
    name: 'Documents',
    path: `/documents`,
    iconClass: 'nav-documents-icon',
    component: <Documents />,
  },
  WARRANTY: {
    name: 'Warranty',
    path: `/warranty`,
    iconClass: 'nav-warranty-icon',
    component: <Warranty />,
  },
  GIFTS: {
    name: 'Gifts',
    path: `/gifts`,
    iconClass: 'nav-gifts-icon',
    component: <Gitfts />,
  },
};

export const ServicesRoutes = {
  TICKET: {
    name: 'Raise Ticket',
    path: `/create-ticket`,
    iconClass: 'nav-ticket-icon',
    component: <Tickets />,
  },
  APPOINTMENT: {
    name: 'Request Appointment',
    path: `/request-appointment`,
    iconClass: 'nav-appointment-icon',
    component: <Appointments />,
  },
};

export const MoreDashboardRoutes = {
  FAQ: {
    name: 'FAQs',
    path: `/faqs`,
    component: <FAQs />,
  },
  CONTACT: {
    name: 'Contact Us',
    path: `/contact`,
    component: <Contact />,
  },
  PROPERTY: {
    name: 'Property',
    path: `/property/:id`,
    component: <Property />,
  },
  NOTIFICATIONS: {
    name: 'Notifications',
    path: `/notifications`,
    component: <Notifications />
  },
  PROFILE: {
    name: 'My Profile',
    path: `/profile`,
    component: <MyProfile />
  },
  CHANGEPASSWORD: {
    name: 'Change Password',
    path: `/profile/change-password`,
    component: <ChangePassword />
  },
  HOME: {
    name: 'Home',
    path: `/`,
    component: <FAQs />
  }
};

const DashboardRouters1 = {...EssentialsRoutes, ...ServicesRoutes, ...MoreDashboardRoutes}
const DefaultRouters1 = { }

const DashboardRouters = [{
  layout: DashboardLayout,
  routes: DashboardRouters1
}];

const DefaultRouters = [{
  layout: DefaultLayout,
  routes: DefaultRouters1
}];

const AppRouters = [...DashboardRouters, ...DefaultRouters];
export const AppRouter = RoutesHOC(AppRouters);
