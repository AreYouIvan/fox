
const isIntersecting = (entry) => {
  return entry.isIntersecting
}

const loadImage = (entry) => {

  const container = entry.target
  const wrapper = container.firstChild;
  const image = wrapper.firstChild;
  const url = image.dataset.src
  console.log(image)

  image.src = url;

  observer.unobserve(container)
}

const observer = new IntersectionObserver((entries) => {
  entries
  .filter(isIntersecting)
  .forEach(loadImage)
});


export const registerImage = (image) => {
  observer.observe(image)
}

