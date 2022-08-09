import './index.css';
export default function Home() {
  return (
    <section className="grid grid-cols-3 gap-4 lg:gap-8">
      <div className="home__card col-span-2 main__card">home1</div>
      <div className="home__card sub__card">home2</div>
      <div className="home__card">home3</div>
      <div className="home__card">home4</div>
      <div className="home__card">home5</div>
      <div className="home__card col-span-2">home6</div>
      <div className="home__card">home7</div>
      <div className="home__card">home8</div>
    </section>
  );
}
