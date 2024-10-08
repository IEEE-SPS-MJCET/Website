export default function About() {
  return (
    <div className='flex flex-row items-center lg:flex-col justify-between min-h-[40vh]'>
        <div className='space-y-10'>
        <h1 className='text-3xl lg:text-4xl font-bold text-lime-300 text-center'>About Us🕵️</h1>

        <p className='md:w-94 text-sm lg:text-xl text-justify text-gray-300'>
        {"Welcome to IEEE SPS! We explore all aspects of "}
          <span className='text-cyan-600 font-bold'>signal processing</span>
          {". Here, we dive into the exciting world of signal processing—covering everything from Python-based analysis to Machine Learning techniques for audio and image data. Through engaging workshops, hands-on events, and hackathons. Whether you're interested in exploring new techniques, applying existing methods, or collaborating on "}
          <span className='text-cyan-600  font-bold'>real-world projects</span>
          {", there's something for everyone. Join us to learn, innovate, and contribute to the exciting world of signal processing!"}
        </p>
        
        </div>
    </div>
  )
}
