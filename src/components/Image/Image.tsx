import "./image.scss";
import Image from 'next/image'

interface Props {
    src: string
    alt: string
}

export default function Icon({ src, alt }: Props) {
    return (
  
            <Image src={src} alt={alt} />
        //     <div style={{ maskImage: `url(${src})`}} className="image">
        // </div>
    )
}