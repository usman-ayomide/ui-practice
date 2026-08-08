import mock from "./list";
import ApprovalRow from "./ApprovalRow";
import Input from "./Input";
import { useState } from "react";

function App(){
    const [revoke, setRevoke] = useState(mock);
    const [paste, setPasted] = useState("");

    function handlePasted(e){
        const {name, value} = e.target.value;
        console.log(name, value)
        setPasted(revoke.filter(rev => 
            rev.spender !== spender
        ));
    }
    
    function handleRevoke(id){
        setRevoke(revoke.map(rev => 
            rev.id === id ? {...rev, amount: "0", revoked: true} : rev
        ));
        setPasted("");
    }

    return (
        <div>
            <Input 
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
                    {revoke.map((rev) => (
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