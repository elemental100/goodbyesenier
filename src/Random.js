import React, { useState } from "react";
import AnimatedNumber from "animated-number-react";
import axios from 'axios'

const getUsers = async () => {
    try {
        const response = await
            axios.get("https://yo2h8kjeh9.execute-api.ap-southeast-1.amazonaws.com/productions/getregisterstu")
        console.log('response: ', response.data.Items);
    } catch (error) {
        console.error(error)
    }
}

var id = ["6252300306", "6152300307", "6352300308"]


export default function Random() {
    const [position, setPosition] = useState(0);
    console.log(id[position])
    return (
        <div>
            <AnimatedNumber
                value={id[position]}
                duration={300}
                formatValue={(value) => value.toFixed(0)}
            />
            <div>
                <button onClick={() => setPosition([Math.floor(Math.random() * id.length)])}>
                    Retry
                </button>
            </div>
        </div>
    );
}

