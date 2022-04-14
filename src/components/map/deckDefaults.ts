import { DEFAULT_VIEW_STATE } from '../../constants/index';
import { DeckInterface } from '../../@types';

export const deckDefaults: DeckInterface = {
  initialStateView: DEFAULT_VIEW_STATE,
  onViewStateChange: () => '',
  controller: true,
  layers: [],
  onClickFunction: () => '',
  onLoadFunction: () => '',
  onTransitionEnd: () => ''
};
