'use strict'
import {Tweet} from './../model/Tweet.model.js'

export const _tweets = [new Tweet('Сегодня цена на газ снизилась до 2,3$ за МБТЕ', '2023-02-20', 'Инвестинг'),
new Tweet('В ближайшее время цена на газ еще уменьшится', '2023-02-22', 'Миллер'),
new Tweet('Цена на биткоин выпросла до 27 000$', '2023-02-24', 'Инвестинг'),
new Tweet('Эфир стоит дешевле 1700$', '2023-02-28', 'Инвестинг'),
new Tweet('Нефть сегодня дороже 85$', '2023-03-01', 'Инвестинг'),
new Tweet('С завтрашнего дня мы запускаем проект по колонизации к Сатурна', '2023-03-03', 'Илон Маск'),
new Tweet('Я планирую балотироваться на пост президента USA', '2023-03-05', 'Илон Маск'),
new Tweet('Эфир перейдет на технологию шардинга к лету', '2023-03-06', 'Виталик Бутерин'),
new Tweet('Мы в очередной раз планируем поменять главу Twitter', '2023-03-06', 'Илон Маск'),
new Tweet('На этих выборах демократы точно проиграют', '2023-03-07', 'Дональд Трамп'),
new Tweet('Сегодня цена на газ поднялась до 2,4$ за МБТЕ', '2023-03-08', 'Инвестинг'),
new Tweet('Это временные колебания', '2023-03-12', 'Миллер'),
new Tweet('Цена на биткоин выпросла до 28 000$', '2023-03-12', 'Инвестинг'),
new Tweet('Эфир вырос в цене до 1800$', '2023-03-13', 'Инвестинг'),
new Tweet('Нефть сегодня дешевле 82$', '2023-03-14', 'Инвестинг', []),
new Tweet('С завтрашнего дня мы запускаем проект по колонизации к Сатурна', '2023-03-15', 'Илон Маск'),
new Tweet('На заводе Тесла в Китае пройдет модернизация', '2023-03-16', 'Илон Маск'),
new Tweet('Все приготовления к переходу эфира на новую платформу идут по плану', '2023-03-17', 'Виталик Бутерин'),
new Tweet('Мы создадим свой Chat GPT', '2023-03-17', 'Илон Маск'),
new Tweet('ФРС в очередной раз подняло ставку на 0,25 пункта', '2023-03-18', 'Дональд Трамп')]

export const _tweets2 = [new Tweet('Валидный', '2023-02-20', 'Сергей'),
new Tweet('Невалидный (!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!)', 'Сергей'),
new Tweet('Валидный', '2023-02-24', 'Сергей'),
new Tweet('Невалидный!', '2023-02-28', ''),
new Tweet('Валидный', '2023-03-01', 'Сергей'),
new Tweet('Валидный','2023-03-04', 'Сергей')]