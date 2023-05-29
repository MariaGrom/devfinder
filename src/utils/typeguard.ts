// дополнительная функция для проверки существования usera на github 
// (по наличию id  в этом user)

import { GithubUser } from "types";

export const isGithubUser = (user:any):user is GithubUser => 'id' in user 