import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// import pages
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";

// import components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";
import WritePostPage from "./pages/WritePage/WritePostPage";

// import styling
import "./App.css";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  const [admin, setAdmin] = useState(false);

  return (
    <main className="app">

    {admin ?
      <div className="admin-container">
        <NavBar admin={admin} setAdmin={setAdmin}/>

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/post/:postId" element={<SinglePostPage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/write-post" element={<WritePostPage />} />

          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <Footer />
      </div>

      :

      <div className="guest-container">
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/post/:postId" element={<SinglePostPage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <Footer />
      </div>
    }

    </main>
  );
}

export default App;
