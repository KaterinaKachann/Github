
class GitService {
  
    get(url:string) {
        return fetch(url, {
                method: "GET",
                headers: {
                  Authorization: `token ${localStorage.getItem("token")}`,
                },
              })
    }

}

export default new GitService();
