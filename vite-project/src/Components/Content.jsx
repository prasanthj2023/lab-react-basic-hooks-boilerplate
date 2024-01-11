import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "./Context";

function Content() {

    let [count, setCount] = useState(0);
    // variable   updater function
    let [displayContent, setDisplayContent] = useState(true);
    let { darkTheme, setDarkTheme } = useContext(MyContext);


    function changeTheme() {
        setDarkTheme(!darkTheme)
    }

    function changeVisibility() {
        alert("display")
        setDisplayContent(!displayContent)
    }

    function changeCount() {
        setCount(count+1);
    }

    useEffect(()=>{
        return (
            console.log("changed")
        )
    }, [displayContent])

    return (
        <>
            <div >
                <button onClick={changeTheme}>Toggle</button>
                <div style={{
                    backgroundColor: darkTheme ? "black" : "white",
                    color : darkTheme ? "white" : "black"
                }}>
                    <p style={{
                        display : displayContent ? "block" : "none"
                    }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Voluptatum consectetur odit aliquam similique perspiciatis
                        voluptate enim nesciunt dicta autem alias, molestiae, voluptas
                        deleniti cupiditate aut tempore provident? Amet, dicta ducimus?
                    </p>
                    <button onClick={changeVisibility}>Content</button>
                    <h3>{count}</h3>
                    <button onClick={changeCount}>Like</button>

                </div>
            </div>

        </>
    )
}

export default Content;