import { useInView } from 'react-intersection-observer';
import "../stylesheets/portfolio.scss";

export function Fade({once = false, children}) {

  const {ref: elementRef, inView: isVisible} = useInView({threshold: 0.2, triggerOnce: once})

  return (
    <div className={`fade ${isVisible && "out"}`} ref={elementRef}>{children}</div>
  )
}