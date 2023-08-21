import { Outlet } from "react-router-dom";
// import Language from "./Language/Language";

export default function NewUser(){
    const styles = {
        backgroundColor: "white",
        width: "100%",
        height: "100%",
    }
    return (
        <section style={styles}>
            <Outlet />
        </section>
    )
}