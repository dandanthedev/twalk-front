import { gql } from '@urql/svelte';
import { Client, cacheExchange, fetchExchange } from '@urql/svelte';
import { PUBLIC_GRAPHQL_URL } from '$env/static/public';

export const client = new Client({
    url: PUBLIC_GRAPHQL_URL,
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => {
        const token = localStorage.getItem('token');
        return {
            headers: { authorization: token ? `Bearer ${token}` : '' },
        };
    },
});
export const queries = {
    login: gql`
        mutation LoginUser($username: String!, $password: String!) {
       loginUser(username: $username, password: $password) {
        token
        
       }
        }
    `,
    getUser: gql`
        query GetUser {
            user {
                username
                displayName
                profile {
                    profilePicture
                }
            }
        }
    `,
    post: gql`	
        mutation Post($content: String!) {
            postMessage(content: $content) {
                id
            }
        }
        `,

    homeFeed: gql`
    query HomeFeed($limit: Int!, $page: Int!) {
        homeFeed(limit: $limit, page: $page) {
            content
            createdAt
            user  {
                username
                displayName
                profile {
                    profilePicture
                }
            }
        }
    }`,
    profile: gql`
    query Profile($username: String) {
  user(username: $username) {
    createdAt
    displayName
    username
    followers
    following
    profile {
      profilePicture
      bannerPicture
      bio
      birthday
      device
      website
    }
  }

  postsByUser(username: $username) {
    id
    content
  }
}
`,

}

