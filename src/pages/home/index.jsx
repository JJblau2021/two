import './index.css';
import services from '@/services';
import { ReactComponent as OfficeImg } from '@/assets/images/office.svg';
import { Button } from '@/components';
export default function Home() {
  const onClick = async () => {
    const ret = await services.getPokemonInfo({ id: 1 });
    console.log(ret, 'ret');
  };
  return (
    <section className="grid grid-cols-3 gap-4 lg:gap-8">
      <div className="home__card col-span-2 main__card flex justify-between">
        <div className="grid gap-2 content-evenly">
          <h2>WelCome JJblau</h2>
          <div className="grid gap-1 flex-1">
            <p>blablabla</p>
            <p>blablablablablabla...</p>
          </div>
          <Button
            className="place-self-start"
            onClick={onClick}
            type="fill"
            size="large"
          >
            哈哈哈
          </Button>
        </div>
        <div className="h-60 w-96 main__card__bg relative">
          <OfficeImg className="h-full w-full absolute top-0 left-0 theme-text-colored" />
        </div>
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
