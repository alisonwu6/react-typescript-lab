import React, { useEffect, useState } from 'react'

type Comment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

// A React Customize Hook
function useFetchAPI() {
  const [postId, setPostId] = useState(1)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([] as Comment[]);

  async function fetchData(id: number) {
    setLoading(true)
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      )
      const resData = (await res.json()) as Comment[]
      setData(resData)
      console.log('fetchData data: ', `ID: ${id}`, resData)
    } catch (error) {
      setError(error as Error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData(postId)
  }, [postId]);

  return [data, loading, error, setPostId] as const
  // or {data, loading, error, setPostId}
}

const App: React.FC = () => {
  const [data, loading, error, setPostId] = useFetchAPI()

  function clickHandler(id: number) {
    setPostId(id)
  }

  return (
    !loading ? 
    <>
      <h1>Fetch</h1>
      <button onClick={() => clickHandler(1)}>ID 1 data</button>
      <button onClick={() => clickHandler(2)}>ID 2 data</button>
      {error === null ? (
        <p style={{ color: 'green' }}>Successfully get data</p>
      ) : (
        <p style={{ color: 'red' }}>failed to get data</p>
      )}
      {
        // since the index may change when the list is re-ordered or items are added/removed. 
        // It is better to use a unique value for the key property, such as an id.
        data.length > 0 && data.map(item => {
          return <p key={item.id}>{item.email}</p>
        })
      }
    </>
    : <h1>Loading...</h1>
  )
}

export default App
