import Image from 'next/image'

const HeroImage = () => {
   return (
      <Image
         src="/profile.webp"
         alt="Foysal Ahmed - Full Stack Developer"
         width={256}
         height={256}
         priority
         fetchPriority='high'
         sizes="(max-width: 768px) 192px, 256px"
         className="rounded-full object-cover aspect-square border-8 border-primary animate-fadeInScale"
      />
   )
}

export default HeroImage