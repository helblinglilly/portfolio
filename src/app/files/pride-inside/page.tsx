import React from "react"
import Image from "next/image"
import PrideGradientTrans from "@/app/files/pride-inside/pride-gradient-trans.svg"
import LesbianGradient from "@/app/files/pride-inside/lesbian-gradient.svg"
import GayGradient from "@/app/files/pride-inside/gay-gradient.svg"
import BiGradient from "@/app/files/pride-inside/bi-gradient.svg"
import TransGradient from "@/app/files/pride-inside/trans-gradient.svg"
import QueerGradient from "@/app/files/pride-inside/queer-gradient.svg"
import PanGradient from "@/app/files/pride-inside/pan-gradient.svg"
import NonBinaryGradient from "@/app/files/pride-inside/non-binary-gradient.svg"

export const runtime = 'edge';

export default function PrideInside() {

  // biome-ignore lint/suspicious/noExplicitAny: They're just svgs but TS doesn't know that
  const files: Record<string, { files: string[]; preview: any }> = {
    lesbian: {
      files: ['lesbian-gradient', 'lesbian-static'],
      preview: LesbianGradient
    },
    gay: {
      files: ['gay-gradient', 'gay-static'],
      preview: GayGradient
    },
    bi: {
      files: ['bi-gradient', 'bi-static'],
      preview: BiGradient
    },
    trans: {
      files: ['trans-gradient', 'trans-five', 'trans-three'],
      preview: TransGradient
    },
    queer: {
      files: ['queer-gradient', 'queer-static'],
      preview: QueerGradient
    },
    pan: {
      files: ['pan-gradient', 'pan-static'],
      preview: PanGradient
    },
    'non-binary': {
      files: ['non-binary-gradient', 'non-binary-gradient-2', 'non-binary-static'],
      preview: NonBinaryGradient
    },
  }
  return (
    <div className="grid gap-8">
      <div>
        <h1 className="text-2xl font-semibold mb-4">Main template file</h1>

        <div className="inline-flex gap-4">
          <Image
            src={PrideGradientTrans}
            alt={"Intel-type sticker with a pride rainbow along the top and the world 'Pride' on a transgender coloured gradient background"}
            width={70}
            height={10}
          />
          <div>
            <p>Main file for <a href="https://affinity.serif.com/en-gb/designer/">Affinity Designer</a> to create the other variations from.<br />Inspired by <a href="https://www.etsy.com/uk/shop/LeafItGreen" className="link">LeafItGreen on etsy</a></p>
            <a href="https://static.helbling.uk/queer-inside/mainsheet.afdesign" className="link" download>mainsheet.afdesign (99kB)</a>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold">Variations</h2>

      {Object.keys(files).map((variation) => {
        return (
          <div className="inline-flex gap-4" key={variation}>
            <Image src={files[variation].preview} alt={variation} width={70} height={10} />

            <div className="grid gap-2">
              {
                files[variation].files.map((filename) => {
                  return <div className="grid md:inline-flex gap-2" key={filename}>
                    <a href={`https://static.helbling.uk/queer-inside/${filename}.svg`} className="link" download>{filename}.svg</a>
                    <a href={`https://static.helbling.uk/queer-inside/${filename}.png`} className="link" download>{filename}.png</a>
                  </div>
                })
              }
            </div>
          </div>
        )
      })}
    </div>
  )
}
