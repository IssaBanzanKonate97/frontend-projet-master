import { Hint } from '../../../../app_atomic/Title';
import SearchBar from '../SearchBar';
import Images from '/src/assets/DALL_E_2024-01-17_17.40.36_-_Create_an_illustration_of_a_person_lounging_contently_on_a_bean_bag_with_a_whimsical_and_comforting_style._The_person_is_in_a_restful_pose_with_their_-removebg-preview.png'; 

const HeroSection = () => {
    return (
        <section className='h-auto md:h-96 bg-[#3BAFBC]'>
            <div className='max-w-5xl mx-auto h-full md:flex md:justify-between md:items-center'>
                
                <div className='pb-12 flex flex-col gap-6'>
                    <h1 className='inter text-4xl md:text-5xl lg:text-4xl font-bold text-white leading-tight tracking-tighter'>
                        Book free sessions with <br/> practitioners
                    </h1>

                    <SearchBar />

                    <div className='max-w-md'>
                        <Hint>
                            We offer free sessions with practitioners
                            to help you find the one that suits you best
                        </Hint>
                    </div>
                </div>

                <img 
                    src={Images} 
                    alt='Relaxed person on bean bag' 
                    className='w-full md:max-w-xs mx-auto'
                />

            </div>
        </section>
    );
};

export default HeroSection;
