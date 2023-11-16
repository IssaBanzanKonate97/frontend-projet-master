import Layout from "../Layout";
import PractitionerForm from "./components/PractitionerForm";

const BecomePractitioner = () => {
    return (
        <Layout>
            <section className='w-full rounded-lg bg-white'>
                <div className='h-full max-w-5xl py-8 mx-auto flex flex-col justify-center'>
                    <div className='flex flex-col gap-6'>
                        <h1 className='inter text-4xl max-w-xl font-bold text-black leading-tight tracking-tighter'>
                         Devenez praticien : Transformez des vies, soyez l'espoir !
                        </h1>

                        <div className=''>
                            <PractitionerForm />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default BecomePractitioner;