import { useContext } from "react"
import { themeContext } from "../Contexts/themeContext"

function Theme () {

    const [theme, setTheme] = useContext(themeContext)

    const handleEvent = (e) => {
        if (e === 'dark') {
            setTheme('Dark')
        } else if (e === 'light') {
            setTheme('Light')
        } else if (e === 'auto'){
            const currentDate = new Date();
            const time = currentDate.getHours();
            if (time >=5 && time <12) {
                setTheme('Morning')
            } else if (time >=12 && time <17) {
                setTheme('Noon')
            } else if (time >=17 && time <20) {
                setTheme('Evening')
            } else {
                setTheme('Night')
            }
        }
    }

    return (<>
    <div className="theme-setter">
    <label htmlFor="theme" className="code-label" >Mode: {theme}</label>
      <select className="theme-input" htmlFor="theme" onChange={(e) => handleEvent(e.target.value)}>
        <option className="value-input" value="light">Light</option>
        <option className="value-input" value="dark">Dark</option>
        <option className="value-input" value="auto">Auto</option>
      </select>
    </div>
    </>)
}

export default Theme