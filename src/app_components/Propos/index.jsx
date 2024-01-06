import Layout from "../Layout";
import tita from '../../assets/tita.jpeg';
import jta from '../../assets/https __cdn.evbuc.com_images_497000219_189769718955_1_original.jpeg';
import React, { useState } from 'react';

const Propos = () => {
    const [quiVisible, setQuiVisible] = useState(false);
    const [pourquoiVisible, setPourquoiVisible] = useState(false);
    const [commentVisible, setCommentVisible] = useState(false);

    const toggleQui = () => {
        setQuiVisible(!quiVisible);
        setPourquoiVisible(false);
        setCommentVisible(false);
    };

    const togglePourquoi = () => {
        setPourquoiVisible(!pourquoiVisible);
        setQuiVisible(false);
        setCommentVisible(false);
    };

    const toggleComment = () => {
        setCommentVisible(!commentVisible);
        setQuiVisible(false);
        setPourquoiVisible(false);
    };

    return (
        <Layout>
            <section className='w-full rounded-lg bg-white'>
                <div className='max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center'>
                    <div className='md:w-1/2 pr-6'>
                        <img src={tita} alt="tita" className="w-full md:h-auto md:max-h-80 rounded-lg" />
                    </div>
                    <div className='md:w-1/2 max-w-md md:ml-6'>
                        <h1 className='text-4xl font-bold text-black leading-tight tracking-tighter'>
                            Ce que nous faisons ?
                        </h1>
                        <p>
                            Une prise en charge par l’Institut démarre toujours par une séance d’évaluation générale (SEG) qui permet à nos praticiens de vous écouter et de comprendre exactement ce dont vous avez besoin. C’est ensuite à votre tour de vous faire confiance en vous posant les bonnes questions : l’accompagnement naturel sans médicaments que l’Institut me propose résonne-t-il avec ma personnalité? L’entretien a-t-il ouvert une nouvelle perspective à mon envie de changement ? Il est ainsi possible de déterminer votre réelle motivation, essentielle pour le changement.

                            Nous croyons que chaque personne porte en elle le désir de se libérer d’une addiction ou de plusieurs addictions et de contribuer à son propre bonheur. Cette réussite passe nécessairement par la redécouverte de soi-même, grâce à une méthode stratégique.

                            Accompagner nos patients tout au long du processus de leur changement.
                        </p>
                    </div>
                </div>
            </section>
            <section className='w-full rounded-lg bg-white'>
                <div className='max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center'>
                    <div className='md:w-1/2 max-w-md md:ml-6'>
                        <h1 className='text-4xl font-bold text-black leading-tight tracking-tighter'>
                            Nos valeurs
                        </h1>
                        <br /><br /> {/* Ajouter de l'espace entre le titre et les boutons */}
                        <p>
                            {quiVisible ? (
                                <>
                                    L’Institut ADIOS parie sur le changement de comportement de la personne. Sarah, la créatrice de la méthode et praticienne, comprend qu’il manque une stratégie globale et holistique autour de l’arrêt des addictions quand l’un de ses enfants adolescent est confronté au problème de cannabis.
                                </>
                            ) : null}
                        </p>
                        <span
                            className="text-blue-500 cursor-pointer"
                            onClick={toggleQui}
                        >
                            {quiVisible ? "-QUI" : "+QUI?"}
                        </span>
                        <br /><br /> {/* Ajouter de l'espace entre les boutons */}
                        <p>
                            {pourquoiVisible ? (
                                <>
                                    En effet, dans ce parcours qu’elle suit scrupuleusement avec son fils pour l’aider à se sortir du piège de l’addiction, elle l’accompagne au départ dans plusieurs cabinets d’addictologues, de psychologues, de psychiatres, etc… mais rien n’y fait: elle se rend compte qu’il n’y a aucun résultat probant via le cursus médical classique proposé !
                                </>
                            ) : null}
                        </p>
                        <span
                            className="text-blue-500 cursor-pointer"
                            onClick={togglePourquoi}
                        >
                            {pourquoiVisible ? "-POURQUOI?" : "+POURQUOI?"}
                        </span>
                        <br /><br /> {/* Ajouter de l'espace entre les boutons */}
                        <p>
                            {commentVisible ? (
                                <>
                                    Alors, toujours pour aider son fils qui a conscience de son problème d’addiction et qui est de bonne volonté, elle l’accompagne sur le chemin de la thérapie brève: des coachs, des hypnothérapeutes, des PNListes, des praticiens en maïeutique, des magnétiseurs, des praticiens en EFT, et toujours très peu de résultats.. Sarah prend alors conscience que nombre d’entre eux n’utilisent qu’une seule technique et comprend que ce n’est parfois pas suffisant pour accompagner vers un changement profond et durable! C’est à ce moment que surgit un questionnement fondamental qui mène à la vision : pourquoi, il n’existerait pas au 21ème siècle, des Master thérapeutes qui maîtriseraient plusieurs techniques de thérapie brève et qui seraient capables d’accompagner sans médicament à l’aide de l’inconscient toutes les personnes en prise avec les addictions ?
                                </>
                            ) : null}
                        </p>
                        <span
                            className="text-blue-500 cursor-pointer"
                            onClick={toggleComment}
                        >
                            {commentVisible ? "-COMMENT?" : "+COMMENT?"}
                        </span>
                    </div>
                    <div className='md:w-1/2 ml-10'>
                        <img src={jta} alt="jta" className="w-3/1 md:h-auto md:max-h-100 rounded-lg ml-10" /> {/* Ajustez la classe de largeur ici */}
                    </div>
                </div>
            </section>
            

        </Layout>
    );
};

export default Propos;
