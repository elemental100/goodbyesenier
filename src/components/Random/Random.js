import React, { useState } from "react";
import AnimatedNumber from "animated-number-react";
import axios from 'axios'


let id = [""];

const getStuInfo = async () => {
    try {
        const response = await axios.get("https://yo2h8kjeh9.execute-api.ap-southeast-1.amazonaws.com/productions/getregisterstu")
        const stuInfo = response.data.Items;
        id.pop();
        stuInfo.forEach(it => {
            id.push(it);
        });
    } catch (error) {
        console.error(error)
    }
}
getStuInfo();

export default function Random() {
    const [position, setPosition] = useState(0);
    const [name, setName] = useState("");
    
    console.log(id)
    console.log("stuInfo", id[position])
    return (
        <div style={{ textAlign: "center" }}>
            <AnimatedNumber
                value={id[position].stdId}
                duration={1000}
                formatValue={(value) => value.toFixed(0)}
            />
            <div>
                <button onClick={() => {
                    setPosition([Math.floor(Math.random() * id.length)])
                    setName("")
                    id.splice([position],1)
                }
                }>
                    Random
                </button>
            </div>
            <div>
                <button onClick={() => {
                    setName(`${id[position].fName} ${id[position].lName}`);    
                }
                }>
                    Showname
                </button>
            </div>
            <div >
                {name}
            </div>

        </div>
    );
}

