import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { fetchMovies } from '../../src/api/movie.js'; // Import the fetchMovies function
import { renderMovieItemPage } from '../../src/templates/renderMovieItemPage.js'; // Import the renderMovieItemPage template function
import { TMDB_MOVIE_LISTS } from '../../src/constants/constant.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get('/', async (_, res) => {
  try {
    const movies = await fetchMovies(TMDB_MOVIE_LISTS.POPULAR); // Fetch movie data from API

    const templatePath = path.join(__dirname, '../../views', 'index.html');
    const template = fs.readFileSync(templatePath, 'utf-8');

    const renderedHTML = renderMovieItemPage(movies);

    res.send(renderedHTML);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).send('Error rendering the page');
  }
});

router.get('/now-playing', async (_, res) => {
  try {
    const movies = await fetchMovies(TMDB_MOVIE_LISTS.NOW_PLAYING); // Fetch movie data from API

    const templatePath = path.join(__dirname, '../../views', 'index.html');
    const template = fs.readFileSync(templatePath, 'utf-8');

    const renderedHTML = renderMovieItemPage(movies);

    res.send(renderedHTML);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).send('Error rendering the page');
  }
});

router.get('/popular', async (_, res) => {
  try {
    const movies = await fetchMovies(TMDB_MOVIE_LISTS.POPULAR); // Fetch movie data from API

    const templatePath = path.join(__dirname, '../../views', 'index.html');
    const template = fs.readFileSync(templatePath, 'utf-8');

    const renderedHTML = renderMovieItemPage(movies);

    res.send(renderedHTML);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).send('Error rendering the page');
  }
});

router.get('/top-rated', async (_, res) => {
  try {
    const movies = await fetchMovies(TMDB_MOVIE_LISTS.TOP_RATED); // Fetch movie data from API

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const templatePath = path.join(__dirname, '../../views', 'index.html');
    const template = fs.readFileSync(templatePath, 'utf-8');

    const renderedHTML = renderMovieItemPage(movies);

    res.send(renderedHTML);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).send('Error rendering the page');
  }
});

router.get('/upcoming', async (_, res) => {
  try {
    const movies = await fetchMovies(TMDB_MOVIE_LISTS.UPCOMING); // Fetch movie data from API

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const templatePath = path.join(__dirname, '../../views', 'index.html');
    const template = fs.readFileSync(templatePath, 'utf-8');

    const renderedHTML = renderMovieItemPage(movies);

    res.send(renderedHTML);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).send('Error rendering the page');
  }
});

export default router;
