import api from "axios"

export default api.create( {
    baseURL: import.meta.env.VITE_API_URL
})