const HeaderBox = ({title}:{title: string}) => {
    return (
        <header className="gradientBg flex justify-center text-2xl md:text-3xl lg:text-4xl md:font-semibold text-white py-10 lg:py-16">
            {title}
        </header>
    )
}

export default HeaderBox