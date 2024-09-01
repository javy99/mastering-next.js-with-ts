import Image from 'next/image'
import img from "@/public/images/javy.jpg"

const ImgPage = () => {
    return (
        <main className="relative h-screen">
            {/* <Image src={img} alt="Img" /> */}
            <Image
                src="https://bit.ly/react-cover"
                alt="Img"
                // width={300}
                // height={170}
                fill
                // style={{ objectFit: 'cover' }}
                className="object-cover"
                // sizes="100vw"
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                quality={100}
                priority
            />
        </main>
    )
}

export default ImgPage