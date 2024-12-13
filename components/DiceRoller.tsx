"use client"

import React, { useState, useRef, useEffect } from 'react'

const DiceRoller: React.FC = () => {
  const [diceResult, setDiceResult] = useState<number | null>(null)
  const [isRolling, setIsRolling] = useState(false)
  const [showPressToRoll, setShowPressToRoll] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Initial dice value
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (ctx) {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height)
      renderCenteredDice(ctx, 1)
      
      // Add "Press to roll" text
      if (showPressToRoll) {
        ctx.font = '20px Arial'
        ctx.fillStyle = 'rgba(0, 0, 0, 0.6)'
        ctx.textAlign = 'center'
        ctx.fillText('Press to roll', canvas!.width / 2, canvas!.height / 2 + 70)
      }
    }
  }, [showPressToRoll])

  const renderCenteredDice = (ctx: CanvasRenderingContext2D, value: number) => {
    const canvas = ctx.canvas
    const diceSize = Math.min(canvas.width, canvas.height) * 0.7
    const halfSize = diceSize / 2

    // Save the current state
    ctx.save()
    
    // Translate to the center of the canvas
    ctx.translate(canvas.width / 2, canvas.height / 2)

    // Draw dice body
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 4

    ctx.beginPath()
    ctx.rect(-halfSize, -halfSize, diceSize, diceSize)
    ctx.fill()
    ctx.stroke()

    // Draw dots based on dice value
    ctx.fillStyle = 'black'
    const dotSize = diceSize / 12
    const center = diceSize / 2

    const drawDot = (x: number, y: number) => {
      ctx.beginPath()
      ctx.arc(x, y, dotSize, 0, Math.PI * 2)
      ctx.fill()
    }

    switch (value) {
      case 1:
        drawDot(0, 0)
        break
      case 2:
        drawDot(-center/2, -center/2)
        drawDot(center/2, center/2)
        break
      case 3:
        drawDot(-center/2, -center/2)
        drawDot(0, 0)
        drawDot(center/2, center/2)
        break
      case 4:
        drawDot(-center/2, -center/2)
        drawDot(center/2, -center/2)
        drawDot(-center/2, center/2)
        drawDot(center/2, center/2)
        break
      case 5:
        drawDot(-center/2, -center/2)
        drawDot(center/2, -center/2)
        drawDot(0, 0)
        drawDot(-center/2, center/2)
        drawDot(center/2, center/2)
        break
      case 6:
        drawDot(-center/2, -center/2)
        drawDot(center/2, -center/2)
        drawDot(-center/2, 0)
        drawDot(center/2, 0)
        drawDot(-center/2, center/2)
        drawDot(center/2, center/2)
        break
    }

    // Restore the context
    ctx.restore()
  }

  const rollDice = () => {
    if (isRolling) return
    
    setIsRolling(true)
    setDiceResult(null)
    setShowPressToRoll(false)

    // Simulate dice rolling animation for 2 seconds
    const animationDuration = 2000
    const startTime = Date.now()

    const animate = () => {
      const canvas = canvasRef.current
      const ctx = canvas?.getContext('2d')
      if (!ctx) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas!.width, canvas!.height)

      // Draw rolling dice with 3D-like rotation
      ctx.save()
      ctx.translate(canvas!.width / 2, canvas!.height / 2)
      
      // Add 3D rotation effect
      const time = Date.now() - startTime
      const rotationSpeed = 15 // Increased rotation for more dynamic effect
      ctx.rotate((time / 100) * rotationSpeed)
      
      // Slight perspective transformation for 3D effect
      ctx.transform(1, 0, -0.3, 1, 0, 0)
      
      // Draw dice slightly smaller to ensure it fits within canvas
      const diceSize = Math.min(canvas!.width, canvas!.height) * 0.7
      const halfSize = diceSize / 2

      // Draw dice body
      ctx.fillStyle = 'white'
      ctx.strokeStyle = 'black'
      ctx.lineWidth = 4

      ctx.beginPath()
      ctx.rect(-halfSize, -halfSize, diceSize, diceSize)
      ctx.fill()
      ctx.stroke()

      // Draw dots
      ctx.fillStyle = 'black'
      const dotSize = diceSize / 12
      const center = diceSize / 2

      const drawDot = (x: number, y: number) => {
        ctx.beginPath()
        ctx.arc(x, y, dotSize, 0, Math.PI * 2)
        ctx.fill()
      }

      const rollingValue = Math.floor(Math.random() * 6) + 1
      switch (rollingValue) {
        case 1:
          drawDot(0, 0)
          break
        case 2:
          drawDot(-center/2, -center/2)
          drawDot(center/2, center/2)
          break
        case 3:
          drawDot(-center/2, -center/2)
          drawDot(0, 0)
          drawDot(center/2, center/2)
          break
        case 4:
          drawDot(-center/2, -center/2)
          drawDot(center/2, -center/2)
          drawDot(-center/2, center/2)
          drawDot(center/2, center/2)
          break
        case 5:
          drawDot(-center/2, -center/2)
          drawDot(center/2, -center/2)
          drawDot(0, 0)
          drawDot(-center/2, center/2)
          drawDot(center/2, center/2)
          break
        case 6:
          drawDot(-center/2, -center/2)
          drawDot(center/2, -center/2)
          drawDot(-center/2, 0)
          drawDot(center/2, 0)
          drawDot(-center/2, center/2)
          drawDot(center/2, center/2)
          break
      }

      ctx.restore()

      const currentTime = Date.now()
      if (currentTime - startTime < animationDuration) {
        requestAnimationFrame(animate)
      } else {
        // Final dice result
        const result = Math.floor(Math.random() * 6) + 1
        setDiceResult(result)
        setIsRolling(false)

        // Clear and draw final result
        ctx.clearRect(0, 0, canvas!.width, canvas!.height)
        renderCenteredDice(ctx, result)
      }
    }

    requestAnimationFrame(animate)
  }

  const handleCanvasClick = () => {
    if (!isRolling) {
      rollDice()
    }
  }

  return (
    <div className="flex flex-col items-center justify-start p-4 pt-0">
      <canvas 
        ref={canvasRef} 
        width={300} 
        height={300} 
        onClick={handleCanvasClick}
        className="cursor-pointer"
      />
      {diceResult && (
        <p className="mt-4 text-xl font-semibold">
          You rolled: {diceResult}
        </p>
      )}
    </div>
  )
}

export default DiceRoller