import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { AuthAction } from "./pages/AuthAction";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/auth/action" element={<AuthAction />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
