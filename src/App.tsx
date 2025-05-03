import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { Routes, Route } from "react-router";
import { Home } from "./pages/home";
import { SignIn } from "./pages/sign-in";
import { SignUp } from "./pages/sign-up";
import { AuthAction } from "./pages/auth-action";
import { Dashboard } from "./pages/dashboard";

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
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
