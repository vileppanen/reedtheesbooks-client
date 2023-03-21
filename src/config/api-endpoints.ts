type ApiConfig = {
  BOOKTYPE_LIST: string
}
const API_BASE_PATH = 'localhost:3001/api'

export const API: ApiConfig = {
  BOOKTYPE_LIST: `http://${API_BASE_PATH}/booktypes`   
}