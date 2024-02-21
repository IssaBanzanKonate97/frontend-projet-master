import { Hint } from '../../../../app_atomic/Title';
import SearchBar from '../SearchBar';
import Images from '/src/assets/D1.png'; 

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
                    className='hidden md:block w-full md:max-w-xs mx-auto'
                />

            </div>
        </section>
    );
};

export default HeroSection;
