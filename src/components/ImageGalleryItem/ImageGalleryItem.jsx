export default function ImageGalleryItem({
  image: { webformatURL, largeImageURL, alt, hits, id },
}) {
  return (
    <li key={id} className="gallery-item">
      <img src={webformatURL} alt={alt} largeImg={largeImageURL} />
    </li>
  );
}

//  {hits.map(hit => (
//                 <li key={hit.id} className="gallery-item">
//                     <img src={hit.webformatURL} alt={hit.alt} largeImg={largeImageURL} />
//                 </li>
//             )
