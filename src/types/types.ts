export interface AIResult {
  a4_bottom_left: Coordinate;
  a4_bottom_right: Coordinate;
  a4_top_left: Coordinate;
  a4_top_right: Coordinate;
  foot_central: Coordinate;
  foot_heel: Coordinate;
  foot_peripheral: Coordinate;
  foot_top: Coordinate;
  width: number;
  length: number;
  margin_height: number;
  margin_width: number;
  ref_width: number;
  ref_height: number;
  rescale_height: number;
  rescale_width: number;
  reconstructed_from_three_corners: boolean;
  uuid: string;
}

export type Coordinate = [number, number];