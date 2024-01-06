const HeaderBox = ({title}:{title: string}) => {
    return (
        <header className="mx-2 my-5 flex justify-center rounded-xl bg-col3 py-10 text-2xl text-col5 md:mx-16 md:text-3xl md:font-semibold lg:mx-32 lg:py-16 lg:text-4xl">
            {title}
        </header>
    )
}

export default HeaderBox