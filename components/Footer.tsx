
const Footer: React.FC = () => {
    return (
        <div className="flex flex-1 items-end justify-center w-full font-fira text-center p-5 mt-5">
            <div className="text-light-text-primary dark:text-dark-text-primary text-xs flex space-x-2">
                <img src="/icons/logo.svg" className="w-3" />
                <span>{"CavCount Blog -"}</span>
                <span>{new Date().getFullYear()}</span>
            </div>
        </div>
    )
}

export default Footer