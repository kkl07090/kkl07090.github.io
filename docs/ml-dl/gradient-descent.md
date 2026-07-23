---
title: Gradient Descent
---

# Gradient Descent

!!! abstract "Summary"
    An optimization method that minimizes a loss function $J(\theta)$ by repeatedly stepping the parameters in the opposite direction of the gradient.

## Core idea

Update the parameters $\theta$ with the rule:

\[
\theta \leftarrow \theta - \eta \, \nabla_\theta J(\theta)
\]

- $\eta$ — learning rate
- $\nabla_\theta J(\theta)$ — gradient of the loss

Too large a learning rate diverges; too small converges slowly.

## Variants

| Method | Data per step | Character |
|--------|---------------|-----------|
| Batch GD | All | Stable but slow |
| Stochastic GD (SGD) | 1 sample | Fast but noisy |
| Mini-batch GD | A batch | The practical standard |

## Code example (linear regression)

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

1. Gradient of the MSE loss: $\nabla J = \frac{2}{m} X^\top (X\theta - y)$

## Takeaways

- Learning-rate tuning and feature scaling strongly affect convergence.
- Momentum and Adam are improvements built on this base form.

!!! note "References"
    - ⟨Books / papers / links you read⟩
