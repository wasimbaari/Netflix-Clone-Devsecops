from pathlib import Path

# -----------------------------
# Repository structure
# -----------------------------
DIRS = [
    "app/src",
    "app/public",
    "ci/github-actions",
    "docker",
    "infra/terraform",
    "k8s",
    "argocd",
    "security",
    "observability"
]

FILES = {
    ".gitignore": """# Node
node_modules/
app/node_modules/

# Env
.env
.env.*

# OS
.DS_Store
""",

    "app/package.json": """{
  "name": "netflix-clone-frontend",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "vite build"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "vite": "^5.0.0",
    "typescript": "^5.3.0"
  }
}""",

    "app/index.html": """<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Netflix Clone DevSecOps</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
""",

    "app/src/main.tsx": """import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <h1 style={{ textAlign: "center", color: "red" }}>
    Netflix Clone – DevSecOps Platform
  </h1>
);

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(<App />);
""",

    "app/tsconfig.json": """{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true
  }
}""",

    "app/vite.config.ts": """import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist"
  }
});
"""
}

# -----------------------------
# Create directories
# -----------------------------
for d in DIRS:
    Path(d).mkdir(parents=True, exist_ok=True)

# -----------------------------
# Create files
# -----------------------------
for path, content in FILES.items():
    file_path = Path(path)
    file_path.parent.mkdir(parents=True, exist_ok=True)
    file_path.write_text(content)

print("✅ Repository scaffold created successfully.")

