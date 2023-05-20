export interface User {
  id: number
  username: string
  gender: string
  characterId: string
  characterName: string
  jobs: Job[]
  rank: Rank
  race: Race
  registrationHistories: string[]
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
