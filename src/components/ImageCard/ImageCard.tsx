import { Photo } from '../../types';
import css from './ImageCard.module.css';

interface ImageCardProps {
  value: Photo;
  onOpenModal: (imageValue: Photo) => void;
}
export default function ImageCard({ value, onOpenModal }: ImageCardProps) {
  return (
    <div className={css.imageContainer}>
      <img
        onClick={() => onOpenModal(value)}
        className={css.image}
        src={value.urls.small}
        alt={value.description}
      />
    </div>
  );
}
