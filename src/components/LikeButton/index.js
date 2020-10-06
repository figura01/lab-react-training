import React, {useState} from "react";


const LikeButton = () => {
    const [count, setCount] = useState(0);


    return(
        <div 
            onClick={() => setCount(count + 1)}
        > 
            Like{ count > 1 ? 's' : ''} {count}
        </div>
    )
    
}

export default LikeButton;