import Labs from "./Labs";
import Kanbas from "./Kanbas";
import Landing from "./Landing";
import store from "./Kanbas/store";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
export default function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Kanbas" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
            <Route path="/Landing/*" element={<Landing />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}
