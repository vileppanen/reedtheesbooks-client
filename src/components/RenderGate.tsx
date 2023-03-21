import { PropsWithChildren } from "react"

interface RenderGateProps extends PropsWithChildren {
  renderIf: boolean
}
export const RenderGate = (props: RenderGateProps): JSX.Element => {
  if (props.renderIf) return <>{props.children}</>
  return <></>
}