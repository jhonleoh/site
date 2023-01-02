type Props = {
  children?: JSX.Element | JSX.Element[]
}

const Tick: React.FC<Props> = ({ children }) => (
  <code className="bg-slate-700 rounded py-1 px-2 text-slate-200 text-sm font-inter">{children}</code>
)

export default Tick
