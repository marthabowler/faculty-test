export interface reactFlowDataTypeSimple {
  id: string;
  data: { label: JSX.Element } | undefined;
  position: { x: number; y: number } | undefined;
}

export interface reactFlowDataTypeComplex {
  id: string;
  data?: { label: JSX.Element } | undefined;
  position?: { x: number; y: number } | undefined;
  source?: string | undefined;
  target?: string | undefined;
}
