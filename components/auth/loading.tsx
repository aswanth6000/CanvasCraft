import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
        <Image
        src='/logo.png'
        alt="Logo"
        height={300}
        width={300}
        className="animate-pulse duration-700"
        >
        </Image>
    </div>
  )
}
