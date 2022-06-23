import { useEffect } from "react";
import { useState } from "react";
import { getStoredItem } from "../utilities/localStorageDB";

const useCarts = (coins) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedItems = getStoredItem();
        const addNewCart = [];
        for (const id in storedItems) {
            const addedCoin = coins.find(coin => coin.id === id);
            if (addedCoin) {
                addedCoin.quantity = storedItems[id];
                addNewCart.push(addedCoin)
            }
        }
        setCart(addNewCart)
    }, [coins])
    return [cart, setCart]
};
export default useCarts;