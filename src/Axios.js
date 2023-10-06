import axios from "axios";
import {BASE_URL} from './Constats/Constat'

const instance = axios.create({
    baseURL: BASE_URL,
    
  });

export default instance  


  