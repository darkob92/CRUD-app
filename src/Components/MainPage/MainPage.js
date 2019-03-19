import React, { useState, useEffect } from 'react';
import { useTransition, animated, config} from 'react-spring';
import './mainPage.css';


const slides = [
  { id: 0, url: 'https://images.unsplash.com/photo-1525430182374-bf7e61d4f220?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1966&q=80' },
  { id: 1, url: 'https://images.unsplash.com/photo-1467493330285-2fe6a9f97483?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80' },
  { id: 2, url: 'https://images.unsplash.com/photo-1511401677968-feade623d58d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80' },
  { id: 3, url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1924&q=80' },
]

const MainPage = () => {
  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 4000), [])
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      className="main-container"
      style={{ ...props, backgroundImage: `url(${item.url})` }} 
    />
  ))
}

export default  MainPage;