import { INode } from 'markmap-common';

export interface IMarkmapOptions {
  id?: string;
  duration: number;
  nodeMinHeight: number;
  spacingVertical: number;
  spacingHorizontal: number;
  autoFit: boolean;
  fitRatio: number;
  color: (node: INode) => string;
  paddingX: number;
  style?: (id: string) => string;
  embedGlobalStyle: boolean;
}

export interface IMarkmapState {
  id: string;
  data?: INode;
  minX?: number;
  maxX?: number;
  minY?: number;
  maxY?: number;
}

export interface IMarkmapFlexTreeItem {
  parent: IMarkmapFlexTreeItem;
  data: INode;
  depth: number;
  xSize: number;
  ySize: number;
  ySizeInner: number;
  x: number;
  y: number;
}

export interface IMarkmapLinkItem {
  source: IMarkmapFlexTreeItem;
  target: IMarkmapFlexTreeItem;
}
