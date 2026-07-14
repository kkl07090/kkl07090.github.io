# 최대우도추정 (MLE)

!!! abstract "요약"
    관측 데이터가 나올 **가능도(likelihood)를 최대로 만드는** 모수 값을 추정치로 삼는 방법.

## 정의

관측치 $x_1, \dots, x_n$ 이 i.i.d. 이고 밀도함수가 $f(x \mid \theta)$ 일 때, 가능도와 로그가능도는

\[
L(\theta) = \prod_{i=1}^{n} f(x_i \mid \theta), \qquad
\ell(\theta) = \sum_{i=1}^{n} \log f(x_i \mid \theta)
\]

MLE는 이를 최대화하는 값이다:

\[
\hat{\theta}_{\text{MLE}} = \arg\max_{\theta} \ \ell(\theta)
\]

## 예시: 정규분포의 평균

$X_i \sim N(\mu, \sigma^2)$ 에서 $\mu$의 MLE는 표본평균이다:

\[
\hat{\mu}_{\text{MLE}} = \frac{1}{n} \sum_{i=1}^{n} x_i = \bar{x}
\]

## 성질

- **일치성(consistency)** — $n \to \infty$ 일 때 참값으로 수렴
- **점근적 정규성** — $\sqrt{n}(\hat\theta - \theta) \xrightarrow{d} N\!\big(0,\ I(\theta)^{-1}\big)$
- **불변성(invariance)** — $g(\theta)$의 MLE는 $g(\hat\theta)$

여기서 $I(\theta)$ 는 피셔 정보량(Fisher information).

## 코드 예시 (수치 최적화)

```python
import numpy as np
from scipy.optimize import minimize

def neg_log_likelihood(params, data):
    mu, log_sigma = params
    sigma = np.exp(log_sigma)          # sigma > 0 보장
    ll = -0.5 * np.sum(((data - mu) / sigma) ** 2
                       + np.log(2 * np.pi * sigma ** 2))
    return -ll                         # 최소화 문제로 변환

res = minimize(neg_log_likelihood, x0=[0.0, 0.0], args=(data,))
mu_hat, sigma_hat = res.x[0], np.exp(res.x[1])
```

!!! note "참고 자료"
    - ⟨읽은 자료 링크⟩
