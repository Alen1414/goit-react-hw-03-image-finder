export function fetchImage(nextName) {
    return (
        fetch(
        `https://pixabay.com/api/?q=${nextName}&page=1&key=25348834-538d9f4405bc5a9c16273efde&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(
            new Error(`Нет картинки с названием ${nextName}`)
          );
        })
    )
}
const api ={ fetchImage }
export default api;