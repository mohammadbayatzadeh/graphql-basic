import { HomePage } from "./components/HomePage";
import { Lauout } from "./components/layout";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./components/blog/BlogPage";
import AuthorPage from "./components/Author/AuthorPage";

function App() {
  return (
    <Lauout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
      </Routes>
    </Lauout>
  );
}

export default App;
