import React from 'react';
import './App.css';
import { dummyTweets } from './static/dummyData';
// ! 위 코드는 수정하지 않습니다.
console.log(dummyTweets) // 개발 단계에서 사용하는 더미 데이터입니다.

const Sidebar = () => {
  return (
    <section className="sidebar">
      {/* TODO : 메세지 아이콘을 작성합니다. */}

      <i className="far fa-comment-dots"></i>
    </section>
  );
};

const Counter = () => {
  return (
    <div className="tweetForm__input">
      <div className="tweetForm__inputWrapper">
        <div className="tweetForm__count" role="status">
          total : {dummyTweets.length}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return <div>
    <footer />
  </div>;
};
// TODO : Footer 함수 컴포넌트를 작성합니다. 시멘틱 엘리먼트 footer가 포함되어야 합니다.


const Tweets = () => {
  return (
    <ul className="tweets">
      {dummyTweets.map((tweet) => {
        const isParkhacker = tweet.username === 'parkhacker'
        const tweetUsernameClass = isParkhacker
          ? 'tweet__username tweet__username--purple'
          : 'tweet__username';
        return (
          <li className="tweet" key={tweet.id}>
            <div className="tweet__profile">
              {/* TODO: 트윗 저자의 프로필 사진이 있어야 합니다.  */}
              <img src='`https://randomuser.me/api/portraits/women/${getRandomNumber(1,98)}.jpg`'>

              </img>
            </div>
            <div className="tweet__content">
              <div className="tweet__userInfo">
                {/* TODO : 유져 이름이 있어야 합니다. */}
                {/* <span className='tweet__username'>{tweet.username}</span> */}
                {/* TODO : 이름이 "parkhacker"인 경우, 이름 배경색을 rgb(235, 229, 249)으로 바꿔야 합니다. */}
                <span className={tweetUsernameClass}>{tweet.username}</span>
                {/* TODO : 트윗 생성 일자가 있어야 합니다. */}
                <span className='tweet__createdAt'>{tweet.createdAt}</span>
              </div>
              TODO : 트윗 메세지가 있어야 합니다.
              <div className='tweet__message'>{tweet.content}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const Features = () => {
  return (
    <section className="features">
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile"></div>
          <Counter />
        </div>
      </div>
      <Tweets />
      <Footer />
      TODO : Footer 컴포넌트를 작성합니다.
    </section>
  );
};

const App = () => {
  return (
    <div className="App">
      <main>
        <Sidebar />
        {/* TODO : Sidebar
        컴포넌트를
        작성합니다. */}

        <Features />

      </main>
    </div>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Counter, Tweets, Features, Footer };