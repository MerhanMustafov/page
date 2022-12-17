import { useState } from 'react';

export function Time() {
  const [t, setT] = useState<string>('')

  function time() {
    const date = new Date()
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
    const minutes =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    const seconds =
      date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()

    setT(`${hours}:${minutes}:${seconds}`)
  }

  setInterval(() => {
    time()
  }, 1000)

  return <div id="current-time">{t}</div>
}
