export type FeeClassification = {
  name: string
  discription: string
  unitPrice: number
  numOfPeople: number
  totalPrice: number
}

export type DetailProps = {
  key : string
  classification: FeeClassification
  onNumOfPeopleChange: (num: number) => void
}

export type DetailState = {
  numOfPeople: number
}

export type SummaryProps = {
  numOfPeople: number
  totalAmount: number
}