import React, { useContext } from 'react';
import QuestionOptions from '../admin/questions/QuestionOptions';
import Section from '../common/Section';
import { QuestionsContext } from './QuestionsContext';

function QuestionItem({ question }) {
    const { isAdmin } = useContext(QuestionsContext)
    return (
        <Section className="question-item">
            <Section.Title className="question-title">
                <span>{question.question}</span>
                
            </Section.Title>
            <Section.Header className="question-options">
            {isAdmin &&
                <QuestionOptions
                question={question} />
            }
            </Section.Header>
            
            <Section.Body className="question-content">
                <p className="question-answer">
                    {question.answer}
                </p>
                {question.sourceLink &&
                    <a 
                    className="question-source"
                    href={question.sourceLink}
                    target="_blank"
                    rel="noopener norefrrer">
                        צפייה במקור
                    </a>                    
                }
            </Section.Body>
        </Section>
    )
}

export default QuestionItem
