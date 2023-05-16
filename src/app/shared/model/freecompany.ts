export interface FC {
  FreeCompany: FreeCompany
  FreeCompanyMembers: FreeCompanyMember[]
}

export interface FreeCompany {
  Active: string
  ActiveMemberCount: number
  Crest: string[]
  DC: string
  Estate: Estate
  Focus: Focu[]
  Formed: number
  GrandCompany: string
  ID: string
  Name: string
  ParseDate: number
  Rank: number
  Ranking: Ranking
  Recruitment: string
  Reputation: Reputation[]
  Seeking: Seeking[]
  Server: string
  Slogan: string
  Tag: string
}

export interface Estate {
  Greeting: string
  Name: string
  Plot: string
}

export interface Focu {
  Icon: string
  Name: string
  Status: boolean
}

export interface Ranking {
  Monthly: number
  Weekly: number
}

export interface Reputation {
  Name: string
  Progress: number
  Rank: string
}

export interface Seeking {
  Icon: string
  Name: string
  Status: boolean
}

export interface FreeCompanyMember {
  Avatar: string
  FeastMatches: number
  ID: number
  Lang: any
  Name: string
  Rank: string
  RankIcon: string
  Server: string
}
