import React from "react";

const MemoComponentCount = React.memo(({count}) => {
    return (
        <p>Count :{count}</p>
    )
}, (prevState,nextState) => {
    return nextState.count % 2 !== 0;
});

export default MemoComponentCount;