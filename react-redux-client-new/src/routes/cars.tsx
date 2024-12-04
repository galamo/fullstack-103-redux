


export default function Cars() {

    return <div>
        <h1> Cars </h1>
        <input type="text" onChange={() => {
            console.log("ssss")
        }} />
        <button onClick={() => {
            console.log("Getting cars..")
        }}> get cars </button>
    </div>
}
