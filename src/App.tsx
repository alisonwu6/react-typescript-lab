import React, { useEffect, useState } from 'react'

type Comment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}
const App: React.FC = () => {
  const [postId, setPostId] = useState(1)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(false);

  async function fetchData(id: number) {
    setLoading(true)
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      )
      const data = (await res.json()) as Comment[]
      console.log('fetchData data: ', `ID: ${id}`, data)
    } catch (error) {
      setError(error as Error)
    }
    setLoading(false)
  }

  function clickHandler(id: number) {
    setPostId(id)
  }

  useEffect(() => {
    // ＊ fetch
    // fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    //   .then((res) => res.json())
    //   .then((data: Comment[]) => {
    //     console.log('fetch data: ', data)
    //   })

    // ＊ async/await
    fetchData(postId)
  }, [postId])

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
    </>
    : <h1>Loading...</h1>
  )
}

export default App
