// Песня
// eslint-disable-next-line no-unused-vars
const song = {
  id: 1, // время создания?
  title: '',
  text: '',
  chords: '',
  download: '', // файл для скачивания
  metronome: '',
  tags: [],
  linksVideo: [],
  language: '',
  isFavorite: false
}

// Пользователь
// eslint-disable-next-line no-unused-vars
const user = {
  id: 1,
  name: '',
  surname: '',
  oldSurname: '',
  birthday: '',
  creationDate: '',
  image: '',
  positionInTeam: '', // нужно ли потом будет?
  rule: '' // админ, редактор, обычный, гость
}

// Теги к песне
// Быстрая, медленная, Гимн... любые
// eslint-disable-next-line no-unused-vars
const tag = {
  id: 1,
  name: ''
}

// Комментарии к песне (ПОЗЖЕ)
// eslint-disable-next-line no-unused-vars
const comment = {
  id: 1,
  name: ''
}
