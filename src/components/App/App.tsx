import { useState, useEffect } from 'react';

import { fetchPhotos } from './../../photo-search-api';

import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

import { Photo } from '../../types';
import './App.css';

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectImage, setSelectImage] = useState<Photo>();

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getPhotos<T>(): Promise<void> {
      try {
        setError(false);
        setIsLoading(true);
        const data: T = await fetchPhotos(query, page);
        setPhotos(prevPhotos => {
          return [...prevPhotos, ...(data as [])];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getPhotos();
  }, [query, page]);

  const handleSearch = (searchQuery: string): void => {
    setQuery(searchQuery);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = (): void => {
    setPage(page + 1);
  };

  const handleOpenModal = (imageValue: Photo): void => {
    setSelectImage(imageValue);
    setModalIsOpen(true);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {photos.length > 0 && (
        <ImageGallery items={photos} onOpenModal={handleOpenModal} />
      )}
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      {photos.length > 0 && !isLoading && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          item={selectImage!} //Non-null assertion operator
        />
      )}
    </>
  );
}
