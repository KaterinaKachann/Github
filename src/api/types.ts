export interface Gist {
  id: string;
  description: string;
}

export interface File {
  path: string;
}

export interface ReposData {
  name: string;
  full_name: string;
  language: string;
  visibility: string;
  id: string;
  default_branch: string;
}

export interface Owner {
  avatar_url: string;
  login: string;
  followers_url: string;
}
