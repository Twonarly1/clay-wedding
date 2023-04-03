import { gql } from "@apollo/client"

export const FETCH_IMAGE_LIST = gql`
    query MyQuery {
        getImagesList {
            created_at
            name
            imageSrc
        }
    }
`

export const FETCH_GUESTS_LIST = gql`
    query MyQuery {
        getGuestsList {
            created_at
            id
            meal
            name
            party
            wedding
        }
    }
`

export const FETCH_GUEST_BY_NAME = gql`
    query MyQuery($name: String) {
        getGuestByName(name: $name) {
            created_at
            id
            meal
            name
            party
            wedding
        }
    }
`

export const FETCH_ADMIN_BY_USERNAME_AND_PASSWORD = gql`
    query MyQuery($username: String!, $password: String!) {
        getAdminByUsernameAndPassword(username: $username, password: $password) {
            created_at
            id
            password
            username
        }
    }
`
