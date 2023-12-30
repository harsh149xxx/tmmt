import Image, { StaticImageData } from "next/image"

const ServiceCard: React.FC<{ title: string, content: string, img: StaticImageData }> = ({title,content,img}) => {
  return (
      <div className="bg-white rounded-xl p-5 flex flex-col items-center gap-5 cursor-pointer transform transition-transform duration-300 hover:scale-[1.05] shadow-[0px_0px_5px_0px_#1a202c]">
          <div className="bg-[#56ccf2] w-full flex justify-center rounded-t-xl py-3">
        <Image src={img} alt="icon"/>
        </div>
      <h2 className="text-center text-xl lg:text-3xl lg:font-semibold font-bold">{title}</h2>
        <p className="text-gray-600 text-center">{content}</p>
    </div>
  )
}

export default ServiceCard