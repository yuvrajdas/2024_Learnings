import '../css/Button.css'
const Button = (props)=>{
    return(<>
        <button className="action-btn" style={{width:`${props.width}px`}} onClick={props.actionType}>{props.btnText}</button>
    </>)
}
export default Button;