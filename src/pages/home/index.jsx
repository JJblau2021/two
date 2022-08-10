import './index.css';
export default function Home() {
  return (
    <section className="grid grid-cols-3 gap-4 lg:gap-8">
      <div className="home__card col-span-2 main__card grid gap-2">
        <h2>WelCome JJblau</h2>
        <div className="grid gap-1">
          <p>blablabla</p>
          <p>blablablablablabla...</p>
        </div>
        <button className="justify-self-start py-2 px-4 theme-bg rounded-md hover:theme-bg-alt text-white focus:ring-2 ring-offset-2 ring-offset-indigo-300 focus:ring-indigo-700 focus:outline-none focus:ring-opacity-50">
          哈哈
        </button>
      </div>
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
