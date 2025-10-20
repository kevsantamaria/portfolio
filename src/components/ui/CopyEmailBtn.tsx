import { useRef, useState } from 'react'
import Check from '@/components/icons/Check'
import Copy from '@/components/icons/Copy'

function CopyEmailBtn() {
  const [copied, setCopied] = useState(false)
  const emailRef = useRef<HTMLSpanElement>(null)

  const copyEmail = async () => {
    if (!emailRef.current) return

    try {
      await navigator.clipboard.writeText(emailRef.current.innerText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      console.error(`Error: ${e}`)
    }
  }

  return (
    <div className="w-fit text-xs pl-1 md:pl-2 bg-inherit border border-custom-primary rounded-lg flex items-center justify-between gap-2">
      <span ref={emailRef}>kevsantamaria01@gmail.com</span>
        <button
          className="bg-custom-primary rounded-r-sm hover:bg-custom-primary-hover transition-color duration-200 cursor-pointer flex items-center justify-center p-1 md:p-2 h-full w-10"
          onClick={copyEmail}
          aria-label="Copiar email"
        >
          {copied ? <Check /> : <Copy />}
        </button>
    </div>
  )
}

export default CopyEmailBtn
