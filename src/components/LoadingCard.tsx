import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";

type Props = {
    isDark: boolean;
}

const PlaceholderCard = ({ isDark }: Props) => {
    const backgroundCard = isDark ? 'bg-dark' : '';
    const backgroundText = isDark ? 'bg-light' : '';
    return (
        <div className={`card  col-2 mx-1 ${backgroundCard}`} >
            <div className="card-body">
                <h5 className="card-title placeholder-glow">
                    <span className={`placeholder col-6 ${backgroundText}`}></span>
                </h5>
                <p className="card-text placeholder-glow">
                    <span className={`placeholder col-7 ${backgroundText}`}></span>
                    <span className={`placeholder col-4 ${backgroundText}`}></span>
                    <span className={`placeholder col-4 ${backgroundText}`}></span>
                    <span className={`placeholder col-6 ${backgroundText}`}></span>
                    <span className={`placeholder col-8 ${backgroundText}`}></span>
                </p>
            </div>
        </div>
    )
}

export default () => {
    const { theme } = useContext(ThemeContext);
    const isDark = theme === 'dark';
    return (
        <div className="row mx-2 d-flex justify-content-around gy-4">
            <PlaceholderCard isDark={isDark} />
            <PlaceholderCard isDark={isDark} />
            <PlaceholderCard isDark={isDark} />
            <PlaceholderCard isDark={isDark} />
            <PlaceholderCard isDark={isDark} />
            <PlaceholderCard isDark={isDark} />
            <PlaceholderCard isDark={isDark} />
            <PlaceholderCard isDark={isDark} />
            <PlaceholderCard isDark={isDark} />
            <PlaceholderCard isDark={isDark} />
        </div>
    )
}