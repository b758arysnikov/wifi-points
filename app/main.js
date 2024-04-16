import {conn} from "../database/database.js";

fetch("https://apidata.mos.ru/v1/datasets/861/rows?api_key=553083a7-1c08-4000-a53c-9ab2318390e7")
    .then(response => {
        if(!response.ok){
            throw new Error("No ok!")
        }
        return response.json()
    })
    .then(data => {
        for(let item of data){
            const sql = `INSERT INTO points (Name, AdmArea, District, ParkName, WiFiName) VALUES 
            ("${item.Name}", "${item.AdmArea}", "${item.District}", "${item.ParkName}", "${item.WiFiName}")`
            conn.query(sql, (err, result) =>{
                if(err){
                    return console.log(err)
                }
                else{
                    console.log("Ввод данных успешный!")
                    console.log(result)
                }
        })
    }
})
    //     data.forEach(item => {
    //         const sql = `INSERT INTO points (Name, AdmArea, District, ParkName, WiFiName) VALUES 
    //         ("${item.Name}", "${item.AdmArea}", "${item.District}", "${item.ParkName}", "${item.WiFiName}")`
    //         conn.query(sql, (err, result) =>{
    //             if(err){
    //                 return console.log(err)
    //             }
    //             else{
    //                 console.log("Ввод данных успешный!")
    //                 console.log(result)
    //             }
    //         })
    //     });
        conn.end()
    .catch(error => {
        console.log(error)
    })
