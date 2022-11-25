import axios from "axios";



export default class ApiService{

 static async getAllJobs(){
    const response= await axios.get(' https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98u\n' +
        'aizhz83c6rh2sir9f9fu'

   )
     return response
 }
}