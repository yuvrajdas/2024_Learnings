import '../css/Button.css'
const Button = (props)=>{
    return(<>
        <button className="action-btn" onClick={props.actionType}>{props.btnText}</button>
    </>)
}
export default Button;