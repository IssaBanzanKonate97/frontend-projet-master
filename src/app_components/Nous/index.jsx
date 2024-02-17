import Layout from "../Layout";
import { useState } from 'react';
import axios from 'axios';

const SwiklyDeposit = () => {
    const [amount, setAmount] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        
        try {
            // L'URL doit être celle de votre API backend qui gère la création de la caution
            const response = await axios.post('http://localhost:4000/api/swikly/create-deposit', {
                amount: amount,
                clientMail: clientEmail,
                returnURL: 'https://yourdomain.com/success', // Remplacer par votre URL de succès
                cancelURL: 'https://yourdomain.com/cancel', // Remplacer par votre URL d'annulation
            });

            // Gérez la réponse ici, par exemple en affichant un message ou en redirigeant l'utilisateur
            setMessage('Caution soumise avec succès.');
            console.log(response.data);
        } catch (error) {
            setMessage('Erreur lors de la soumission de la caution.');
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Layout>
            <div className="container mx-auto p-4">
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                    <div className="mb-4">
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Montant de la caution</label>
                        <input 
                            type="text" 
                            id="amount" 
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="clientEmail" className="block text-sm font-medium text-gray-700">Email du client</label>
                        <input 
                            type="email" 
                            id="clientEmail" 
                            value={clientEmail}
                            onChange={(e) => setClientEmail(e.target.value)}
                            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            required 
                        />
                    </div>
                    <div className="flex justify-center">
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="mt-2 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            {isSubmitting ? 'Envoi...' : 'Verser la caution'}
                        </button>
                    </div>
                    {message && <p className="text-center mt-4">{message}</p>}
                </form>
            </div>
        </Layout>
    );
};

export default SwiklyDeposit;
