---
title: ARIMA Models
---

# ARIMA Models

!!! abstract "Summary"
    ARIMA($p, d, q$) combines **AutoRegression (AR)**, **Integration/differencing (I)**, and **Moving Average (MA)** — a classic univariate forecasting model.

## Components

- **AR($p$)** — linear combination of past values
\[
y_t = c + \sum_{i=1}^{p} \phi_i \, y_{t-i} + \varepsilon_t
\]
- **I($d$)** — difference $d$ times to reach stationarity
- **MA($q$)** — linear combination of past errors
\[
y_t = \mu + \varepsilon_t + \sum_{j=1}^{q} \theta_j \, \varepsilon_{t-j}
\]

## Model selection

1. **Check stationarity** — ADF test, plots
2. **Choose differencing order $d$** — until stationary
3. **Choose $p, q$** — ACF/PACF, compare AIC/BIC
4. **Diagnose residuals** — should be white noise (Ljung–Box)

| Plot | Cut-off | Implies |
|------|---------|---------|
| PACF | after lag $p$ | AR order |
| ACF | after lag $q$ | MA order |

## Code example (statsmodels)

```python
import pandas as pd
from statsmodels.tsa.arima.model import ARIMA

model = ARIMA(series, order=(1, 1, 1))   # (p, d, q)
fit = model.fit()
print(fit.summary())

forecast = fit.forecast(steps=12)         # forecast next 12 periods
```

!!! note "References"
    - ⟨Links you read⟩
