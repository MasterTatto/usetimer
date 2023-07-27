import {useEffect, useState} from "react";
import moment from "moment/moment";

export const useTimer = (initial_ms) => {
    const [isFinish, setIsFinish] = useState(false)
    let [{
        counter
    }, setState] = useState({
        counter: typeof initial_ms === 'number' ? initial_ms : 0
    })

    useEffect(() => {
        if (!initial_ms) return

        let interval = window.setInterval(() => {
            if (moment.duration(counter)?.asMilliseconds() <= 1000) {
                window.clearInterval(interval)
                setIsFinish(true)
                setState({counter: 0})
                return
            }
            counter = counter - 1000
            setState({counter})
        }, 1000)

        return () => {
            window.clearInterval(interval)
        }
    }, [isFinish])

    return ({
        dd: Math.floor(moment.duration(counter).asDays()),
        hh: moment.duration(counter).hours() >= 10 ? moment.duration(counter).hours() : `0${moment.duration(counter).hours()}`,
        mm: moment.duration(counter).minutes() >= 10 ? moment.duration(counter).minutes() : `0${moment.duration(counter).minutes()}`,
        ss: moment.duration(counter).seconds() >= 10 ? moment.duration(counter).seconds() : `0${moment.duration(counter).seconds()}`,
        ms: moment.duration(counter).asMilliseconds(),
        isFinish: isFinish,
        restart: () => {
            setIsFinish(false)
            setState({counter: typeof initial_ms === 'number' ? initial_ms : 0})
        }
    })
}
