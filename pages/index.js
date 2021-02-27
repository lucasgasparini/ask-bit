import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.scss";

export default function Home() {
  let [answer, setAnswer] = useState(2);

  const answerQuestion = () => {
    answer = Math.random() < 0.5;
    console.log(answer);
    if (answer) {
      setAnswer(1);
    } else {
      setAnswer(0);
    }
  };

  return (
    <div className={styles.container}>
      {answer !== 0 && answer !== 1 && (
        <Image src="/bit.png" width={128} height={128} />
      )}
      {answer === 1 && (
        <div className={styles.answerContainer}>
          <Image src="/yes.png" width={128} height={128} />
          <h1 className={styles.yesAnswer}>Yes!</h1>
        </div>
      )}
      {answer === 0 && (
        <div className={styles.answerContainer}>
          <Image src="/no.png" width={128} height={128} />
          <h1 className={styles.noAnswer}>No!</h1>
        </div>
      )}

      {answer !== 0 && answer !== 1 && (
        <button className={styles.questionButton} onClick={answerQuestion}>
          Think of a question and press this button to ask Bit
        </button>
      )}
    </div>
  );
}
