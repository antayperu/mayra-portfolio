import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { ProjectCase } from "./pages/ProjectCase";
import { NotFound } from "./pages/NotFound";

export function RoutesView() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/proyectos" element={<Projects />} />
                <Route path="/proyectos/:slug" element={<ProjectCase />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}
