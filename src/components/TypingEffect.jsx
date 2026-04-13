import { useEffect, useState } from "react"

const TypingEffect = ({ texts = [], speed = 120, pauseAfterTyping = 1500 }) => {
    const [displayedText, setDisplayedText] = useState("")
    const [textIndex, setTextIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        if (!texts.length) return
        const current = texts[textIndex]

        const handleTyping = () => {
            if (!isDeleting && charIndex < current.length) {
                setDisplayedText(current.slice(0, charIndex + 1))
                setCharIndex((p) => p + 1)
            } else if (!isDeleting && charIndex === current.length) {
                setTimeout(() => setIsDeleting(true), pauseAfterTyping)
                return
            } else if (isDeleting && charIndex > 0) {
                setDisplayedText(current.slice(0, charIndex - 1))
                setCharIndex((p) => p - 1)
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false)
                setTextIndex((p) => (p + 1) % texts.length)
            }
        }

        const delay = isDeleting ? speed / 2 : speed
        const t = setTimeout(handleTyping, delay)
        return () => clearTimeout(t)
    }, [texts, textIndex, charIndex, isDeleting, speed, pauseAfterTyping])

    return (
        <span>
            {displayedText}
            <span className="animate-blink text-violet-400">|</span>
        </span>
    )
}

export default TypingEffect
