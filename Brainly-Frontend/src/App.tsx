import { Button } from "./components/ui/button";

// src/App.tsx
export default function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 underline">
        <Button onClick={()=>{}} variant="primary" size="sm" startIcon=""  endIcon="" text="Add Content" ></Button>
      </h1> 
      
    </div>
  )
}