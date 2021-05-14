import React, { useState } from "react";
import AnimatedNumber from "react-animated-number";

export default function Random() {
    var items = [6252300306, 6452300307, 6152300308, 6352300309, 6252300310];
    const [item, setitem] = useState(0);
    console.log(item)

    return (
        <div>
            <AnimatedNumber
                component="text"
                value={item}
                style={{
                    transition: "0.8s ease-out",
                    fontSize: 50,
                    transitionProperty: "background-color, color, opacity",
                }}
                frameStyle={perc => (
                    perc === 100 ? {} : { backgroundColor: '#ffeb3b' }
                )}
                duration={300}
                formatValue={(n) => n.toFixed(0)}
            />
            <div>
                <button onClick={() => setitem(items[Math.floor(Math.random() * items.length)])}>
                    Retry
                </button>
            </div>
        </div>
    );
}
