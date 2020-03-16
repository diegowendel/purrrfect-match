# Purrrfect Match

Frontend test project built using:
- React
- Redux
- Redux-saga
- Plain CSS (without styling libraries)
- Responsiveness implemented with flexbox, css grid and media queries
- Data fetched from [The Cat API](https://docs.thecatapi.com/)
- Tests of components `CatBreed` and `CatList` with Jest/Enzyme
- Hosted on GH Pages: https://diegowendel.github.io/purrrfect-match/

## Pages

### List Page

![page1](docs/img/page1.png)

|      List Page Mobile 1      |      List Page Mobile 2      |
| :--------------------------: | :--------------------------: |
| ![page4](docs/img/page4.png) | ![page5](docs/img/page5.png) |

### Form Page

![page2](docs/img/page2.png)

|      Form Page Mobile 1      |      Form Page Mobile 2      |
| :--------------------------: | :--------------------------: |
| ![page8](docs/img/page8.png) | ![page9](docs/img/page9.png) |

### View Page

![page3](docs/img/page3.png)

|      View Page Mobile 1      |      View Page Mobile 2      |
| :--------------------------: | :--------------------------: |
| ![page6](docs/img/page6.png) | ![page7](docs/img/page7.png) |


## Running Project

Clone the project and on the root folder install the dependencies

```
npm install
```

Create a file named `.env` on the project root folder and add the following var to it:

```
REACT_APP_API_KEY=YOUR_KEY_FROM_CAT_API_HERE
```

Start the app

```
npm start
```

## Running tests

On the root folder, run:

```
npm test
```