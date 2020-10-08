// shared interface for the emails project

// Define the structure of an email
export interface Email {
    id: string,
    subject: string,
    text: string,
    to: string,
    from: string,
}
