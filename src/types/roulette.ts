export interface Roulette {
  readonly minQuantity: number;
  readonly maxQuantity: number;
  readonly boardList: string[];
  optionList: string[];
  optionFirst: string;
  optionSecond: string;
  optionThird: string;
  optionForth: string;
  optionFirstDone: boolean;
  optionSecondDone: boolean;
  optionThirdDone: boolean;
  optionForthDone: boolean;
}
