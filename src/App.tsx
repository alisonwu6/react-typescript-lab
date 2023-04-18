import React, { useState, useEffect } from 'react'

function getCurrentScore() {
  return 100
}

function getScoreByBoardName(boardName: String) {
  if (boardName === 'boardA') {
    return 200
  }
  if (boardName === 'boardB') {
    return 1000
  }
  return 0
}

// 自定義 hook 開頭必須為 use
const useGetTotalScore = (boardName: string) => {
  const [score, setScore] = useState(0);
  useEffect(() => {
    return () => {
      const currentScore = getCurrentScore() + getScoreByBoardName(boardName)
      setScore(currentScore);
    };
  });
  return score
}

const ScoreBoardB: React.FC = () => {
  const score = useGetTotalScore('boardB')
  return <p>B Total Score: { score }</p>
}

const ScoreBoardA: React.FC = () => {
  const score = useGetTotalScore('boardA')
  return <p>A Total Score: { score }</p>
}

function Main() {
  return (
    <>
      <ScoreBoardA />
      <ScoreBoardB />
    </>
  )
}

export default Main