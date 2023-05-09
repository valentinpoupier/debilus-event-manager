export interface Root2 {
  username: string
  jobs: Job[]
  rank: Rank
  race: Race
  active: boolean
}

export interface Job {
  name: string
}

export interface Rank {
  name: string
}

export interface Race {
  name: string
}
