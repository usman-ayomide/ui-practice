import { useState } from "react";
import mock from "./list";

function App(){
    const [count, setCount] = useState(0);
    //console.log(approvalsMockData);

    function handleCLick(){
        setCount(count + 1);
        //setCount(c => c+1);
        console.log(count);
    }

    return (
        <button onClick={handleCLick}>Click me</button>
    )
}

export default App;