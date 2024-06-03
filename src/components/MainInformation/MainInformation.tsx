import css from './MainInformation.module.css';

export default function MainInformation() {
  return (
    <>
      <h1 className={css.title}> Welcome!</h1>
      <p className={css.description}>
        Welcome to our image search web application! Here, you can find and
        browse various images quickly and conveniently. Simply enter a keyword
        into the search field below, and we'll show you the results!
      </p>

      <h3> How to Use: </h3>
      <ul className={css.listContainer}>
        <li>
          Enter a Keyword: In the search bar above, type the word or phrase you
          wish to find images of.{' '}
        </li>
        <li>
          {' '}
          Click the Search Button: After entering your keyword, click the search
          button or press "Enter" to see the results.{' '}
        </li>
        <li>
          Browse the Results: After performing the search, you'll see a gallery
          of images related to your query. Click on any image to view it in full
          size.
        </li>
      </ul>
      <h3>Enjoy Your Image Search!</h3>
    </>
  );
}
