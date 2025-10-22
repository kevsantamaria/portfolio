function DownloadCVBtn() {
  const downloadCV = () => {
    const url = '/cv/Kevin-Santamaria-CV.pdf'

    const downloadLink = document.createElement('a')
    downloadLink.href = url
    downloadLink.download = 'Kevin-Santamaria-CV.pdf'
    downloadLink.click()
  }

  return (
    <button className="download-cv-btn" onClick={downloadCV}>
      Descargar CV
    </button>
  )
}

export default DownloadCVBtn
