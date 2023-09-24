import {Gender} from '@/common/gender'

enum KamatcherClose {
  Groin,
  Breast,
  Legs,
  Hips,
  Body,
}

const KamatcherClosesByGender = {
  [Gender.Woman]: {
    [KamatcherClose.Groin]: 'трусики',
    [KamatcherClose.Breast]: 'бюстгалтер',
    [KamatcherClose.Legs]: 'чулки (носки)',
    [KamatcherClose.Hips]: 'юбка',
    [KamatcherClose.Body]: 'кофта ???',
  },
  [Gender.Man]: {
    [KamatcherClose.Groin]: 'трусы',
    [KamatcherClose.Breast]: 'галстук (бабочка)',
    [KamatcherClose.Legs]: 'носки',
    [KamatcherClose.Hips]: 'штаны (шорты)',
    [KamatcherClose.Body]: 'рубаха (футболка)',
  },
}

const KamatcherClosePositionsName = {
  [KamatcherClose.Groin]: 'пах',
  [KamatcherClose.Breast]: 'грудь',
  [KamatcherClose.Legs]: 'ноги',
  [KamatcherClose.Hips]: 'бёдра',
  [KamatcherClose.Body]: 'тело',
}
