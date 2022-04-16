import { useTheme } from 'next-themes'

export default function Hero() {
  const { resolvedTheme } = useTheme()

  return (
    <header className="pt-20 mb-12">
      <div className="flex justify-center">
        <img
          src={resolvedTheme === 'light' ? '/logo.png' : '/logo.png'}
          alt="Upstash"
          width={140}
        />
      </div>

      <div className="mt-6 text-center text-dimmed">
        <h1 className="text-linkcord text-3xl">Link Cord Road Map</h1>
        <br />
        <p className="text-white">Submit a New Feature or Vote for the features you want to see in the next release.</p>
      </div>
    </header>
  )
}