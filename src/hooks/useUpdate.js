import {useEffect, useState} from 'react';
import axios from 'axios';

export function useUpdate (url, newData) {

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [serverError, setServerError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        
        async function updateData () {
            try{
                const res = await axios.put(url, newData);
                const resData = await res?.data;
                
                setData(resData);
                setIsLoading(false);

            } catch (error) {
                setServerError(error);
                setIsLoading(false);
            }
        }

        updateData();

    }, [url]);
    
    return {isLoading, data, serverError}
}
