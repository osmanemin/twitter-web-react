import React, {useState} from "react";

const useHook = () => {
    const [data, setData] = useState(1);
    return data;
}
export default useHook;