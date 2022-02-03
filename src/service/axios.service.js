import axios from "axios";
import baseUrls from "../constants/urls";


export const axiosService= axios.create(baseUrls)