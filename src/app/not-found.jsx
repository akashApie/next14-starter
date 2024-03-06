const { default: Link } = require("next/link")

const NotFound=()=>{
    return (
        <div>
            <h2>Return  Home</h2>
            <Link href={"/"}>Return Home</Link>
        </div>
    )
}

export default NotFound