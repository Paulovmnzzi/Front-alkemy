export const fetchSearch = (endpoint, data, method = 'GET') => {

    const url = `http://localhost:8080/${endpoint}`

    if(method === 'GET'){
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify(data)
        })
    }


}