function Input({onPaste, value}){
    return(
        <input 
            name="wallet" value={value}
            placeholder="paste your wallet" onChange={(e) => onPaste(e)}
        />
    );
}

export default Input;