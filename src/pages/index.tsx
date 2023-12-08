import App from "./App";

type Page={
  path: string
  element: any
  name: string
}

const Pages: Page[] = [
  {
    path: "/",
    element: App, //React.lazy(() => import("./App")),
    name: "Home"
  }
];

export default Pages;