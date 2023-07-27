## react-timer-hook-v2

## Setup

`yarn add react-timer-hook-v2`
`npm install react-timer-hook-v2`

### Example

```javascript
import {useTimer} from "react-timer-hook-v2";

function App() {
    // input value only in milliseconds
    const initial_ms = 10000 // 10 sec
    // dd - days
    // hh - hours
    // mm - minutes
    // ss - seconds
    // ms - milliseconds
    // isFinish - show status timer, if timer = 0, isFinish return Boolean true
    // restart - timer reset function
    const {dd, hh, mm, ss, ms, isFinish, restart} = useTimer(initial_ms)

    return (
        <div className="App">
            <h1>
                {hh}:{mm}:{ss}
            </h1>

            <p>{isFinish ? 'timer is finished' : 'timer is running'}</p>

            <button onClick={restart}>Restart</button>
        </div>
    );
}

export default App;
```

## Description

#### When the timer is set to 0, all calculations and calls finished.
