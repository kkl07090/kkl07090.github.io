# 노트 템플릿 (타이핑 ↔ 손필기 번갈아 쓰기)

!!! abstract "이 페이지 사용법"
    타이핑 칸과 손필기 사진 칸이 번갈아 나오는 **틀(템플릿)**입니다.
    새 노트를 만들 때 이 파일 내용을 복사해서 과목 폴더에 붙여넣고, 사진만 바꿔 끼우면 됩니다.

---

## 1. 타이핑 — 개념 정리

여기에 개념을 글로 적습니다. 수식도 바로 쓸 수 있어요.
예를 들어 최대우도추정은 우도함수 $L(\theta)$ 를 최대로 만드는 $\theta$ 를 찾는 방법입니다.

$$\hat\theta = \arg\max_\theta \; L(\theta)$$

## 2. 손필기 — 사진 자리 ①

<figure class="handwriting" markdown>
<div class="photo-slot">
  <span class="photo-slot__icon">📷</span>
  <span class="photo-slot__label">여기에 손필기 사진 ①</span>
  <span class="photo-slot__hint">docs/assets/img/ 에 사진을 넣고 아래 줄로 바꿔 끼우세요</span>
</div>
<figcaption>손으로 정리한 유도 과정</figcaption>
</figure>

<!-- 실제 사진을 넣을 때는 위의 <figure> 블록을 지우고 아래 한 줄을 쓰세요:
![손으로 정리한 유도 과정](../assets/img/note-01.jpg){ width="520" }
-->

## 3. 타이핑 — 보충 설명

사진에서 손으로 푼 내용을 글로 한 번 더 정리합니다.
이렇게 **손필기(직관) → 타이핑(정리)** 순서로 두면 나중에 복습할 때 편해요.

!!! note "핵심"
    로그를 씌우면 곱셈이 덧셈으로 바뀌어 미분·계산이 쉬워집니다.

## 4. 손필기 — 사진 자리 ②

<figure class="handwriting" markdown>
<div class="photo-slot">
  <span class="photo-slot__icon">📷</span>
  <span class="photo-slot__label">여기에 손필기 사진 ②</span>
  <span class="photo-slot__hint">예제 풀이나 그래프 스케치를 찍어서 넣으세요</span>
</div>
<figcaption>예제 풀이</figcaption>
</figure>

<!-- ![예제 풀이](../assets/img/note-02.jpg){ width="520" } -->

## 5. 타이핑 — 코드 / 마무리

```python
import numpy as np
# 필요하면 계산 코드나 시각화 코드를 여기에
```

- 이 순서를 원하는 만큼 반복하면 됩니다: **타이핑 → 사진 → 타이핑 → 사진 …**
- 사진을 넣으려면 `<figure>` 블록을 지우고 바로 아래 주석 속 `![...](...)` 한 줄로 바꾸면 끝.

!!! tip "사진 넣는 법 3초 요약"
    ① 사진을 `docs/assets/img/` 에 저장 →
    ② `![설명](../assets/img/파일이름.jpg){ width="520" }` 로 불러오기
