function DownloadCVBtn() {
  const downloadCV = () => {
    const url = './cv/KevinSantamariaCV.pdf'

    const downloadLink = document.createElement('a')
    downloadLink.href = url
    downloadLink.download = 'Kevin-Santamaria-CV.pdf'
    downloadLink.click()
  }

  return (
    <button className="custom-btn" onClick={downloadCV}>
      Download CV
    </button>
  )
}

export default DownloadCVBtn
