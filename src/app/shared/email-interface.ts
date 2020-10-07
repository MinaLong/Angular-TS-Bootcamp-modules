// shared interface for the emails project

// GetEmail response
export interface GetEmailResponse {
    id: string,
    subject: string,
    text: string,
    to: string,
    from: string,
}
