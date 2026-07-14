# 경사하강법 (Gradient Descent)

!!! abstract "요약"
    손실 함수 $J(\theta)$를 최소화하기 위해, 기울기(gradient)의 반대 방향으로 파라미터를 반복 갱신하는 최적화 방법.

## 핵심 아이디어

파라미터 $\theta$를 다음 규칙으로 갱신한다:

\[
\theta \leftarrow \theta - \eta \, \nabla_\theta J(\theta)
\]

- $\eta$ : 학습률(learning rate)
- $\nabla_\theta J(\theta)$ : 손실 함수의 기울기

학습률이 너무 크면 발산하고, 너무 작으면 수렴이 느리다.

## 종류

| 방식 | 한 스텝에 쓰는 데이터 | 특징 |
|------|----------------------|------|
| Batch GD | 전체 | 안정적이지만 느림 |
| Stochastic GD (SGD) | 1개 샘플 | 빠르지만 진동 |
| Mini-batch GD | 일부 배치 | 실무 표준 |

## 코드 예시 (선형 회귀)

```python
import numpy as np

def gradient_descent(X, y, lr=0.01, n_iter=1000):
    m, n = X.shape
    theta = np.zeros(n)
    for _ in range(n_iter):
        grad = (2 / m) * X.T @ (X @ theta - y)  # (1)
        theta -= lr * grad
    return theta
```

1. MSE 손실의 기울기: $\nabla J = \frac{2}{m} X^\top (X\theta - y)$

## 정리하며

- 학습률 조정과 스케일링(표준화)이 수렴에 큰 영향을 준다.
- 모멘텀, Adam 등은 이 기본형을 개선한 변형이다.

!!! note "참고 자료"
    - ⟨읽은 책/논문/링크를 여기에⟩
