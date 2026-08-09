import mock from "./list";
import ApprovalRow from "./ApprovalRow";
import Input from "./Input";
import { useState } from "react";

function App(){
    const [revoke, setRevoke] = useState(mock);
    const [paste, setPasted] = useState("");

    function handlePasted(e){
        /*destructure name and value to the what was typed
        and set pasted to the value */
        const {name, value} = e.target;
        setPasted(value);
    }
    
    function handleRevoke(id){
        /*pass in the id of the wallet whose revoke button was clicked
        check if the id matches the paramter, take the amount of that row
        and set it to 0, then set revoked to true. 
        after that return input back to empty */
        setRevoke(visibleRows.map(rev => 
            rev.id === id ? {...rev, amount: "0", revoked: true} : rev
        ));
        setPasted("");
    }

    /*look through the mock array, for each row, check if the wallet pasted 
    exists*/
    const visibleRows = revoke.filter(rev => 
        rev.spender.toLowerCase().includes(paste.toLowerCase())
    );
    
    return (
        <div>
            <Input value={paste}
                onPaste={handlePasted} 
            />
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Amount</th>
                        <th>Token</th>
                        <th>Spender</th>
                        <th>Revoke Approval</th>
                    </tr>
                </thead>
                <tbody>
                    {visibleRows.map((rev) => (
                        <ApprovalRow onRevoke={handleRevoke} revoked={rev.revoked}
                            key={rev.id} id={rev.id} token={rev.token}
                            spender={rev.spender} amount={rev.amount}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;