import dateFormat, { masks, i18n } from 'dateformat'

export const getBirthday = (date) => {
  i18n.monthNames = [
    'янв',
    'фев',
    'мар',
    'апр',
    'мая',
    'июн',
    'июл',
    'авг',
    'сент',
    'окт',
    'нояб',
    'дек',
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ]
  masks.myFormat = 'dd mmmm yyyy'
  return dateFormat(date, 'myFormat')
}
