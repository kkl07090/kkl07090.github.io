# 핵심 지표 용어

투자 성과와 위험을 평가할 때 자주 쓰는 지표들을 정리한다.

## 수익률 (Return)

- **단순 수익률** · $R_t = \dfrac{P_t - P_{t-1}}{P_{t-1}}$
- **로그 수익률** · $r_t = \ln\!\dfrac{P_t}{P_{t-1}}$ — 시간에 대해 가법적이라 분석에 편리

## 변동성 (Volatility)

수익률의 표준편차. 연율화(annualize)할 때는 거래일 수 $\approx 252$ 로 스케일:

\[
\sigma_{\text{annual}} = \sigma_{\text{daily}} \times \sqrt{252}
\]

## 샤프 비율 (Sharpe Ratio)

위험 한 단위당 초과수익:

\[
\text{Sharpe} = \frac{\mathbb{E}[R_p] - R_f}{\sigma_p}
\]

- $R_p$ : 포트폴리오 수익률, $R_f$ : 무위험 수익률, $\sigma_p$ : 수익률 표준편차
- 값이 클수록 위험 대비 성과가 좋다.

## 최대 낙폭 (MDD, Maximum Drawdown)

고점 대비 최대 하락률. 리스크 체감 지표로 많이 쓴다.

\[
\text{MDD} = \min_t \frac{P_t - \max_{s \le t} P_s}{\max_{s \le t} P_s}
\]

## 용어 빠른 정리

| 용어 | 의미 |
|------|------|
| 무위험 수익률 (Risk-free rate) | 국채 등 위험이 거의 없는 자산의 수익률 |
| 베타 (Beta) | 시장 대비 민감도 |
| 알파 (Alpha) | 시장을 초과한 초과수익 |
| VaR | 특정 신뢰수준에서의 최대 예상 손실 |

!!! note "참고 자료"
    - ⟨읽은 자료 링크⟩
