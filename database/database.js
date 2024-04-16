import mysql from "mysql2";


export const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Y69bs2xkxk",
    database: "Wifipoints"
});

conn.connect(err => {
    if(err){
        console.log(err)
        return err
    }
    else{
        console.log("Ok")
    }
}
);




