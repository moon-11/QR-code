import { createRoot } from "react-dom/client";
import Home from "./Components/Home/index.tsx";
import "./styles/global.scss";

createRoot(document.getElementById("root")!).render(<Home />);
