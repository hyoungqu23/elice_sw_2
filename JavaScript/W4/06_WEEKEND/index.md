# HANG MAN GAME

## Intro

알파벳을 하나씩 선택해 주어진 기회 안에 단어를 맞추는 게임.

게임 시작 버튼을 누르면, 단어의 길이와 공백만 보여주고 타이머가 시작되고, 하단부에 구현한 키보드 레이아웃의 알파벳을 클릭하게끔 되어 있다.

이때 클릭한 알파벳이 단어에 들어 있는 경우, 그 알파벳의 위치가 드러나고, 아닌 경우 좌측부에 행맨이 단계별로 나타난다.

총 7번의 기회가 있고, 틀릴 때마다 기회가 줄어들며, 타이머로 설정된 60초가 지나면 패배 메시지가 뜬다.

단어를 7번의 기회와 60초 이내에 맞춘 경우, 승리 메시지가 뜬다.

## State

남은 시간, 기회, 선택한 알파벳, 게임의 진행 상태 등의 데이터를 저장하고, 그 정보를 기준으로 필요한 UI를 화면에 그려야 한다. 이러한 상태를 State 객체로 관리할 수 있다.

상태를 관리하는 객체는 불변 객체이며, 상태가 변경될 때 새로운 객체가 되는 것이다. 상태를 변경하고자 할 때에 특정 메서드를 호출하도록 해야 한다.

## Component

컴포넌트는 특정 UI 영역을 담당하며, 화면을 구성하게 된다.

컴포넌트는 상태를 직접 변경해서는 안 되고, 상태를 받아 사용만 하고, 변경의 필요성이 있는 경우 상태 변경을 요청해야 한다. 상태를 직접적으로 변경하는 것은 상태를 관리하는 코드에서 해야 한다.
