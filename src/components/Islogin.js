import { Navigate } from "react-router-dom";

function Islogin (login) {
    if (login) {
        <Navigate to={'/pannel'} />
    } else {
        <Navigate to={'/signup'} />
    }
}

export default Islogin