import axios from "axios";
import apiUrls from "@/helpers/apiUtls";



const universitiesServices = {
    getAll: () => {
        return axios.get(apiUrls.universities.getAll)
    }
}

export default universitiesServices;