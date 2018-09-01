import { ISupplyEvent } from './event.models';

export interface IAppState {
  eventList: ISupplyEvent[];
  isHomePage: boolean;
  appName: string;
  selectedEvent: ISupplyEvent;
}
