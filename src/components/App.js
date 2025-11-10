import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      <header>
        <Header
          name={blogData.name}
          about={blogData.about}
          image={blogData.image}
        />
      </header>

      <aside>
        {/* You can put sidebar info here */}
        <p>Sidebar content</p>
      </aside>

      <main>
        <ArticleList posts={blogData.posts} />
      </main>
    </div>
  );
}

export default App;
