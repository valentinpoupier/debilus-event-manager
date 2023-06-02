export interface EventForm {
  name: string
  description: string
  beginDate: string
  endDate: string
  organizer: string

}

export interface EventFC {
  id: number
  name: string
  description: string
  beginDate: string
  endDate: string
  participants: Participant[]
  organizer: Organizer
  feedbacks: Feedback[]
  status: string
}

export interface Participant {
  username: string
  characterName: string
  characterId: string
}

export interface Organizer {
  username: string
  characterName: string
  characterId: string
}

export interface Feedback {
  user: string
  event: string
  message: string
  rating: number
}
