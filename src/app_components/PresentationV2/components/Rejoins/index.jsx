import Image1 from '../../../../assets/DALL·E 2024-01-15 23.54.13 - Create a professional logo inspired by the style of the provided image, which should be clean and simple. The logo must incorporate an eye design, sig.png';
import Image2 from '../../../../assets/DALL·E 2024-01-15 23.59.04 - Create a professional logo that clearly represents a calendar, maintaining a clean and simple design. The logo should be in a white and slate grey col.png';
import Image3 from '../../../../assets/DALL·E 2024-01-16 00.16.26 - Create a professional logo that clearly depicts a man and a woman shaking hands, embodying a professional partnership. The design should be clean and .png';
import Image4 from '../../../../assets/DALL·E 2024-01-16 00.19.24 - Create a professional logo that represents  The design should be clean and simple, using a white and slate grey color.png'; 

const Hi = () => {
    return (
        <section className='w-full rounded-lg bg-[#3BAFBC] max-w-5xl mx-auto flex flex-col justify-center items-center py-10'>
            <h1 className="text-4xl max-w-xl font-bold text-white leading-tight tracking-tighter mb-2">
                Are you a practitioner?
            </h1>
            <p className="text-lg text-white text-center mb-6">
                Join the network of the best French practitioners
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col items-center">
                    <img src={Image1} alt="Image 1" className="w-full h-24 object-cover rounded-md" />
                    <p className="text-white font-bold mt-2 text-center">
                        Visibility to new customers
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={Image2} alt="Image 2" className="w-full h-24 object-cover rounded-md" />
                    <p className="text-white font-bold mt-2 text-center">
                        Manage your appointments
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={Image3} alt="Image 3" className="w-full h-24 object-cover rounded-md" />
                    <p className="text-white font-bold mt-2 text-center">
                        Meetings between professionals
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={Image4} alt="Image 4" className="w-full h-24 object-cover rounded-md" />
                    <p className="text-white font-bold mt-2 text-center">
                        Media publications
                    </p>
                </div>
            </div>

            
            <button className="border-2 border-white rounded-full px-4 py-2 mt-9 text-white bg-black hover:bg-white hover:text-black">
                All specialties
            </button>
        </section>
    );
};

export default Hi;
