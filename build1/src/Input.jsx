function Input({onPaste}){
    return(
        <input 
            name="wallet" 
            placeholder="paste your wallet" onChange={() => onPaste()}
        />
    );
}

export default Input;