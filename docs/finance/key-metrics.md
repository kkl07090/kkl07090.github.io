# Key Metrics

Common metrics for evaluating investment performance and risk.

## Return

- **Simple return** · $R_t = \dfrac{P_t - P_{t-1}}{P_{t-1}}$
- **Log return** · $r_t = \ln\!\dfrac{P_t}{P_{t-1}}$ — additive over time, convenient for analysis

## Volatility

Standard deviation of returns. To annualize, scale by the number of trading days ($\approx 252$):

\[
\sigma_{\text{annual}} = \sigma_{\text{daily}} \times \sqrt{252}
\]

## Sharpe Ratio

Excess return per unit of risk:

\[
\text{Sharpe} = \frac{\mathbb{E}[R_p] - R_f}{\sigma_p}
\]

- $R_p$ — portfolio return, $R_f$ — risk-free rate, $\sigma_p$ — return volatility
- Higher is better risk-adjusted performance.

## Maximum Drawdown (MDD)

The largest peak-to-trough drop. A widely used risk measure.

\[
\text{MDD} = \min_t \frac{P_t - \max_{s \le t} P_s}{\max_{s \le t} P_s}
\]

## Quick glossary

| Term | Meaning |
|------|---------|
| Risk-free rate | Return of a near-riskless asset (e.g. treasuries) |
| Beta | Sensitivity relative to the market |
| Alpha | Excess return above the market |
| VaR | Maximum expected loss at a given confidence level |

!!! note "References"
    - ⟨Links you read⟩
