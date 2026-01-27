import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
// Vite refresh changes the code; React re-render changes the UI.
//rerender is not reexecuting
// main.tsx is executed only once to boot React
// 👉 useState updates happen inside the already-running React tree
// 👉 Re-render ≠ re-executing main.tsx
// after ("root")! ,!-added bcz of typescript,It’s called the non-null assertion operator.
const container = document.getElementById("root")!;
export const root = createRoot(container);

export function renderApp() {
  console.log("main file rendered")
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

renderApp();  // initial render
