import React, {useState, useEffect} from 'react';
import { useSpring, animated as a } from 'react-spring';

const Note = (props) => {
  const [flipped, setFlipped] = useState(false)
  const [isMatched, setIsMatched] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `persective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80}
  })
  
  const { notes, note, stack, matched, setStack, setMatched, isShowing, setIsShowing } = props

  useEffect( () => {
    if( matched.includes(note) ){
        setTimeout(() => {
            setIsMatched( true )
              if(matched.length === notes.length) {
                setIsShowing(!isShowing)
              }
    }, 1000)
  }
}, [ matched ])

  useEffect(() => {
      if(stack.includes(note)){
        setFlipped(true)
      } else {
        setFlipped(false)
      }
  }, [stack])

  const onCardClick = () => {

    if(stack.length === 0){
      setFlipped(!flipped)
      setStack([note])
    } else if (stack.length < 2) {
      setFlipped(!flipped)
      setStack([...stack, note])
        if (stack[0].name === note.name) {
          setMatched([...matched, stack[0], note])
          setTimeout(() => {
            setStack([])
          }, 1000)
        } else {
          setTimeout(() => {
            setStack([])
          }, 1000)
        }
    } 
  }

  return (
    <>
    <div 
      onClick={onCardClick}
      className={isMatched ? "matched-card" : "note-card"}
    >
      <div className="note-card-inner">
        <a.div 
          className="card front" 
          style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
        >
          <img 
            className="image-front"
            src={'https://i.pinimg.com/originals/93/b9/ab/93b9ab489700a6893306fe0fc1e162ab.jpg'} 
            alt={note.name} 
          />
        </a.div>
        <a.div 
          className={"card back"} 
          style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}
          > 
          <img 
          className="note-image" 
          src={note.image} 
          alt={note.name} 
          />
        </a.div>
      </div>
    </div>
    </>
  );
}

export default Note;
