import {Client} from 'pg'; 


    const client = new Client({
        host: "localhost",
        user: "postgres",
        port: 5432,
        password: "2929",
        database: "test"
      }); 
    client.connect();
    
    console.log(client.query("Select Email1, Password1 FROM Logintable WHERE Email1 = 'hi@gmail.com' AND Password1 = '1234'")); 
    console.log(client.query("Select Email1, Password1 FROM Logintable WHERE Email1 = 'hi@gmail.com' AND Password1 = '1234'")); 
    console.log(client.query("Select Email1, Password1 FROM Logintable WHERE Email1 = 'hi@gmail.com' AND Password1 = '1234'")); 
    console.log(client.query("Select Email1, Password1 FROM Logintable WHERE Email1 = 'hi@gmail.com' AND Password1 = '1234'")); 
    console.log(client.query("Select Email1, Password1 FROM Logintable WHERE Email1 = 'hi@gmail.com' AND Password1 = '1234'")); 
    console.log(client.query("Select Email1, Password1 FROM Logintable WHERE Email1 = 'hi@gmail.com' AND Password1 = '1234'")); 
    console.log(client.query("Select Email1, Password1 FROM Logintable WHERE Email1 = 'hi@gmail.com' AND Password1 = '1234'")); 
    console.log(client.query("Select Email1, Password1 FROM Logintable WHERE Email1 = 'hi@gmail.com' AND Password1 = '1234'")); 
    console.log("hi"); 
  
    export const db = client.query("Select Email1, Password1 FROM Logintable WHERE Email1 = 'hi@gmail.com' AND Password1 = '1234'");; 
    



