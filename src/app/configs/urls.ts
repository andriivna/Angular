import {environment} from "../../environments/environment";

let{API}=environment;

const urls={
  users:`${API}/users`,
  posts:`${API}/posts`,
  comments:`${API}/comments`
}

export {
  urls
}
