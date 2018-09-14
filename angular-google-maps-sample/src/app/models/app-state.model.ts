import { ISupplyEvent } from './event.models';

export interface IAppState {
  eventList: ISupplyEvent[];
  isHomePage: boolean;
  currentEventId: string;
  errorMessage: string;
}
