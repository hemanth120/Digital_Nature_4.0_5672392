export const OddPlayers =([first,,third,,fifth])=>
{
    return(
        <div>
            <li>First: {first}</li>
            <li>Third: {third}</li>
            <li>Fifth: {fifth}</li>
        </div>
    )
};

export const EvenPlayers =([,second,,fourth,,sixth])=>
{
    return(
        <div>
          <li>Second: {second}</li>
            <li>Fourth: {fourth}</li>
            <li>sixth: {sixth}</li>   
        </div>
    )
}

export const ListofIndianPlayers =({IndianPlayers})=>
{
    return(
        <div>
            <h2>List of Indian Players Merged: </h2>
           {IndianPlayers.map((item)=>
           {return(
            <li>Mr. {item}</li>)}
        )}
        </div>
    )
}


