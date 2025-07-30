import './stylesheets/mystyle.css';

const decimalToPercent= (decimal)=>
{
    return (decimal.toFixed(2) + '%');
}

const calScore = (total, goal) =>
{
    return decimalToPercent(total/goal);
}

const CalculateScore = ({Name, School, total, goal}) =>
(
<div className='form_style'>
    <h1><font color ="Brown">Student Details</font></h1>
    <div className='Name'>
        <b><span>Name: </span></b>
        <span>{Name}</span>
    </div>
    <div className='School'>
        <b><span>School: </span></b>
        <span>{School}</span>
    </div>
    <div className='Total'>
        <b><span>Total: </span></b>
        <span>{total} Marks</span>
        
    </div>
    <div className='Score'>
        <b>

            <span>
             Score: {calScore(total,goal)}
            </span>
        </b>
    </div>
</div>
);

export default CalculateScore;
