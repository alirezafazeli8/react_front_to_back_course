import spinner from "../assets/spinner.svg"

function Spinner() {
    return <div style={{margin: "auto", textAlign: "center"}}>
        <img src={spinner} style={{width: "100px", borderRadius: "2px", backgroundColor: "red"}}/>
        <h3>Loading ...</h3>
    </div>
}


export default Spinner;