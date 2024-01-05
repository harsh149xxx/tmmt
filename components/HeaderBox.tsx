const HeaderBox = ({title}:{title: string}) => {
    return (
        <header className="flex justify-center bg-col3 py-10 text-2xl text-col5 md:text-3xl md:font-semibold lg:py-16 lg:text-4xl">
            {title}
        </header>
    )
}

export default HeaderBox