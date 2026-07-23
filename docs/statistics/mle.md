---
title: Maximum Likelihood Estimation (MLE)
---

# Maximum Likelihood Estimation (MLE)

!!! abstract "Summary"
    Choose the parameter value that **maximizes the likelihood** of the observed data.

## Definition

For i.i.d. observations $x_1, \dots, x_n$ with density $f(x \mid \theta)$, the likelihood and log-likelihood are

\[
L(\theta) = \prod_{i=1}^{n} f(x_i \mid \theta), \qquad
\ell(\theta) = \sum_{i=1}^{n} \log f(x_i \mid \theta)
\]

The MLE maximizes this:

\[
\hat{\theta}_{\text{MLE}} = \arg\max_{\theta} \ \ell(\theta)
\]

## Example: mean of a normal

For $X_i \sim N(\mu, \sigma^2)$, the MLE of $\mu$ is the sample mean:

\[
\hat{\mu}_{\text{MLE}} = \frac{1}{n} \sum_{i=1}^{n} x_i = \bar{x}
\]

## Properties

- **Consistency** — converges to the true value as $n \to \infty$
- **Asymptotic normality** — $\sqrt{n}(\hat\theta - \theta) \xrightarrow{d} N\!\big(0,\ I(\theta)^{-1}\big)$
- **Invariance** — the MLE of $g(\theta)$ is $g(\hat\theta)$

Here $I(\theta)$ is the Fisher information.

## Code example (numerical optimization)

```python
import numpy as np
from scipy.optimize import minimize

def neg_log_likelihood(params, data):
    mu, log_sigma = params
    sigma = np.exp(log_sigma)          # keep sigma > 0
    ll = -0.5 * np.sum(((data - mu) / sigma) ** 2
                       + np.log(2 * np.pi * sigma ** 2))
    return -ll                         # turn into a minimization

res = minimize(neg_log_likelihood, x0=[0.0, 0.0], args=(data,))
mu_hat, sigma_hat = res.x[0], np.exp(res.x[1])
```

!!! note "References"
    - ⟨Links you read⟩
