import {
  useOptionalUser
} from "/build/_shared/chunk-UMAW3BVV.js";
import {
  Link
} from "/build/_shared/chunk-XVJCQZ4H.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-6BO74FWO.js";

// browser-route-module:/Users/macbookpro/Desktop/blog-tutorial/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
function Index() {
  const user = useOptionalUser();
  return /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto mt-16 max-w-7xl text-center"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/posts",
    className: "text-xl text-blue-600 underline"
  }, "Blog Posts"));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-TGWOSUYA.js.map
