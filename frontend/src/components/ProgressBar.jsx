/** @jsxImportSource @emotion/react */
import * as s from './ProgressBar.styles'

export default function ProgressBar({ completed, total }) {
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <div css={s.container}>
      <div css={s.header}>
        <span css={s.title}>🌱 Today's Progress</span>
        <span css={s.counter}>
          {completed}/{total} habits ({percent}%)
        </span>
      </div>
      <div css={s.track}>
        <div css={s.fill(percent)} />
      </div>
    </div>
  )
}
