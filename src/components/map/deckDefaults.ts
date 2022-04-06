import {
  DEFAULT_VIEW_STATE
} from '../../constants/index';
import { DeckInterface } from '../../@types';

export const deckDefaults: DeckInterface = {
  initialStateView: DEFAULT_VIEW_STATE,
  onViewStateChange: () => void(0),
  controller: true,
  layers: [],
  onClickFunction: () => void(0)
}