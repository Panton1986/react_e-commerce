import { useEffect } from "react";

function Alert(props) {
    const {displayName = '', closeAlert = Function.prototype} = props;

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