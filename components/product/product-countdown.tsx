"use client"

import { useState, useEffect } from "react"

export default function ProductCountdown() {
  // Set the countdown to 5 days from now
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 45,
    seconds: 5,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.days === 0 && prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer)
          return prev
        }

        let newSeconds = prev.seconds - 1
        let newMinutes = prev.minutes
        let newHours = prev.hours
        let newDays = prev.days

        if (newSeconds < 0) {
          newSeconds = 59
          newMinutes -= 1
        }

        if (newMinutes < 0) {
          newMinutes = 59
          newHours -= 1
        }

        if (newHours < 0) {
          newHours = 23
          newDays -= 1
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center bg-gray-100 px-4 py-2 rounded">
        <span className="text-xl font-bold">{timeLeft.days.toString().padStart(2, "0")}</span>
        <span className="text-xs text-gray-500">Days</span>
      </div>
      <div className="flex flex-col items-center bg-gray-100 px-4 py-2 rounded">
        <span className="text-xl font-bold">{timeLeft.hours.toString().padStart(2, "0")}</span>
        <span className="text-xs text-gray-500">Hours</span>
      </div>
      <div className="flex flex-col items-center bg-gray-100 px-4 py-2 rounded">
        <span className="text-xl font-bold">{timeLeft.minutes.toString().padStart(2, "0")}</span>
        <span className="text-xs text-gray-500">Minutes</span>
      </div>
      <div className="flex flex-col items-center bg-gray-100 px-4 py-2 rounded">
        <span className="text-xl font-bold">{timeLeft.seconds.toString().padStart(2, "0")}</span>
        <span className="text-xs text-gray-500">Seconds</span>
      </div>
    </div>
  )
}

