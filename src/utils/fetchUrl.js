const URL = 'https://api.shrtco.de/v2/shorten?url='

export async function getShortUrl(urlInput){
    try {
        const Fetching = await fetch(`${URL}${urlInput}`)
        const DataJson = await Fetching.json()
        return DataJson 
    } catch (err) {
        console.error(err)
    }
}