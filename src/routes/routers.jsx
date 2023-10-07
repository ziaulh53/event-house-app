import {
  ResetPassword,
  Events,
  ForgotPassword,
  Home,
  Login,
  Signup,
  Users,
  UsersForm,
  MyEvents,
  CreateEvent,
  Profile,
} from "../pages";

export const PublicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/events",
    element: <Events />,
  },
];

export const AuthRoutes = [
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
];

export const PrivateRoutes = [
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/users/:id",
    element: <UsersForm />,
  },
  {
    path: "/account",
    element: <UsersForm />,
  },
  {
    path: "/create-event",
    element: <CreateEvent />,
  },
  {
    path: "/my-events",
    element: <MyEvents />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: Home,
//   },
//   {
//     path: "/events",
//     Component: Events,
//   },
//   {
//     path: "/signin",
//     Component: Login,
//   },
//   {
//     path: "*",
//     Component: NotFound,
//   },

// ]);

// export default router;
