import { useEffect, useState } from "react";
import mock from "./list";
import ApprovalRow from "./ApprovalRow";

function App(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count);
    }, [count]);

    function handleCLick(){
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    return (
        <div>
            <button onClick={handleCLick}>Click me</button>
            <ApprovalRow />
        </div>
    )
}

export default App;