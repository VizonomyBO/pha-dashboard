import { WebMercatorViewport } from 'deck.gl';
import RenderTooltip from './RenderTooltip';
import { InputTextInterface } from '../../@types/database';
import { deckDefaults } from './deckDefaults';

export const getDeckInitState = (inputText: InputTextInterface) => {
  const newDeckDefault = {
    ...deckDefaults
  };
  if (inputText?.bbox && inputText.bbox.length === 4) {
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
        padding: 200
      }
    );
    newDeckDefault.initialStateView = {
      ...newDeckDefault.initialStateView,
      latitude: newviewport.latitude,
      longitude: newviewport.longitude,
      zoom: newviewport.zoom
    };
  } else if (inputText?.text !== '' && inputText?.center) {
    newDeckDefault.initialStateView = {
      ...newDeckDefault.initialStateView,
      latitude: inputText.center[1],
      longitude: inputText.center[0],
      zoom: 12
    };
  }
  return { ...newDeckDefault, renderToolTip: RenderTooltip };
};
