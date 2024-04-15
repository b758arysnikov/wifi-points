

export let newData;
fetch("https://apidata.mos.ru/v1/datasets/861/rows?api_key=553083a7-1c08-4000-a53c-9ab2318390e7")
    .then(response => {
        if(!response.ok){
            throw new Error("No ok!")
        }
        return response.json()
    })
    .then(data => {
        newData = data;
        console.log(newData)
    })
    .catch(error => {
        console.log(error)
    })
