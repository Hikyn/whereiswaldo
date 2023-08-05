import React, { useEffect, useState } from "react";
import "../styling/LeaderBoard.css";
type Score = {
  name: string;
  time: string;
};

interface Props {
  readScoresFromDB: () => Promise<
    [
      {
        name: string;
        time: string;
      },
    ]
  >;
  isScoreSubmited: boolean;
}
const LeaderBoard: React.FC<Props> = ({
  readScoresFromDB,
  isScoreSubmited,
}) => {
  const [scores, setScores] = useState([
    {
      name: "",
      time: "",
    },
  ]);

  useEffect(() => {
    readScoresFromDB().then((result) => {
      result.sort((a, b) => Number(a.time) - Number(b.time));
      setScores(result);
    });
  }, [isScoreSubmited, readScoresFromDB]);
  return (
    <div className="LeaderBoard">
      <h1>LeaderBoard</h1>
      {scores.map((score) => {
        let time = Number(score["time" as keyof typeof score]);
        if (time <= 0) {
          return <></>;
        } else {
          return (
            <div
              key={
                "Container-" + score["name" as keyof typeof score] + "-" + time
              }
            >
              <div className="entry">
                <div className="name">
                  {score["name" as keyof typeof score]}
                </div>
                <div className="time">
                  {Math.floor(time / 60)}:
                  {time % 60 < 10 ? "0" + (time % 60) : time % 60}
                </div>
              </div>
              <br></br>
            </div>
          );
        }
      })}
    </div>
  );
};

export default LeaderBoard;
