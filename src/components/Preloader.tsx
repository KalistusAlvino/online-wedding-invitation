interface PreloaderProps {
  progress: number
  isComplete: boolean
}

export function Preloader({ progress, isComplete }: PreloaderProps) {
  if (isComplete) return null

  return (
    <div className="preloader">
      <div className="preloader__content">
        <div className="preloader__spinner" />
        <p className="preloader__text">Memuat undangan...</p>
        <div className="preloader__bar">
          <div
            className="preloader__bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
