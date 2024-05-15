import { useEffect } from "react";
import axios from 'axios';

function useFetchData (Url, SetError, SetData) {
    useEffect(() => {
        axios.get(Url)
        .then(res => {
            SetData(res.data);
            alert(res.data);
        })
        .catch((err) => SetError(err.message));
    }, []);
}

export default useFetchData;