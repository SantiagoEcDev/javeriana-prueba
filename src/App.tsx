import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./app/pages/HomePage";
import LeadsPage from "./app/pages/LeadsPage";

function App() {
  return (
    <>
      <Toaster position="bottom-center" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leads" element={<LeadsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
