import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { Photo } from '../../types';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: Photo;
}
export default function ImageModal({ isOpen, onClose, item }: ImageModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={css.modalOverlayStyle}
      className={css.content}
      ariaHideApp={false}
      onRequestClose={onClose}
    >
      <img
        className={css.image}
        src={item.urls.regular}
        alt={item.description}
      />
    </Modal>
  );
}
