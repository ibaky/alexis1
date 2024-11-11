import { Container } from "kitchn"; // Importation des composants Kitchn


const HomePage = () => {
  const photos = [
    { id: 1, src: "/images/image1.jpeg" },
    { id: 2, src: "/images/image2.webp" },
    { id: 3, src: "/images/image3.avif" },
    { id: 4, src: "/images/image4.webp" },
    { id: 5, src: "/images/image5.jpeg" },
    { id: 6, src: "/images/image6.png" },
  ];

  return (
    <Container
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)", // 3 images par ligne
        gridColumnGap: "5px", // Espacement horizontal entre les images
        gridRowGap: "5px",    // Espacement vertical entre les lignes
        maxWidth: "660px",    // Largeur totale du conteneur
        margin: "0 auto",     // Centrer le conteneur
      }}
    >
      {photos.map((photo) => (
        <Container
          key={photo.id}
          style={{
            padding: "0", // Retirer le padding du conteneur
            borderRadius: "8px", // Bordure arrondie
            backgroundColor: "lightgray", // Fond gris clair
            textAlign: "center", // Centrer l'image
            maxWidth: "200px", // Largeur maximale du conteneur
            margin: "0", // Retirer les marges
          }}
        >
          <img
            src={photo.src}
            alt={`Image ${photo.id}`} // Description de l'image
            style={{
              width: "100%", // Remplir toute la largeur du conteneur
              height: "auto", // Conserver les proportions de l'image
              borderRadius: "8px", // Bordures arrondies
              objectFit: "cover", // Remplir l'espace sans déformer
            }}
          />
        </Container>
      ))}
    </Container>
  );
};

export default HomePage;
