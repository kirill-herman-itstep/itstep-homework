'use strict';

import { UserCollection, User } from '../model/UserCollection.model.js';

const inwesting = new User('Инвестинг', '123456');
const Miller = new User('Миллер', '856471');
const ilonMask = new User('Илон Маск', '152364');
const buterin = new User('Виталик Бутерин', '15896');
const tramp = new User('Дональд Трамп', '158969');

export const userCollectionTest = new UserCollection([inwesting, Miller, ilonMask, buterin, tramp]);
