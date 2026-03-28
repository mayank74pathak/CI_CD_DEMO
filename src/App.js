import React from "react";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 CI/CD Demo Project</h1>
      <p>This app is automatically deployed using GitHub Actions</p>
      <h3>By: Your Name</h3>
      <p>Last Updated: {new Date().toLocaleString()}</p>
    </div>
  );
}

export default App;
