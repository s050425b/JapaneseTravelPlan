const host  = "https://o5z74sfuia.execute-api.ap-southeast-1.amazonaws.com";

async function fetchBackend_GET(path){
    const response = await fetch(`${host}${path}`);
    
    if (!response.ok) {
        throw new Error("Post failed")
    }

    const responseJson = await response.json();
    return responseJson;
}

async function fetchBackend_POST(path, body, headersOptional) {
    const headers = {
        "Content-Type": "application/json"
    };

    if (headersOptional) {
        headers = headersOptional;
    }

    const response = await fetch(`${host}${path}`,{
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        throw new Error("POST failed")
    }

    return await response.json();
}

async function fetchBackend_DELETE(path, body, headersOptional) {
    const headers = {
        "Content-Type": "application/json"
    };

    if (headersOptional) {
        headers = headersOptional;
    }

    const response = await fetch(`${host}${path}`,{
        method: "DELETE",
        headers: headers,
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        throw new Error("DELETE failed")
    }

    return await response.json();
}

async function fetchBackend_PUT(path,body, headersOptional) {
    const headers = {
        "Content-Type": "application/json"
    };

    if (headersOptional) {
        headers = headersOptional;
    }

    const response = await fetch(`${host}${path}`,{
        method: "PUT",
        headers: headers,
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        throw new Error("PUT failed")
    }

    return await response.json();
}


export async function getNoteItemByStation(station) {
    return await fetchBackend_GET(`/items/${station}`);
}

export async function addNoteItemByStation(noteItem, station) {
    const body = {
        station: station,
        dateTime: noteItem.dateTime,
        description: noteItem.description,
        isAgenda: noteItem.isAgenda,
        name: noteItem.name,
        location: noteItem.location
    }

    return await fetchBackend_POST("/items/Disney", body);
}

export async function deleteNoteItemById(id) {
    const body = {
        id: id
    }

    return await fetchBackend_DELETE("/items", body);
}

export async function putNoteItem(noteItem) {
    return await fetchBackend_PUT("/items", noteItem);
}