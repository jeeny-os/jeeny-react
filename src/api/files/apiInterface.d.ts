import { DocumentNode, QueryFunctionOptions } from '@apollo/client'
import { QueryGetPresignedPostArgs } from '../../types/graphql'

export interface FilesApi {
  getPresignedPost?: {
    query?: DocumentNode
    options?: MutationFunctionOptions<
      {
        getPresignedPost: PresignedPost
      },
      QueryGetPresignedPostArgs
    >
  }
}
