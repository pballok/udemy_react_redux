export interface ImageDTO {
    id: string,
    alt_description: string,
    urls: {
        small: string,
    }
}
export interface Image {
    id: string,
    description: string,
    url: string,
}
