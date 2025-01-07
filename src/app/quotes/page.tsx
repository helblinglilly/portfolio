import React from "react"

export default function Page() {
  const quotes = [
    {
      segments: [
        "Do you want the good tea or the bad tea?",
        "> What's the difference?",
        "I call one good, one bad.",
        "> Er, I'll take the good one",
        "Excellent, positive attitude. Will help with the horror to come",
        "> What horror?",
        "Mainly the tea."
      ],
      source: "Dr Who S10E10, Razor and Bill"
    }
  ]

  return quotes.map((quote) => {
    return (
      <div key={quote.source}>
        {
          quote.segments.map((segment, i) => {
            return (
              <p key={i}>{segment}</p>
            )
          })
        }

        <i>{quote.source}</i>
      </div>
    )
  })
}
