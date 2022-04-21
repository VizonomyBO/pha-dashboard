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

export const getDeckInitState = (inputText: InputTextInterface, initView: ViewStateInterface) => {
  const newDeckDefault = {
    ...deckDefaults,
    initialStateView: initView
  };
  if (inputText?.bbox && inputText.bbox.length === 4) {
    const newviewport = getLatLonViewport(inputText);
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
      zoom: 2
    };
  }
  return { ...newDeckDefault, renderToolTip: RenderTooltip };
};
