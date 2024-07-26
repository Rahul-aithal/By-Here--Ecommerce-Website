import axios from 'axios';
import { useEffect, useState } from 'react'

function useFetch(url ) {
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
   
    useEffect(() => {
        setData([]);
        setLoading(true);
        setError();

        ; (async () => {
            try {
                const response = await axios.get(url);
                // console.log(response?.data);
                setData(response?.data);
            } catch (error) {
                console.error(error);
                setError(error)

            } finally {
                setLoading(false)
            }

        })()
    }, [url]);

    return {
        data,
        loading,
        error
    }
}

export default useFetch