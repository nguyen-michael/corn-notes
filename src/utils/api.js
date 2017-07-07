import axios from "axios";

const API = {

    newQuestion: function (type) {
        console.log(type);
        return axios.post("/api/new/question", { "questionType": type });
    }
};

export default API;
