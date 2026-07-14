# ARIMA 모형

!!! abstract "요약"
    ARIMA($p, d, q$)는 **자기회귀(AR)**, **차분(I)**, **이동평균(MA)**을 결합한 대표적인 단변량 시계열 예측 모형.

## 구성 요소

- **AR($p$)** — 과거 값들의 선형 결합
\[
y_t = c + \sum_{i=1}^{p} \phi_i \, y_{t-i} + \varepsilon_t
\]
- **I($d$)** — $d$번 차분하여 정상성(stationarity) 확보
- **MA($q$)** — 과거 오차들의 선형 결합
\[
y_t = \mu + \varepsilon_t + \sum_{j=1}^{q} \theta_j \, \varepsilon_{t-j}
\]

## 모형 선택 절차

1. **정상성 확인** — ADF 검정, 시각화
2. **차분 차수 $d$ 결정** — 정상 상태가 될 때까지
3. **$p, q$ 결정** — ACF/PACF, AIC/BIC 비교
4. **잔차 진단** — 백색잡음인지 확인 (Ljung–Box)

| 그래프 | 절단(cut-off) | 시사점 |
|--------|--------------|--------|
| PACF | $p$ 시점 이후 0 | AR 차수 |
| ACF | $q$ 시점 이후 0 | MA 차수 |

## 코드 예시 (statsmodels)

```python
import pandas as pd
from statsmodels.tsa.arima.model import ARIMA

model = ARIMA(series, order=(1, 1, 1))   # (p, d, q)
fit = model.fit()
print(fit.summary())

forecast = fit.forecast(steps=12)         # 향후 12기간 예측
```

!!! note "참고 자료"
    - ⟨읽은 자료 링크⟩
