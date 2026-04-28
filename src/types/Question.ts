export interface Question {
    id: number,
    text: string,
    options: Option[],
    correct_option_id: number
}

interface Option {
    id: number,
    text: string
}
