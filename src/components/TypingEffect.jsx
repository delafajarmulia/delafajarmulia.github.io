import { useEffect, useState } from "react"

const TypingEffect = ({ text, speed = 150, pauseAfterTyping = 200 }) => {
    const [displayedText, setDisplayedText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const handleTyping = () => {
            if(!text) return;
    
            if(!isDeleting && currentIndex < text.length){
                // menambahkan karakter
                setDisplayedText((prev) => prev + text[currentIndex])
                setCurrentIndex((prev) => prev + 1)
            } else if(isDeleting && currentIndex > 0) {
                // menghapus karakter
                setDisplayedText((prev) => prev.slice(0, -1))
                setCurrentIndex((prev) => prev - 1)
            } else if (currentIndex === text.length && !isDeleting){
                // selesai ngetik, mulai hapus
                setTimeout(() => setIsDeleting(true), pauseAfterTyping)
            } else if (isDeleting && currentIndex === 0){
                // selesai hapus, mulai lagi
                setIsDeleting(false)
            }
        }

        const typingSpeed = isDeleting ? speed / 2 : speed
        const timeout = setTimeout(handleTyping, typingSpeed)

        return () => clearTimeout(timeout)
    }, [text, currentIndex, isDeleting, speed, pauseAfterTyping])
    
    return(
        <div>
            {displayedText}
            <span className="animate-blink">|</span>
        </div>
    )
}

export default TypingEffect