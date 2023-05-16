export interface SearchChar {
  Pagination: Pagination
  Results: Result[]
}

export interface Pagination {
  Page: number
  PageNext: number
  PagePrev: any
  PageTotal: number
  Results: number
  ResultsPerPage: number
  ResultsTotal: number
}

export interface Result {
  Avatar: string
  FeastMatches: number
  ID: number
  Lang: string
  Name: string
  Rank: any
  RankIcon: any
  Server: string
}
