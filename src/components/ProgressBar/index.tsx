
type Props = {
    percent: number;
}

export default function ProgressBar({ percent }: Props) {
  return (
    <div className={`h-2 bg-yellow-400 fixed top-0 z-50`} style={{ width: `${percent}%` }}></div>
  )
}
