import Link from "next/link"

type Props = {
    title?: string;
    tag?: string;
    date?: string;
    link?: string;
};

const Article: React.FC<Props> = ({ title, date, tag, link }) => {
    return (
        <div className="md:col-span-6 h-fit flex flex-col space-y-2 hover:cursor-pointer">

            {/* Date */}
            <span className="font-fira text-xs text-[#B3B4B4]">{date}</span>

            {/* Title */}
            <Link href={`/article/${link}`}>
                <span className="text-lg font-inter text-light-text-primary font-semibold hover:opacity-50 dark:text-slate-300">{title}</span>
            </Link>

            {/* Tags */}
            <div className="flex">
                {/* Can support multiple tags in theory, so we wrap */}
                <div className="flex space-x-2 text-xs text-[#B3B4B4] font-fira">
                    <img src="/icons/tag_dark.svg" className="w-3 inline dark:hidden" />
                    <img src="/icons/tag.svg" className="w-3 hidden dark:inline" />
                    <Link href={{ pathname: '/search', query: { query: tag } }}>
                        <span>{tag}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Article