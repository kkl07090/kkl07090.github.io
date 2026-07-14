# Major Knowledge

Notes on my coursework, organized by subject. Like a blog, mix **handwriting, images, and typed explanations** freely.

<div class="grid cards" markdown>

-   :material-brain:{ .lg .middle } **ML · DL**

    ---

    Machine learning & deep learning concepts and algorithms

    [:octicons-arrow-right-24: Open](ml-dl/index.md)

-   :material-chart-line:{ .lg .middle } **Time Series**

    ---

    ARIMA, stationarity, forecasting models

    [:octicons-arrow-right-24: Open](time-series/index.md)

-   :material-sigma:{ .lg .middle } **Mathematical Statistics**

    ---

    Estimation, testing, probability distributions

    [:octicons-arrow-right-24: Open](statistics/index.md)

-   :material-cash-multiple:{ .lg .middle } **Finance**

    ---

    Financial terms and key metrics

    [:octicons-arrow-right-24: Open](finance/index.md)

</div>

---

## How to write a note (handwriting · images · typing)

### 1. Create a new note
Add a `topic-name.md` file to the subject folder (e.g. `docs/ml-dl/`), then add one line under `nav:` in `mkdocs.yml` to make it appear in the menu.

### 2. Add handwriting / images
Photograph or scan your notes, drop the file into `docs/assets/img/`, and reference it:

```markdown
![Gradient descent notes](../assets/img/gd-note.jpg)
```

Resize with attr_list if needed:

```markdown
![Notes](../assets/img/gd-note.jpg){ width="480" }
```

### 3. Typing + math
Type explanations, and write math with `$...$` (inline) or `$$...$$` (block):

```markdown
Gradient descent updates via $\theta \leftarrow \theta - \eta \nabla J(\theta)$.
```

### 4. Callout boxes

```markdown
!!! note "Key idea"
    Summarize the main point here.
```

!!! tip "Suggested flow"
    ① handwriting image for intuition → ② typed concept & math → ③ code example. Great for reviewing later.
