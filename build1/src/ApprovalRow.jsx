import mock from "./list";

function ApprovalRow(token, owner, amount, spender){
    const maxNum = Number.MAX_VALUE;    

    return(
        <table>
            <thead>
                <tr>
                    <th>Token</th>
                    <th>Owner</th>
                    <th>Amount</th>
                    <th>Spender</th>
                </tr>
            </thead>
            <tbody>
                {mock.map((mo) => {
                    <tr key={mo.id}>
                        <td>{mo.id}</td>
                        <td>{mo.token}</td>
                        <td>{mo.spender}</td>
                        <td>{mo.amount < maxNum ? mo.amount : "Unlimited"}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}

export default ApprovalRow;