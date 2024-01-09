import { Hint } from '../../../../app_atomic/Title';
import SearchBar from '../SearchBar';

import Image1 from '../../../../assets/reassurance-eye-removebg-preview.png';
import Image2 from '../../../../assets/reassurance-agenda-removebg-preview.png';
import Image3 from '../../../../assets/reassurance-handshake-removebg-preview.png';
import Image4 from '../../../../assets/reassurance-megaphone-removebg-preview.png'; 

const Hi = () => {
    return (
        <section className='w-full rounded-lg h-96 bg-gradient-to-br from-indigo-500 to-cyan-600'>
            <div className='h-full max-w-5xl mx-auto flex flex-col justify-start items-center mt-10'>
                <h1 className="text-4xl font-bold text-white mb-2 mt-10">
                    Are you a practitioner?
                </h1>
                <p className="text-lg text-white">
                    Join the network of the best French practitioners
                </p>
                
                <div className="grid grid-cols-4 gap-20 mt-7">
                    <div className="flex flex-col items-center">
                        <img src={Image1} alt="Image 1" className="w-full h-24 object-cover rounded-md" />
                        <p className="text-white font-bold mt-2">
                        Manage your appointments
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={Image2} alt="Image 2" className="w-full h-24 object-cover rounded-md" />
                        <p className="text-white font-bold mt-2">
                            Manage your appointments
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={Image3} alt="Image 3" className="w-full h-24 object-cover rounded-md" />
                        <p className="text-white font-bold mt-2">
                            Manage your appointments
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={Image4} alt="Image 4" className="w-full h-24 object-cover rounded-md" />
                        <p className="text-white font-bold mt-2">
                            Manage your appointments
                        </p>
                    </div>
                </div>

                {/* Bouton ajouté ici */}
                <button className="border-2 border-white rounded-full px-4 py-2 mt-9 text-white bg-black hover:bg-white hover:text-black">
                    All specialties
                </button>
            </div>
        </section>
    );
};

export default Hi;
