const token: string  = 'token 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'

class GitService {
  
    get(url:string) {
        return fetch(url, {
                method: "GET",
                headers: {
                  Authorization: token,
                },
              })
    }

}

export default new GitService();
