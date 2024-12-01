import React from "react";
import Button from "./react-wq/react-weekend-app/src/components/Button";
import Card from "./react-wq/react-weekend-app/src/components/Card";

export default function App() {
    const handleClick = (variant) => {
        console.log(`${variant} button clicked!`);  
    };

    return (
        <div className="p-8 space-y-8 flex-col items-center h-screen w-screen">
            <section className="space-y-4">
                <h2 className="text-xl font-bold">Button Variants</h2>
                <div className="space-y-2">
                    <h3 className="text-sm font-medium">Primary</h3>
                    <div className="space-x-4">
                        <Button variant="bonus" onClick={() => handleClick("primary")}>Default</Button>
                        <Button variant="bonus" className="hover">Hover</Button>
                        <Button variant="bonus" className="active">Active</Button>
                        <Button variant="bonus" disabled>Disabled</Button>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-bold">Card States</h2>
                <div className="grid grid-cols-2 gap-4 max-w-2xl">
                   <Card onClick={() => console.log("Default card clicked")}>
                    <div className="h-32 flex items-center justify-center text-gray-500 font-semibold">
                        Content Area (Default)
                    </div>
                   </Card>
                   <Card className="hover">
                    <div className="h-32 flex items-center justify-center text-gray-500 font-semibold">
                        Content Area (Hover)
                    </div>
                   </Card>
                   <Card className="active">
                    <div className="h-32 flex items-center justify-center text-gray-500 font-semibold">
                        Content Area (Active)
                    </div>
                   </Card>
                   <Card disabled>
                    <div className="h-32 flex items-center justify-center text-gray-500 font-semibold">
                        Content Area (Disabled)</div>
                    </Card> 
                </div>
            </section>
        </div>
    )
}