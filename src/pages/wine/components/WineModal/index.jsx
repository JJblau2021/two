/**
 * WineModal
 * @returns
 */
import './index.css';
import { useEffect, useState, useRef, memo } from 'react';

const getOssImg = (name, suffix = 'png') =>
  `https://byering-web-assets.oss-cn-hangzhou.aliyuncs.com/drink/images/wine/${name}.${suffix}`;

const ANIME_READY = 0;
const ANIME_START_LOTTERY = 1;
const ANIME_BTN_DOWN = 2;
const ANIME_BTN_UP = 3;
const ANIME_START_GIFT = 4;
const ANIME_END_GIFT = 5;
const ANIME_EXIT = 6;

class AnimationNode {
  constructor(duration, num, next) {
    return {
      duration,
      num,
      next,
      timer: null,
    };
  }
}
const exitNode = new AnimationNode(0, ANIME_EXIT, null);
const endGiftNode = new AnimationNode(1000, ANIME_END_GIFT, exitNode);
const startGiftNode = new AnimationNode(2200, ANIME_START_GIFT, endGiftNode);
const btnUpNode = new AnimationNode(2500, ANIME_BTN_UP, startGiftNode);
const btnDownNode = new AnimationNode(300, ANIME_BTN_DOWN, btnUpNode);
const startLotteryNode = new AnimationNode(
  1000,
  ANIME_START_LOTTERY,
  btnDownNode,
);
const readyNode = new AnimationNode(0, ANIME_READY, startLotteryNode);
const wines = [1, 2, 3, 5, 6, 1, 2];

const WineModal = ({ getApi }) => {
  const [animeStatus, setAnimeStatus] = useState(ANIME_READY);
  const animeNodeRef = useRef(readyNode);

  const reset = (nodeRef) => {
    if (nodeRef.current.timer) {
      clearTimeout(nodeRef.current.timer);
    }
    nodeRef.current = readyNode;
    setAnimeStatus(ANIME_READY);
  };
  const loop = (nodeRef) => {
    const node = nodeRef.current;
    setAnimeStatus(node.num);
    if (!node.next) {
      return reset(nodeRef);
    }
    if (node.timer) {
      clearTimeout(node.timer);
    }
    node.timer = setTimeout(
      (nextNode) => {
        nodeRef.current = nextNode;
        loop(nodeRef);
      },
      node.duration,
      node.next,
    );
  };
  const jump = (nodeRef) => {
    const node = nodeRef.current;
    if (!node.next) {
      return;
    }
    clearTimeout(node.timer);
    nodeRef.current = node.next;
    loop(nodeRef);
  };
  const stop = (nodeRef) => {
    const node = nodeRef.current;
    clearTimeout(node.timer);
  };

  useEffect(() => {
    getApi &&
      getApi({
        loop: () => loop(animeNodeRef),
        stop: () => stop(animeNodeRef),
        reset: () => reset(animeNodeRef),
      });
  }, [getApi]);
  const stopGiftAnime = () => {
    jump(animeNodeRef);
  };
  const renderWineItem = (num, index) => (
    <div key={index} className={`prize-list prize${num}`}>
      {new Array(3).fill(0).map((_, i) => (
        <div
          className="prize"
          key={i}
          style={{
            backgroundImage: `url(${getOssImg(`wine${num}`, 'jpeg')})`,
          }}
        ></div>
      ))}
    </div>
  );
  return (
    <div
      className={[
        'lottery-container',
        animeStatus < ANIME_EXIT && animeStatus > ANIME_READY
          ? ''
          : 'lottery-container-none',
      ].join(' ')}
    >
      <div
        className={[
          'lottery-content',
          animeStatus < ANIME_START_GIFT ? '' : 'hideLottery',
        ].join(' ')}
      >
        <div
          className="lottery-bg"
          style={{ backgroundImage: `url(${getOssImg('letyqzjzff', 'jpeg')})` }}
        >
          <div className="lottery-prize-content">
            <div
              className={[
                'prize-content',
                animeStatus >= ANIME_BTN_DOWN ? 'lottery-start' : '',
              ].join(' ')}
            >
              {wines.map(renderWineItem)}
            </div>
          </div>
          <div
            className={[
              'lottery-btn',
              animeStatus >= ANIME_BTN_DOWN && animeStatus < ANIME_BTN_UP
                ? 'btn-up'
                : '',
            ].join(' ')}
            style={{ backgroundImage: `url(${getOssImg('btn')})` }}
          ></div>
        </div>
      </div>
      <div
        className={[
          'gift-content',
          animeStatus >= ANIME_END_GIFT ? 'hide' : '',
        ].join(' ')}
        style={{ display: animeStatus >= ANIME_START_GIFT ? 'block' : 'none' }}
      >
        <div
          className="gift-sprite-light"
          style={{ backgroundImage: `url(${getOssImg('light0')})` }}
        ></div>
        <div
          className="gift-light"
          style={{ backgroundImage: `url(${getOssImg('light')})` }}
        ></div>
        <div
          className="gift-box2"
          style={{ backgroundImage: `url(${getOssImg('box-02')})` }}
        ></div>
        <div
          className="gift"
          style={{ backgroundImage: `url(${getOssImg('wines', 'jpeg')})` }}
        ></div>
        <div
          className="gift-num"
          style={{ backgroundImage: `url(${getOssImg('x6', 'jpeg')})` }}
        ></div>
        <div
          className="gift-box1"
          style={{ backgroundImage: `url(${getOssImg('box01', 'jpeg')})` }}
        ></div>
        <div
          className="gift-star star1"
          style={{ backgroundImage: `url(${getOssImg('star')})` }}
        ></div>
        <div
          className="gift-star star2"
          style={{ backgroundImage: `url(${getOssImg('star')})` }}
        ></div>
        <div
          className="gift-star star3"
          style={{ backgroundImage: `url(${getOssImg('star')})` }}
        ></div>
        <div
          className="gift-star star4"
          style={{ backgroundImage: `url(${getOssImg('star')})` }}
        ></div>
        <div
          className="gift-btn"
          onClick={stopGiftAnime}
          style={{ backgroundImage: `url(${getOssImg('btn02', 'jpeg')})` }}
        ></div>
      </div>
    </div>
  );
};

export default memo(WineModal);
