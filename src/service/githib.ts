const token: string | "" = localStorage.getItem("token");

class GitService {
  
    get(url:string) {
        return fetch(url, {
                method: "GET",
                headers: {
                  Authorization: `token ${token}`,
                },
              })
    }

}

export default new GitService();
