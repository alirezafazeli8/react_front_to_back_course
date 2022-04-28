import spinnerGif from "../assets/spinner.svg"


function Spinner() {
    return <div style={{display: "flex", justifyContent:'center', alignItems: "center"}}>
        <img src={spinnerGif} style={{width: "50%"}}  alt="spinner loading"/>
    </div>
}


export default Spinner