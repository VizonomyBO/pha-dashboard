import { WebMercatorViewport } from 'deck.gl';
import RenderTooltip from './RenderTooltip';
import { InputTextInterface } from '../../@types/database';
import { deckDefaults } from './deckDefaults';
import { ViewStateInterface } from '../../@types';

export const getLatLonViewport = (inputText: InputTextInterface) => {
  if (inputText?.bbox) {
    const viewportWebMercator = new WebMercatorViewport({
      width: window.innerWidth,
      height: window.innerHeight
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newviewport: any = viewportWebMercator.fitBounds(
      [
        [inputText.bbox[0], inputText.bbox[1]],
        [inputText.bbox[2], inputText.bbox[3]]
      ],
      {
        padding: window.innerWidth < 1000 ? 0 : 200
      }
    );
    return newviewport;
  }
  return {};
};

export const getDeckInitState = (initView: ViewStateInterface) => {
  const newDeckDefault = {
    ...deckDefaults,
    initialStateView: initView
  };
  return { ...newDeckDefault, renderToolTip: RenderTooltip };
};
