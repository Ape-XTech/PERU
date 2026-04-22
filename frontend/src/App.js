import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#2C2B29",
            color: "#FAFAF8",
            border: "1px solid #C05A45",
            borderRadius: "2px",
            fontFamily: "Outfit, sans-serif",
          },
        }}
      />
    </div>
  );
}

export default App;
