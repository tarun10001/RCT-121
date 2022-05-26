import axios from "axios";


export const FetchRepository = (q, per_page, page) => {

    return axios("https://api.github.com/search/repositories", {
        methods: "GET",
        params: {
            q, 
            per_page,
            page
        }
    })
};


export default FetchRepository;