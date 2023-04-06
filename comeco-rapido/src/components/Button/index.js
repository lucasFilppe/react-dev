

function Button({count, onClick}){

  return(
    <div>
      <button onClick={onClick}>Click me! {count}</button>
    </div>
  )
}
export default Button;