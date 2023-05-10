export async function getNoteItemByStation() {
    const response = await fetch("https://o5z74sfuia.execute-api.ap-southeast-1.amazonaws.com/items/Disney");
    const responseJson = await response.json();
    return responseJson;
}

export async function addNoteItemByStation() {
    const headers = {
        "Content-Type": "application/json"
    };

    const body = {
        station: "Disney",
        dateTime: "asbc23123",
        description: "My desc",
        isAgenda: true,
        name: "Custome Item"
    }

    const response = await fetch("https://o5z74sfuia.execute-api.ap-southeast-1.amazonaws.com/items/Disney",{
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    });

    const responseJson = await response.json();
    return responseJson;
}