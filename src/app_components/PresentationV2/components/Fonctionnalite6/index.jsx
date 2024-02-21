import React, { useState } from 'react';

// Dummy data for the FAQ. Replace with your actual data.
const faqData = [
    {
      question: "How to find the right complementary practice practitioner for you?",
      answer: "The practitioners of the Médoucine network support each person who consults with a natural approach. For people who do not know which practice can relieve their pain or aches, we offer information to help you discover the complementary practices that suit you.Our practitioners are selected based on their specialties, experiences and theoretical and practical training. In our practitioner selection criteria, we also take into account practitioners' references from other professionals with whom they work regularly. Customer reviews also remain an important reference criterion: we obtain information from the clients of these practitioners.",
    },
    {
      question: "What complementary practices does freesession offer?",
      answer: "freesession is a network of practitioners from various specialties: practitioners in naturopathy, reflexology, traditional Chinese medicine, sophrology, Ayurveda, hypnosis, shiatsu, psychotherapies, nutrition, aromatherapy, osteopathy, brief therapies, auriculotherapy, etc.",
    },
    {
      question: "What are the issues on which Médoucine practitioners can support you?",
      answer: "Nos praticiens vous accompagnent sur de nombreux troubles comme le stress, l’anxiété, les phobies, la fatigue, les troubles du sommeil, les maux de ventre et de dos, la perte de poids, les douleurs mais aussi les allergies. Nous avons également des praticiens qui proposent un accompagnement bien-être et développement personnel. Vous avez la possibilité de prendre rendez-vous avec un praticien en fonction des troubles ou douleurs pour lesquels vous souhaitez être accompagné. Sur les fiches de nos praticiens, vous pouvez retrouver les détails des troubles pris en charge par eux.",
    },
    {
      question: "How are practitioners selected in Médoucine?",
      answer: "For each of the listed practitioners we ensure that they respect a series of quality criteria that we have defined by working with doctors and practitioners of complementary practices as well as professional organizations",
    },
    
  ];
  

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <dt
        className="text-white hover:text-white cursor-pointer font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {faq.question}
        <span className={isOpen ? 'text-white' : 'text-white'}>
          {isOpen ? '▼' : '▶'}
        </span>
      </dt>
      <dd className={`${isOpen ? 'block' : 'hidden'} text-white mt-2 mb-4`}>
        {faq.answer}
      </dd>
      

      
      <hr />
    </div>
  );
};

const HelpSection = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-[#3BAFBC] mt-10">
      <div className="flex flex-wrap md:flex-nowrap">
        
        {/* Contact information */}
        <div className="flex-1 md:ml-20 lg:ml-20">

          <div className="mb-4">
            <img
              src="/src/assets/plm.PNG" 
              alt="Contact Icon"
              className="w-40 h-30 rounded-full" 
            />
          </div>
          <div className="text-black">
            <p className="mb-2 font-medium ml-5 text-white font-semibold">01 82 88 75 89</p>
            <p className='text-white font-semibold'>contact@freesession.net</p>
          </div>
        </div>

        
        <div className="flex-1 ml-8 mt-3"> 
          <h3 className="text-white text-xl font-semibold mb-4">a question? need help?</h3>
          <dl className="space-y-3">
            {faqData.map(faq => (
              <FAQItem key={faq.question} faq={faq} />
            ))}
          </dl>
        </div>

      </div>
    </div>
  );
};

export default HelpSection;
