import { createRoot } from "react-dom/client";
import Home from "./Components/Home/index.tsx";
import "./Styles/global.scss";

createRoot(document.getElementById("root")!).render(<Home />);
