export interface Message {
  id: number
  scenario_id: number
  block_id: number
  rank: number
  text: string
  quick_reply_id?: number
}
