import {Timestamp} from "firebase/firestore"

export type TestimonialType = {
  customer: string,
  subtitle: string,
  rating: number,
  desc: string,
  date: Timestamp
}
