const practitioners_details = [
  {
    id: 1,
    practitioner: "ISSA",
    subTitle: "Psychologue clinicien",
    isVerified: true,
    establishment: "Institut Adios",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.",
    photo: {
      profilePicture: "https://picsum.photos/200/300",
    },
    places: [
      {
        id: "1",
        address: "1 rue de la paix",
        city: "Paris",
        zipCode: "75000",
        country: "France",
        phone: "0600000000",
        email: "pro@institutadios.com",
        access: {
          type: "public", // public, private
          description: "",
          isAllowedForChildren: true, // les enfants peuvent y aller
          isAllowedForDisabledPeople: true, // les personnes à mobilité réduite
        },
      },
    ],
    stars: 4,
    reviews: 100,
    languages: ["fr", "en", "es"],
    yearsOfExperience: 10,
    specialist: {
      diploma: "Diplôme de psychologue",
      school: "Université de Paris",
      specialities: ["psychologue", "psychiatre", "psychothérapeute"],
      professionalOrganizations: ["Ordre des psychologues"],
      insurance: ["Responsabilité civile professionnelle"],
    },
    billing: {
      paymentMethods: ["CB", "Chèque", "Espèces"],
      refundIsAvailable: true,
    },
    openingHours: "Lundi au Vendredi: 09h00 - 12h00, 14h00 - 18h00",
    contact: "05 58 06 64 18",
  },
  {
    id: 2,
    practitioner: "James",
    subTitle: "Psychologue Programmation Neuro-Linguistique",
    isVerified: true,
    establishment: "Institut Adios - Paris",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.",
    photo: {
      profilePicture: "https://picsum.photos/200/300",
    },
    places: [
      {
        id: "1",
        address: "1 rue de la paix",
        city: "Paris",
        zipCode: "75000",
        country: "France",
        phone: "0600000000",
        email: "pro@institutadios.com",
        access: {
          type: "public", // public, private
          description: "",
          isAllowedForChildren: true, // les enfants peuvent y aller
          isAllowedForDisabledPeople: true, // les personnes à mobilité réduite
        },
      },
    ],
    stars: 4,
    reviews: 100,
    languages: ["fr", "en", "es"],
    yearsOfExperience: 10,
    specialist: {
      diploma: "Diplôme de psychologue",
      school: "Université de Paris",
      specialities: ["psychologue", "psychiatre", "psychothérapeute"],
      professionalOrganizations: ["Ordre des psychologues"],
      insurance: ["Responsabilité civile professionnelle"],
    },
    billing: {
      paymentMethods: ["CB", "Chèque", "Espèces"],
      refundIsAvailable: true,
    },
    openingHours: "Lundi au Vendredi: 09h00 - 12h00, 14h00 - 18h00",
    contact: "05 58 06 64 18",
  },
  {
    id: 5,
    practitioner: "Mickael",
    subTitle: "Psychologue clinicien & Psychothérapeute",
    isVerified: true,
    establishment: "Institut Adios - Creil",
    description: "J'ai 10 ans d'expérience dans le domaine de la psychologie.",
    photo: {
      profilePicture: "https://picsum.photos/200/300",
    },
    places: [
      {
        id: "1",
        address: "1 rue de la paix",
        city: "Paris",
        zipCode: "75000",
        country: "France",
        phone: "0600000000",
        email: "pro@institutadios.com",
        access: {
          type: "public", // public, private
          description: "",
          isAllowedForChildren: true, // les enfants peuvent y aller
          isAllowedForDisabledPeople: true, // les personnes à mobilité réduite
        },
      },
    ],
    stars: 4,
    reviews: 100,
    languages: ["fr", "en", "es"],
    yearsOfExperience: 10,
    specialist: {
      diploma: "Diplôme de psychologue",
      school: "Université de Paris",
      specialities: ["psychologue", "psychiatre", "psychothérapeute"],
      professionalOrganizations: ["Ordre des psychologues"],
      insurance: ["Responsabilité civile professionnelle"],
    },
    billing: {
      paymentMethods: ["CB", "Chèque", "Espèces"],
      refundIsAvailable: true,
    },
    openingHours: "Lundi au Vendredi: 09h00 - 12h00, 14h00 - 18h00",
    contact: "05 58 06 64 18",
  },
];

export default practitioners_details;
