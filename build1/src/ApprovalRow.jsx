import mock from "./list";

function ApprovalRow({token, spender, amount, id}){
    const maxNum = "115792089237316195423570985008687907853269984665640564039457584007913129639935";
    const isUnlimited = amount === maxNum;
    

    return(
        <tr className={isUnlimited ? "unlimited" : ""}>
            <td>{id}</td>
            <td>{isUnlimited ? "Unlimited" : amount}</td>
            <td>{token}</td>
            <td>{spender}</td>
        </tr>
    );
}

export default ApprovalRow;