import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type TodoData = {
  userId: number
  id: number
  title: string
  completed: false
}

// Define a service using a base URL and expected endpoints
export const todoApiService = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    // getPokemonByName: builder.query<Pokemon, string>({
    //   query: (name) => `pokemon/${name}`,
    // }),
    getTodoList: builder.query<TodoData, string>({
      query: (id) => `todos/${id}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTodoListQuery } = todoApiService
