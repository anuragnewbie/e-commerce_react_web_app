import Login from "../src/app/components/Login";
import AllProducts from "./app/components/AllProducts";
import Cart from "./app/components/Cart";
import Electronics from "./app/components/Electronics";
import Jewellery from "./app/components/Jewellery";
import Men from "./app/components/Men";
import Women from "./app/components/Women";

// setting up an array of all possible routes
const routes = [
    { path: "/login", name: "", component: Login },
    { path: "/allProducts", name: "", component: AllProducts },
    { path: "/electronics", name: "", component: Electronics },
    { path: "/jewellery", name: "", component: Jewellery },
    { path: "/men", name: "", component: Men },
    { path: "/women", name: "", component: Women },
    { path: "/cart", name: "", component: Cart }
];

export default routes;
