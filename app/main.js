import { conn } from "../database/database.js";

fetch("https://apidata.mos.ru/v1/datasets/861/rows?api_key=553083a7-1c08-4000-a53c-9ab2318390e7")
    .then(response => {
        if (!response.ok) {
            throw new Error("No ok!")
        }
        return response.json()
    })
    .then(data => {
        console.log(data.splice(0,5))
        data.forEach(item => {
            console.log(item.Cells)

            const sql = `INSERT INTO points(AccessFlag, AdmArea, District, Name, ParkName) VALUES 
            ("${item.Cells.AccessFlag}","${item.Cells.AdmArea}","${item.Cells.District}","${item.Cells.Name}","${item.Cells.ParkName}")`;
            conn.query(sql, (err, result) =>{
                if(err){
                    throw err;
                }
                else{
                    console.log("Данные успешно добавлены!");
                }
            })
            






        }); // Конец forEach
        conn.end()
    }) // Конец then
    .catch(error => {
        console.log(error)
    })
