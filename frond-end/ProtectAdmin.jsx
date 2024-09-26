import { Navigate } from "react-router-dom";

const ProtectAdmim = ({children}) => {
    const estaAutenticado = localStorage.getItem("Autenticado") ==="admin";

    if (!estaAutenticado) {
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectAdmim;