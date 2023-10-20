---
sidebar_position: 1
---

# 맥북을 구매한 후 하는 설정들
> 맥북을 남들보다 자주 바꾸는 편이라고 생각합니다. 맥북을 매번 구매할 때마다 맥에서 제공하는 친절한 마이그레이션없이 깡통부터 설치하는 것을 좋아하는 편이라, 해당 과정들을 기록합니다.

## 1. 프로그램 설치

### 1.1 homebrew 설치
https://brew.sh/index_ko 에 심플하게 설명되어있으나, 바로 설치하려면 아래의 스크립트를 쉘로 실행합니다.

```shell install-homebrew.sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 1.2 homebrew를 통한 필요한 프로그램들 설치
가급적 필요한 application은 웹에서 다운로드가 아닌 homebrew를 통해서 다운받으면, 추후 `brew uninstall APP_NAME`의 명령어로 쉽게 삭제할 수 있어 좋습니다. 

몇몇 패키지는 cask를 tap한 이후에 설치해서, 아래 스크립트를 먼저 실행해줍니다.

```shell
brew tap homebrew/cask-fonts && brew tap homebrew/cask-drivers
```

- Formulae
  - go 1.19 (golang ❤️)
  - krew (kubectl plugin manager)(~~krew가 알아서 해주는건 좋은데 버젼관리가 어려워서 가급적 안쓰는걸 추천..~~ )
  - kubrenetes-cli (kubectl 명령어 사용할 수 있도록 도와줌)
  - helm (쿠버네티스 설정 yaml 파일 빌더)
  - k6 (API 벤치마크/스트레스 테스트 도구)
  - kind (kubrenetes-in-docker, 도커로 쿠버네티스를 구성할 수 있는 패키지)
  - k9s (쿠버네티스 모니터링)
  - nvm (노드 가상환경 관리도구)


- Casks
  - aldente (맥북 배터리 사이클 관리 도구)
  - figma (디자이너와 협업 도구)
  - google-chrome (누구나 아는 크롬 브라우저)
  - linear-linear (프로젝트 티켓 관리도구)
  - notion (사내 문서도구)
  - shottr (화면 캡쳐도구)
  - bartender (상단 아이콘들을 줄여서 보여줄 수 있는 도구)
  - font-jetbrains-mono (젯브레인 코딩용 폰트)
  - insomnia (API 테스트/문서화 도구) (~~postman은 질렸어요..~~)
  - logi-options-plus (로지텍 장비를 커스터마이즈 할 수 있는 프로그램)
  - obsidian (마크다운 글 작성 도구)
  - visual-studio-code (간단하지만 만능 코드 에디터)
  - datagrip (젯브레인 DB 관리 도구)
  - gitify (git PR 알람 도구...인데 살짝 불편)
  - iterm2 (국민 터미널 도구)
  - miniconda (파이썬 설치 & 가상환경 분리에 최고)
  - pycharm (젯브레인 python 개발 도구)
  - docker (젯브레인 DB 관리 도구)
  - goland (젯브레인 golang 개발 도구)
  - keka (압축 도구)
  - naver-whale (업무용 브라우저)
  - rapidapi (insomnia가 좋은데, 한번 데이터를 다 날려먹어서 갈아탈까 고민했던 API 도구)
  - webstorm (젯브레인 web 개발 도구)


### 1.3 iTerm 설정

#### 테마 변경
[https://github.com/chinhsuanwu/one-dark-pro-iterm](https://github.com/chinhsuanwu/one-dark-pro-iterm) 참고해서 테마를 변경해줍니다.

#### Oh My Zsh 설치
```shell
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

#### option + 좌우 방향키로 터미널 내에서 좌우단위로 움직일수 있도록 하기
![iTerm arrow setup](/img/docs/SCR-20230723-pejo.png)

#### Jetbrains mono 폰트로 변경
![iTerm font setup](/img/docs/SCR-20230723-pgjp.png)

#### powerlevel10k 설정
해당 설정값들은 개인 취향이라 감히 설명드리기 어렵지만, [홈페이지](https://github.com/romkatv/powerlevel10k) 가이드대로 진행해주면 됩니다.

### 1.4 App Store 프로그램 설치 목록
- Kakaotalk
- Goodnotes5
- XCode
- Magnet
- Next Metting

## 2. 시스템 설정 변경

### 2.1 Finder 에 홈폴더 보이도록 표시
저는 대부분의 파일을 홈폴더 아래에 위치시키는데, 안보이면 불편하므로 추가해둡니다.
![finder home folder setup](/img/docs/SCR-20230723-pkqw.png)

### 2.2 스크린샷 폴더 변경

기본 스크린샷 저장위치는 바탕화면인데, 바탕화면에 많이 쌓이는게 싫어서, 별도의 screenshots 폴더에 저장되도록 변경해줍니다.
(저의 경우는 mac 계정이름이 strender여서, 아래에 /Users/ 밑에 strender 라는 경로로 지정해주었습니다.)

```shell
defaults write com.apple.screencapture location /Users/strender/screenshots
```

### 2.3 키보드
키보드 설정에서 Key repeat rate를 가장 빠르게 설정해두면 키보드가 괜히 빠릿빠릿해진것 같고 좋습니다.
또한, 지구본 모양의 단축키를 이모지 입력으로 맵핑하여 이모지 입력을 좀더 용이하게 합니다.
![finder home folder setup](/img/docs/SCR-20230723-plqb.png)

### 2.4 Dock
저는 Dock이 화면에 공간을 차지하는 것을 좋아하지 않는 편이라, 숨김처리 해줍니다.
![change docksize](/img/docs/SCR-20230723-pmct.png)

### 2.3 Hot Corner
가끔 작업하다가 제멋대로 노트가 켜지는 등의 Action이 발생하길래 알아봤더니, hot corners라는 기능이 생긴 뒤였습니다. 잘 활용하시는 분들도 계실것 같으나 저의 경우는 불편하고 불필요하여 모두 제거해줍니다.
![remove hotcorner](/img/docs/SCR-20230723-pmue.png)


## 3. 그 외
Jetbrains 제품군 설정들 그리고 VSCode 관련 설정들은 별도의 글로 연재하겠습니다🙃