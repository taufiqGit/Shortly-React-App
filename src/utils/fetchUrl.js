const URL = process.env.REACT_APP_API

export async function getShortUrl(urlInput){
    try {
        const Fetching = await fetch(`${URL}/api/shortly`, {
            "method": "POST",
            "body": JSON.stringify({ url: urlInput }),
            "headers": {
                "Content-Type": "application/json",
            }
        })
        const DataJson = await Fetching.json()
        return DataJson 
    } catch (err) {
        console.error(err)
    }
}