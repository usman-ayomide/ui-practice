function ApprovalRow({token, spender, amount, id, onRevoke}){
    const maxNum = "115792089237316195423570985008687907853269984665640564039457584007913129639935";
    const isUnlimited = amount === maxNum;
    const isRevoked = amount === "0";
    

    return(
        <tr className={isUnlimited ? "unlimited" : ""}>
            <td>{id}</td>
            <td>
                {isRevoked && <span style={{color:"gray"}}>Revoked</span>}
                {!isRevoked && (isUnlimited ? "Unlimited" : amount)}
            </td>
            <td>{token}</td>
            <td>{spender}</td>
            <td><button onClick={() => onRevoke(id)}>Revoke</button></td>
        </tr>
    );
}

export default ApprovalRow;