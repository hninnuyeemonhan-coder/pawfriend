/** @jsxImportSource @emotion/react */
import * as s from './CozyBackground.styles'

export default function CozyBackground() {
  return (
    <div css={s.container}>
      <div css={s.circle1} />
      <div css={s.circle2} />
      <div css={s.circle3} />

      {s.shapes.map((shape, i) => (
        <span key={i} css={s.floatingShape(shape, i)}>
          {shape.emoji}
        </span>
      ))}
    </div>
  )
}
