import Image from "next/image";
const Homepage = () => {
	return (
		<>
			<h1 className="text-2xl font-semibold">Lilly Helbling</h1>
			<Image 
				src="/images/profile.png" 
				alt={"Profile Picture"} 
				width={150} 
				height={150}
			/>
		</>
	)
}

export default Homepage;