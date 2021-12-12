(() => {

  let yOffset = 0; // window.pageYOffset을 저장할 변수
  let prevScrollHeight = 0; // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크를 섹션들의 스크롤 높이값의 합
  let currentScene = 0; // 현재 활성화된(눈 앞에 보고있는) 씬(scroll-section)
  
  const sceneInfo = [
    { 
      type: 'sticky',
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-0'),
        messageA: document.querySelector('#scroll-section-0 .main-message.a'),
        messageB: document.querySelector('#scroll-section-0 .main-message.b'),
        messageC: document.querySelector('#scroll-section-0 .main-message.c'),
        messageD: document.querySelector('#scroll-section-0 .main-message.d'),
      },
      values: {
        messageA_opacity: [0, 1]
      }
    },
    { 
      type: 'normal',
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-1')
      }
    },
    { 
      type: 'sticky',
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-2')
      }
    },
    { 
      type: 'sticky',
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-3')
      }
    }
  ];

  function setLayout() {
    //각 스크롤 섹션의 높이 세팅
    for(let i = 0; i < sceneInfo.length; i++) {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * innerHeight;
      sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }

    // 새로고침 시 씬 넘버 유지
    yOffset = window.scrollY;
    let totalScrollHeight = 0;
    for(let i = 0; i < sceneInfo.length; i++) {
      totalScrollHeight += sceneInfo[i].scrollHeight;
      if(totalScrollHeight >= yOffset) {
        currentScene = i;
        break;
      }
    }
    document.body.setAttribute('id', `show-scene-${currentScene}`);

  }
  
  function playAnimation() {
    switch(currentScene) {
      case 0:
        break;

      case 1:
        break;
      
      case 2:
        break;
      
      case 3:
        break;
    }
  }

  function scrollLoop() {
    prevScrollHeight = 0;
    for( let i = 0; i < currentScene; i++) {
      prevScrollHeight += sceneInfo[i].scrollHeight;
    }

    if( yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight ) {
      currentScene++;
      document.body.setAttribute('id', `show-scene-${currentScene}`);
    }

    if( yOffset < prevScrollHeight ) {
      if(currentScene === 0) return; // 브라우저 바운스 효과로 인해 마이너스가 되는 것을 방지(모바일)
      currentScene--;
      document.body.setAttribute('id', `show-scene-${currentScene}`);
    }

    playAnimation();
  }
  
  window.addEventListener('scroll', () => {
    yOffset = window.scrollY;
    scrollLoop();
  });
  
  // window.addEventListener('DOMContentLoaded', setLayout()); // DOM구조 로드 완료 시 실행, 빠르다
  window.addEventListener('load', setLayout()); // 이미지를 포함한 모든 리소스 로드 완료 시 실행
  window.addEventListener('resize', setLayout());

})();