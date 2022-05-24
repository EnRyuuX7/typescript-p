import React from "react";
import { AnswerObject } from "../App";

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNumber, totalQuestions }) => (
    <div>
        <p className="number">
            Question: {questionNumber} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map((answers) => (
                <div key={answers}>
                    <button disabled={!!userAnswer} value={answers} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answers }} />
                    </button>
                </div>
            ))}
        </div>
    </div>
);

export default QuestionCard;
