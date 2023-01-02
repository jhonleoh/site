type Props = {
  children?: JSX.Element | JSX.Element[]
}

export const H1: React.FC<Props> = ({ children }) => (
  <h1 className="mt-12 text-2xl font-semibold text-slate-300 drop-shadow-2xl hover:cursor-default">
    {children}
  </h1>
)

export const H2: React.FC<Props> = ({ children }) => (
  <h2 className="mt-8 mb-5 text-xl font-semibold text-slate-300 drop-shadow-2xl hover:cursor-default">
    {children}
  </h2>
)

export const H3: React.FC<Props> = ({ children }) => (
  <h3 className="mt-5 text-md font-semibold text-slate-300 drop-shadow-2xl hover:cursor-default">
    {children}
  </h3>
)
