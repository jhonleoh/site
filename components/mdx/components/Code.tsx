type Props = {
    children?: JSX.Element | JSX.Element[];
};

const Code: React.FC<Props>= ({ children }) => {
    return (
        <div className="overflow-x-auto">
            {children}
        </div>
    )
}

export default Code