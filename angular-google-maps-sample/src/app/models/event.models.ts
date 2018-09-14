export interface ILocation {
  lat: number;
  long: number;
  location_name: string;
  location_type: string;
}

export interface IEvent {
  id: string;
  event_number: string;
  type: string;
  short_text: string;
  status: string;
  location: ILocation;
  created_at: string;
}

export interface ISupplyEvent extends IEvent {
  supplyLocations: ISupplyLocation[];
}

export interface ISupplyLocation extends ILocation {
  id: string;
  is_supplied: boolean;
  supplied_at?: string;
  supplied_by?: any;
}
