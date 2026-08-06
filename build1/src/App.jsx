import mock from "./list";
import ApprovalRow from "./ApprovalRow";

function App(){

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
                    {mock.map((mo) => (
                        <ApprovalRow 
                            key={mo.id} id={mo.id} token={mo.token}
                            spender={mo.spender} amount={mo.amount}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;