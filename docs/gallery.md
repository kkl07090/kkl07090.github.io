# Gallery

A place to show off project outputs, handwritten notes, visualizations, and photos.

<div class="gallery" markdown="0">

  <figure>
    <div class="ph">Image slot 1</div>
    <figcaption>⟨Add a caption⟩</figcaption>
  </figure>

  <figure>
    <div class="ph">Image slot 2</div>
    <figcaption>⟨e.g. ARIMA forecast plot⟩</figcaption>
  </figure>

  <figure>
    <div class="ph">Image slot 3</div>
    <figcaption>⟨e.g. handwritten statistics notes⟩</figcaption>
  </figure>

  <figure>
    <div class="ph">Image slot 4</div>
    <figcaption>⟨e.g. project dashboard⟩</figcaption>
  </figure>

</div>

---

## How to add images

1. Put your image files in `docs/assets/img/`.
2. Replace a `<div class="ph">Image slot</div>` above with a real image:

```html
<figure>
  <img src="assets/img/my-photo.jpg" alt="description">
  <figcaption>Your caption here</figcaption>
</figure>
```

!!! tip
    Different aspect ratios are auto-cropped into tidy thumbnails. To link to the full image, wrap the `<img>` in an `<a href="...">`.
