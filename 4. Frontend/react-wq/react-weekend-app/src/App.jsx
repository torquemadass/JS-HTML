import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";
// import './App.css'


export default function App() {
  const handleClick = (variant) => {
    console.log(`${variant} button clicked!`);
  };

  return (
    <div className="p-8 space-y-8">
      <section className="space-y-4">
        <h2 className="text-xl font-bold">Button Variants</h2>
        
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Primary</h3>
          <div className="space-x-4">
            <Button onClick={() => handleClick('primary')}>Default</Button>
            <Button className="hover">Hover</Button>
            <Button className="active">Active</Button>
            <Button disabled>Disabled</Button>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Secondary</h3>
          <div className="space-x-4">
            <Button variant="secondary" onClick={() => handleClick('secondary')}>Default</Button>
            <Button variant="secondary" className="hover">Hover</Button>
            <Button variant="secondary" className="active">Active</Button>
            <Button variant="secondary" disabled>Disabled</Button>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Bonus</h3>
          <div className="space-x-4">
            <Button variant="bonus" onClick={() => handleClick('bonus')}>Default</Button>
            <Button variant="bonus" className="hover">Hover</Button>
            <Button variant="bonus" className="active">Active</Button>
            <Button variant="bonus" disabled>Disabled</Button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Card States</h2>
        <div className="grid grid-cols-2 gap-4 max-w-2xl">
          <Card onClick={() => console.log('Default card clicked')}>
            <div className="h-32 flex items-center justify-center text-gray-500">
              Content area (Default)
            </div>
          </Card>

          <Card className="hover">
            <div className="h-32 flex items-center justify-center text-gray-500">
              Content area (Hover)
            </div>
          </Card>

          <Card className="active">
            <div className="h-32 flex items-center justify-center text-gray-500">
              Content area (Active)
            </div>
          </Card>

          <Card disabled>
            <div className="h-32 flex items-center justify-center text-gray-500">
              Content area (Disabled)
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}





















// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
