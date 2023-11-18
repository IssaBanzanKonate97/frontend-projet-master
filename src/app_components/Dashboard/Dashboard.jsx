import React from 'react'
import useUserSession from '../../app_hooks/useUserSession';

export default function Dashboard() {
  const user = useUserSession();

  return <section>
    <h1>Tableau de bord</h1>
    <p>Bienvenue sur le Tableau de bord { user?.username }</p>
  </section>
};