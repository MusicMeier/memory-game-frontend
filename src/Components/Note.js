import React, {useState, useEffect} from 'react';
import { useSpring, animated as a } from 'react-spring';

const Note = (props) => {
  const [flipped, setFlipped] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `persective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80}
  })

  const { note, stack, matched, setStack, setMatched } = props

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
          console.log("hi dudes")
          setMatched([...matched, stack[0], note])
        } else {
          console.log("pick Me")
          setTimeout(() => {
            setStack([])
          }, 2000)
        }
    } 
  }

  return (
    <div 
      className="note-card" 
      onClick={onCardClick}
    >
      <div className="note-card-inner">
        <a.div 
          className="card front" 
          style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
          >
          <img 
            className="image-front"
            src={'https://i.pinimg.com/750x/b0/46/59/b04659618d292e195b7c39a92de0845a.jpg'} 
            alt={note.name} 
            />
        </a.div>
        <a.div 
          className="card back" 
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
  );
}

export default Note;
