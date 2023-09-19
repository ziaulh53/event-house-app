import { Events, Home, Login, NotFound,Signup, Users, UsersForm } from "../pages";

export const PublicRoutes = [
  {
    path:"/",
    element: <Home />
  }
]

export const AuthRoutes = [
  {
    path:"/signin",
    element: <Login />
  },
  {
    path:"/signup",
    element: <Signup />
  }
]

export const PrivateRoutes = [
  {
    path:"/users",
    element: <Users />
  },
  {
    path:"/users/:id",
    element: <UsersForm />
  },
  {
    path:"/account",
    element: <UsersForm />
  }
]

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