export function request(method = "GET", url, data = {}) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject(new Error(`Request failed with status ${xhr.status}: ${xhr.response}`));
            }
        };
        xhr.onerror = () => {
            reject(new Error('Network error'));
        };
        xhr.send(JSON.stringify(data));
    });
}

export function apiRequest(type, data) {
    switch (type) {
        case 'login':
            return request('GET', 'https://reqres.in/api/login', data);
        case 'register':
            return request('GET', 'https://reqres.in/api/register', data);
        default:
            throw new Error(`Unknown request type: ${type}`);
    }
}

function serialize(data) {
    return data.map(item => {
        let mappedResponse = {};
        mappedResponse[""] = item[''];
        return mappedResponse;
    });
}

async function handleGetRequest(url, data) {
    let response = {};
    try {
        const result = await fetch(url, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());

        response["success"] = true;
        response["data"] = serialize(result);
    } catch (error) {
        response["success"] = false;
        response["message"] = error.message;
    }
    return response;
}
