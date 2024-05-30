import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { Photo } from '../../types';

interface ImageGalleryProps {
  items: Photo[];
  onOpenModal: (imageValue: Photo) => void;
}

export default function ImageGallery({
  items,
  onOpenModal,
}: ImageGalleryProps) {
  return (
    <div>
      <ul className={css.photosList}>
        {items.map(item => (
          <li key={item.id}>
            <ImageCard value={item} onOpenModal={onOpenModal} />
          </li>
        ))}
      </ul>
    </div>
  );
}
