
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const TextContent = ({ text }) => (<p>{text}</p>);

const Header = ({ text }) => {
    return (
        <header>
            <TextContent text={text} />
        </header>
    );
};

const Button = ({ textCont, clickFunction }) => {
    return (
        <button
            onClick={clickFunction}
        >{textCont}</button>
    );
};

const Content = ({ text, funcIncrement }) => {
    return (
        <div>
            <Button
                textCont={'good'}
                clickFunction={()=> funcIncrement('good')}
            />
            <Button
                textCont={'neutral'}
                clickFunction={()=> funcIncrement('neutral')}
            />
            <Button
                textCont={'bad'}
                clickFunction={()=> funcIncrement('bad')}
            />

            <TextContent text={text} />
        </div>
    );
};

const Statistic = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    );
};

const StatisticsList = (props) => {
    const {
        total: { good, neutral, bad },
        allFeedBack,
        totalBall,
        positivePercent
    } = props;

    return (
        <table>
            <tbody>
                <Statistic text="good" value ={good} />
                <Statistic text="neutral" value ={neutral} />
                <Statistic text="bad" value ={bad} />
                <Statistic text="All feedback" value ={allFeedBack} />
                <Statistic text="Average" value ={totalBall} />
                <Statistic text="Positive" value ={positivePercent} />
             </tbody>
        </table>
    );
};


const App = () => {
    // сохраняем нажатие каждой кнопки в отдельном состоянии
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const allFeedBack = (good + neutral + bad);

    const totalBall = (() => {
        const total = (good * 1 + neutral * 0 + bad * -1);
        return (total / allFeedBack) || 0; // (good - bad) / allFeedBack
    })();

    const positivePercent = (() => {
        const cor = ((good / allFeedBack) * 100) || 0;
        return cor;
    })();



    const changeGood = (nameFunc) => {
        nameFunc === "good"
            ? setGood(prevCount => prevCount + 1)
            : nameFunc === "neutral"
                ? setNeutral(prevCount => prevCount + 1)
                :setBad(prevCount =>  prevCount + 1)
    }

    return (
        <div>
            <Header
                text='Give feedback'
            />
            <Content
                funcIncrement={changeGood}
                text='Statistics'
            />
            {
                (good || neutral || bad)
                    ? (<StatisticsList
                            total={{ good, neutral, bad }}
                            allFeedBack={allFeedBack}
                            totalBall={totalBall}
                            positivePercent={positivePercent}
                    />)
                    :(<TextContent text='No feedback given'/>)
            }

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));