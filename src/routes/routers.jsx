import {
  ResetPassword,
  Events,
  ForgotPassword,
  Home,
  Login,
  Signup,
  Users,
  AccountsHome,
  MyEvents,
  CreateEvent,
  Profile,
  MyInbox,
  MyFavourite,
  MyPackges,
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
    element: <AccountsHome />,
  },
  {
    path: "/account",
    element: <AccountsHome />,
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
    path: "/my-inbox",
    element: <MyInbox />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/my-packges",
    element: <MyPackges />,
  },

  
  {
    path: "/my-fabourites",
    element: <MyFavourite />,
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
