import { useEffect, useContext } from "react";
import { ShopContext } from "../context";

function Alert() {
    const {alertName: displayName = '', closeAlert = Function.prototype} = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000)

        return () => {
            clearTimeout(timerId)
        };
    }, [displayName]);

    return <div id="toast-container">
                <div className="toast">{displayName} has added to the cart</div>
           </div>
}

export {Alert}