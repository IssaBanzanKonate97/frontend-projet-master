import { Hint } from '../../../../app_atomic/Title';
import SearchBar from '../SearchBar';

const hi = () => {
    return <section className='w-full rounded-lg h-96 bg-gradient-to-br from-indigo-500 to-cyan-600'>
        <div className='h-full max-w-5xl mx-auto flex flex-col justify-center'>
            <div className='pb-12 flex flex-col gap-6'>
                <h1 className='inter text-4xl max-w-xl font-bold text-white leading-tight tracking-tighter'>
                    Réservez des séances gratuites avec des praticiens
                </h1>

                <SearchBar />

                <div className='max-w-md'>
                    <Hint>
                        Nous vous proposons des séances gratuites avec des praticiens
                        pour vous aider à trouver celui qui vous convient le mieux.
                    </Hint>
                </div>
            </div>
        </div>
    </section>
};

export default hi;