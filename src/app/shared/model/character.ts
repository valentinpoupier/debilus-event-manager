export interface CharacterGame {
  Achievements: any
  AchievementsPublic: any
  Character: Character
  FreeCompany: any
  FreeCompanyMembers: any
  Friends: any
  FriendsPublic: any
  Minions: any
  Mounts: any
  PvPTeam: any
}

export interface Character {
  ActiveClassJob: ActiveClassJob
  Avatar: string
  Bio: string
  ClassJobs: ClassJob[]
  ClassJobsBozjan: ClassJobsBozjan
  ClassJobsElemental: ClassJobsElemental
  DC: string
  FreeCompanyId: string
  FreeCompanyName: string
  GearSet: GearSet
  Gender: number
  GenderID: number
  GrandCompany: GrandCompany
  GuardianDeity: GuardianDeity
  ID: number
  Lang: any
  Name: string
  Nameday: string
  ParseDate: number
  Portrait: string
  PvPTeamId: any
  Race: Race
  Server: string
  Title: Title
  TitleTop: boolean
  Town: Town
  Tribe: Tribe
}

export interface ActiveClassJob {
  Class: Class
  ExpLevel: number
  ExpLevelMax: number
  ExpLevelTogo: number
  IsSpecialised: boolean
  Job: Job
  Level: number
  Name: string
  UnlockedState: UnlockedState
}

export interface Class {
  Abbreviation: string
  ClassJobCategory: ClassJobCategory
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface ClassJobCategory {
  ID: number
  Name: string
}

export interface Job {
  Abbreviation: string
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface UnlockedState {
  ID: number
  Name: string
}

export interface ClassJob {
  Class: Class2
  ExpLevel: number
  ExpLevelMax: number
  ExpLevelTogo: number
  IsSpecialised: boolean
  Job: Job2
  Level: number
  Name: string
  UnlockedState: UnlockedState2
}

export interface Class2 {
  Abbreviation: string
  ClassJobCategory: ClassJobCategory2
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface ClassJobCategory2 {
  ID: number
  Name: string
}

export interface Job2 {
  Abbreviation: string
  ClassJobCategory: ClassJobCategory3
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface ClassJobCategory3 {
  ID: number
  Name: string
}

export interface UnlockedState2 {
  ID?: number
  Name: string
}

export interface ClassJobsBozjan {
  Level: number
  Mettle: any
  Name: string
}

export interface ClassJobsElemental {
  ExpLevel: number
  ExpLevelMax: number
  ExpLevelTogo: number
  Level: number
  Name: string
}

export interface GearSet {
  Attributes: Attribute[]
  Class: Class3
  Gear: Gear
  GearKey: string
  Job: Job3
  Level: number
}

export interface Attribute {
  Attribute: Attribute2
  Value: number
}

export interface Attribute2 {
  ID: number
  Name: string
}

export interface Class3 {
  Abbreviation: string
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface Gear {
  Body: Body
  Bracelets: Bracelets
  Earrings: Earrings
  Feet: Feet
  Hands: Hands
  Head: Head
  Legs: Legs
  MainHand: MainHand
  Necklace: Necklace
  Ring1: Ring1
  Ring2: Ring2
  SoulCrystal: SoulCrystal
}

export interface Body {
  Creator: any
  Dye: any
  Item: Item
  Materia: any[]
  Mirage: Mirage
}

export interface Item {
  ClassJobCategory: ClassJobCategory4
  ID: number
  Icon: string
  ItemUICategory: ItemUicategory
  LevelEquip: number
  LevelItem: number
  Name: string
  Rarity: number
}

export interface ClassJobCategory4 {
  ID: number
  Name: string
}

export interface ItemUicategory {
  ID: number
  Name: string
}

export interface Mirage {
  ID: number
  Icon: string
  Name: string
}

export interface Bracelets {
  Creator: any
  Dye: any
  Item: Item2
  Materia: any[]
  Mirage: Mirage2
}

export interface Item2 {
  ClassJobCategory: ClassJobCategory5
  ID: number
  Icon: string
  ItemUICategory: ItemUicategory2
  LevelEquip: number
  LevelItem: number
  Name: string
  Rarity: number
}

export interface ClassJobCategory5 {
  ID: number
  Name: string
}

export interface ItemUicategory2 {
  ID: number
  Name: string
}

export interface Mirage2 {
  ID: number
  Icon: string
  Name: string
}

export interface Earrings {
  Creator: any
  Dye: any
  Item: Item3
  Materia: any[]
  Mirage: Mirage3
}

export interface Item3 {
  ClassJobCategory: ClassJobCategory6
  ID: number
  Icon: string
  ItemUICategory: ItemUicategory3
  LevelEquip: number
  LevelItem: number
  Name: string
  Rarity: number
}

export interface ClassJobCategory6 {
  ID: number
  Name: string
}

export interface ItemUicategory3 {
  ID: number
  Name: string
}

export interface Mirage3 {
  ID: number
  Icon: string
  Name: string
}

export interface Feet {
  Creator: any
  Dye: any
  Item: Item4
  Materia: any[]
  Mirage: Mirage4
}

export interface Item4 {
  ClassJobCategory: ClassJobCategory7
  ID: number
  Icon: string
  ItemUICategory: ItemUicategory4
  LevelEquip: number
  LevelItem: number
  Name: string
  Rarity: number
}

export interface ClassJobCategory7 {
  ID: number
  Name: string
}

export interface ItemUicategory4 {
  ID: number
  Name: string
}

export interface Mirage4 {
  ID: number
  Icon: string
  Name: string
}

export interface Hands {
  Creator: any
  Dye: any
  Item: Item5
  Materia: any[]
  Mirage: Mirage5
}

export interface Item5 {
  ClassJobCategory: ClassJobCategory8
  ID: number
  Icon: string
  ItemUICategory: ItemUicategory5
  LevelEquip: number
  LevelItem: number
  Name: string
  Rarity: number
}

export interface ClassJobCategory8 {
  ID: number
  Name: string
}

export interface ItemUicategory5 {
  ID: number
  Name: string
}

export interface Mirage5 {
  ID: number
  Icon: string
  Name: string
}

export interface Head {
  Creator: any
  Dye: Dye
  Item: Item6
  Materia: any[]
  Mirage: Mirage6
}

export interface Dye {
  ID: number
  Icon: string
  Name: string
}

export interface Item6 {
  ClassJobCategory: ClassJobCategory9
  ID: number
  Icon: string
  ItemUICategory: ItemUicategory6
  LevelEquip: number
  LevelItem: number
  Name: string
  Rarity: number
}

export interface ClassJobCategory9 {
  ID: number
  Name: string
}

export interface ItemUicategory6 {
  ID: number
  Name: string
}

export interface Mirage6 {
  ID: number
  Icon: string
  Name: string
}

export interface Legs {
  Creator: any
  Dye: any
  Item: Item7
  Materia: any[]
  Mirage: Mirage7
}

export interface Item7 {
  ClassJobCategory: ClassJobCategory10
  ID: number
  Icon: string
  ItemUICategory: ItemUicategory7
  LevelEquip: number
  LevelItem: number
  Name: string
  Rarity: number
}

export interface ClassJobCategory10 {
  ID: number
  Name: string
}

export interface ItemUicategory7 {
  ID: number
  Name: string
}

export interface Mirage7 {
  ID: number
  Icon: string
  Name: string
}

export interface MainHand {
  Creator: any
  Dye: Dye2
  Item: Item8
  Materia: any[]
  Mirage: Mirage8
}

export interface Dye2 {
  ID: number
  Icon: string
  Name: string
}

export interface Item8 {
  ClassJobCategory: ClassJobCategory11
  ID: number
  Icon: string
  ItemUICategory: ItemUicategory8
  LevelEquip: number
  LevelItem: number
  Name: string
  Rarity: number
}

export interface ClassJobCategory11 {
  ID: number
  Name: string
}

export interface ItemUicategory8 {
  ID: number
  Name: string
}

export interface Mirage8 {
  ID: number
  Icon: string
  Name: string
}

export interface Necklace {
  Creator: any
  Dye: any
  Item: Item9
  Materia: any[]
  Mirage: Mirage9
}

export interface Item9 {
  ClassJobCategory: ClassJobCategory12
  ID: number
  Icon: string
  ItemUICategory: ItemUicategory9
  LevelEquip: number
  LevelItem: number
  Name: string
  Rarity: number
}

export interface ClassJobCategory12 {
  ID: number
  Name: string
}

export interface ItemUicategory9 {
  ID: number
  Name: string
}

export interface Mirage9 {
  ID: number
  Icon: string
  Name: string
}

export interface Ring1 {
  Creator: any
  Dye: any
  Item: Item10
  Materia: any[]
  Mirage: Mirage10
}

export interface Item10 {
  ClassJobCategory: ClassJobCategory13
  ID: number
  Icon: string
  ItemUICategory: ItemUicategory10
  LevelEquip: number
  LevelItem: number
  Name: string
  Rarity: number
}

export interface ClassJobCategory13 {
  ID: number
  Name: string
}

export interface ItemUicategory10 {
  ID: number
  Name: string
}

export interface Mirage10 {
  ID: number
  Icon: string
  Name: string
}

export interface Ring2 {
  Creator: any
  Dye: any
  Item: Item11
  Materia: any[]
  Mirage: Mirage11
}

export interface Item11 {
  ClassJobCategory: ClassJobCategory14
  ID: number
  Icon: string
  ItemUICategory: ItemUicategory11
  LevelEquip: number
  LevelItem: number
  Name: string
  Rarity: number
}

export interface ClassJobCategory14 {
  ID: number
  Name: string
}

export interface ItemUicategory11 {
  ID: number
  Name: string
}

export interface Mirage11 {
  ID: number
  Icon: string
  Name: string
}

export interface SoulCrystal {
  Creator: any
  Dye: any
  Item: Item12
  Materia: any[]
  Mirage: any
}

export interface Item12 {
  ClassJobCategory: ClassJobCategory15
  ID: number
  Icon: string
  ItemUICategory: ItemUicategory12
  LevelEquip: number
  LevelItem: number
  Name: string
  Rarity: number
}

export interface ClassJobCategory15 {
  ID: number
  Name: string
}

export interface ItemUicategory12 {
  ID: number
  Name: string
}

export interface Job3 {
  Abbreviation: string
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface GrandCompany {
  Company: Company
  Rank: Rank
}

export interface Company {
  ID: number
  Name: string
  Url: string
}

export interface Rank {
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface GuardianDeity {
  GuardianDeity: any
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface Race {
  ID: number
  Name: string
  Url: string
}

export interface Title {
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface Town {
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface Tribe {
  ID: number
  Icon: any
  Name: string
  Url: string
}
