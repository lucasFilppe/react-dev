import '../Square/styles.css';

export default function Square({value}){
    function handleClick(){
        console.log('clicou!!')
    }
    return (
        <button 
            type="button"
            onClick={handleClick}
        >
            {value}
        </button>   
    )
}