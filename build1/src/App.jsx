import mock from "./list";
import ApprovalRow from "./ApprovalRow";
import { useState } from "react";

function App(){
    const [revoke, setRevoke] = useState(mock);
    
    function handleRevoke(id){
        setRevoke(revoke.map(rev => 
            rev.id === id ? {...rev, amount: "0"} : rev
        ));
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Amount</th>
                        <th>Token</th>
                        <th>Spender</th>
                    </tr>
                </thead>
                <tbody>
                    {revoke.map((rev) => (
                        <ApprovalRow onRevoke={handleRevoke}
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