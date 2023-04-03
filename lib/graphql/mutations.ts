import { gql } from "@apollo/client"

export const INSERT_IMAGE = gql`
    mutation MyMutation($imageSrc: String!, $name: String!) {
        insertImages(imageSrc: $imageSrc, name: $name) {
            created_at
            name
            imageSrc
        }
    }
`

export const DELETE_IMAGE = gql`
    mutation MyMutation($name: String!) {
        deleteImages(name: $name) {
            imageSrc
            created_at
            name
        }
    }
`

export const INSERT_GUEST = gql`
    mutation MyMutation($name: String!) {
        insertGuest(name: $name) {
            id
            created_at
            meal
            name
            party
            wedding
        }
    }
`
