import Image from "next/image"
import Link from "next/link"
import PrideGradientTrans from "@/app/files/pride-inside/pride-gradient-trans.svg"

export default function Crafts(){
  return (
    <article id="crafts">
      <h3 className='text-xl font-semibold mb-2'>
        Crafts 
      </h3>

      <h4 className="font-bold mb-2">Pride inside</h4>

      <div className="inline-flex gap-4">
        <Image 
          src={PrideGradientTrans}
          alt={"Intel-type sticker with a pride rainbow along the top and the world 'Pride' on a transgender coloured gradient background"}
          width={80}
          height={15}
        />
        <p>
        Inspired by <a href="https://www.etsy.com/uk/shop/LeafItGreen">LeafItGreen on etsy</a> I wanted 
        to practice making my own version and print stickers on a Cricut.<br />

        The original and .svg files are available for <Link href='/files/pride-inside' className="link">download here</Link>.
        </p>

      </div>
    </article>
  )
}