import Layout from "../Layout";
import backgroundImage from '../../assets/DSCF8840-scaled.webp';

const Nous = () => {
    return (
        <Layout>
            <section className='w-full rounded-lg bg-white'>
                <div className='max-w-5xl py-8 mx-auto flex flex-col md:flex-row justify-center items-center'>
                    <div className='md:w-1/2 pr-6'>
                        <img src={backgroundImage} alt="Image" className="w-full h-auto rounded-lg" />
                    </div>
                    <div className='md:w-1/2 max-w-md md:ml-6'>
                        <h1 className='inter text-4xl max-w-xl font-bold text-black leading-tight tracking-tighter'>
                            Qui sommes nous ?
                        </h1>
                        <p>
                            Spécialisé dans les addictions, l’Institut ADIOS (Activation de l’Inconscient Orientée vers la Solution) a pour but de libérer les personnes souffrant d’addictions. Fondé par Sarah NACASS en 2012, l’Institut ADIOS est porté par une double vocation.
                        </p>
                        <div className='py-4 text-center'>
                            <a href="/Propos">
                                <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover-bg-blue-700'>
                                    En savoir plus
                                </button>
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <section className='w-full rounded-lg bg-white'>
                <div className='max-w-5xl mx-auto text-center'>
                    <h1 className='text-4xl font-bold text-black leading-tight tracking-tighter'>
                        Notre mission
                    </h1>
                    <p>
                        À l’Institut ADIOS, nous partons du principe que les addictions et les nombreuses formes qu’elles revêtent relèvent d’un comportement dysfonctionnel que l’on peut changer. L’accompagnement a pour objectif de retrouver équilibre et liberté sans compensation, sans médicaments, via la reprogrammation mentale rapide.

                        Avec la méthode ADIOS, ce comportement inadapté n’est plus une fatalité contre laquelle on ne peut agir. Au cours de leur accompagnement, les patients peuvent comprendre que la dépendance ne relève pas de leur identité.
                    </p>
                </div>
            </section>   

            
        </Layout>
    );
};

export default Nous;
