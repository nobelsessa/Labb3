import React from 'react';
import Link from 'next/link'; // Importera Link från Next.js
import Header from '../src/app/components/Header';
import Button from '../src/app/components/Button';
import TextInput from '../src/app/components/TextInput';
import Card from '../src/app/components/Card';
import CardList from '../src/app/components/CardList'; // Ny komponent
import Navbar from '../src/app/components/Navbar'; // Ny komponent
import Footer from '../src/app/components/Footer'; // Ny komponent
import Modal from '../src/app/components/Modal'; // Ny komponent

const Home = () => {
  const cardsData = [
    { title: 'Kort 1', content: 'Innehåll för kort 1' },
    { title: 'Kort 2', content: 'Innehåll för kort 2' },
    { title: 'Kort 3', content: 'Innehåll för kort 3' },
  ];

  return (
    <div>
      <Header />
      <Navbar /> {/* Lägg till navigationsmenyn här */}
      <h1>Välkommen till Next.js!</h1>

      <Button text="Klicka här" onClick={() => alert('Knapp klickad!')} />
      
      <TextInput value="" onChange={(e) => console.log(e.target.value)} />

      <Card title="Exempelkort" content="Detta är ett exempel på ett kort." />

      <CardList cards={cardsData} /> {/* Visa en lista med kort här */}
      
      <Link href="/ny-index">Gå till Ny Index</Link> {/* Länk till din ny-index.js-sida */}
      
      <Modal isOpen={true} onClose={() => console.log('Modal stängd')}>
        <h2>Det här är en modal</h2>
        <p>Innehåll i modalen.</p>
      </Modal>

      <Footer /> {/* Lägg till sidfoten här */}
    </div>
  );
}

export default Home;
