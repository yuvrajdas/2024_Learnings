import React, { useMemo, useState } from 'react'

const __3UseMemo = () => {
    const [item, setItem] = useState(0);
    const [count, setCount] = useState(2);


    /**
     * useMemo : It is a hook used in functional component to prevent the unneccessory function call, or used to inhance the performance.
     */
    const checkRendering = useMemo(() => {
        console.log("checkRendering...");
        return count + 5;

    }, [count]) // we neet to tell the function for which state updation have to execution the function.

    return (
        <>
            <h1>Item : {item}</h1>
            <h1>Count : {count}</h1>
            <h2>{checkRendering}</h2>
            <button onClick={() => setItem(item + 1)}>Update Item</button>
            <button onClick={() => setCount(count * 2)}>Update Count</button>
        </>
    )
}

export default __3UseMemo