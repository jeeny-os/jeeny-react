import { gql } from '@apollo/client'

export const GET_PRESIGNED_POST = gql`
  query GetPresignedPost($args: FileUploadInput!) {
    getPresignedPost(args: $args) {
      url
      fields
    }
  }
`
